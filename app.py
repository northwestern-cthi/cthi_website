from flask import Flask, render_template, request, session, redirect

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here-change-in-production'

# Health card categories
HEALTH_CATEGORIES = [
    {'id': 'cancer', 'name': 'Cancer', 'name_zh': '癌症資料卡'},
    {'id': 'cardiovascular', 'name': 'Cardiovascular Health', 'name_zh': '心臟健康卡'},
    {'id': 'chronic-illness', 'name': 'Chronic Illness', 'name_zh': '慢性病健康卡'},
    {'id': 'dental', 'name': 'Dental Health', 'name_zh': '牙科健康卡'},
    {'id': 'infections', 'name': 'Infections and Virus', 'name_zh': '感染和病毒健康卡'},
    {'id': 'mental-health', 'name': 'Mental Health', 'name_zh': '心理健康卡'},
    {'id': 'preventative', 'name': 'Preventative Care', 'name_zh': '預防保健卡'},
    {'id': 'respiratory', 'name': 'Respiratory Health', 'name_zh': '呼吸系統健康卡'},
    {'id': 'sexual-health', 'name': 'Sexual Health', 'name_zh': '性健康卡'},
]

def get_current_language():
    """Get the current language from session or default to English"""
    return session.get('language', 'en')

def set_language(lang):
    """Set the language in session"""
    session['language'] = lang

@app.route('/set-language/<lang>')
def set_language_route(lang):
    """Set language and redirect back"""
    if lang in ['en', 'zh']:
        set_language(lang)
    return redirect(request.referrer or '/')

@app.route('/')
def index():
    """Home page"""
    return render_template('index.html')

@app.route('/team')
def team():
    """Meet the Team page"""
    return render_template('team.html')

@app.route('/health-cards')
def health_cards():
    """All Health Education Cards"""
    return render_template('health_cards.html', categories=HEALTH_CATEGORIES)

@app.route('/health-cards/<category>')
def health_card_category(category):
    """Individual health card category"""
    # Find the category info
    cat_info = next((c for c in HEALTH_CATEGORIES if c['id'] == category), None)
    if not cat_info:
        return "Category not found", 404
    return render_template('health_card_detail.html', category=cat_info)

@app.route('/resources-zh')
def resources_zh():
    """Chinese Health Resources"""
    return render_template('resources_zh.html', categories=HEALTH_CATEGORIES)

@app.route('/resources-zh/<category>')
def resources_zh_category(category):
    """Individual Chinese health resource category"""
    cat_info = next((c for c in HEALTH_CATEGORIES if c['id'] == category), None)
    if not cat_info:
        return "Category not found", 404
    return render_template('resources_zh_detail.html', category=cat_info)

@app.route('/contact')
def contact():
    """Contact page"""
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)

