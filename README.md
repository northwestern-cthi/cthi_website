# Northwestern University Chinatown Health Initiative Website

A modern, responsive website built with Flask, HTML, and CSS for the Northwestern University Chinatown Health Initiative.

## Features

- **Modern Design**: Clean, professional interface with Northwestern University brand colors (Purple #4E2A84)
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Bilingual Support**: Full English and Chinese (中文) language support for health resources
- **Dropdown Navigation**: Organized navigation with dropdown menus for health education categories
- **Mobile-Friendly**: Hamburger menu with touch-optimized dropdowns for mobile devices
- **Fast & Lightweight**: Optimized performance with minimal dependencies
- **Smooth Animations**: Modern fade-in effects and hover transitions

## Project Structure

```
CTHI/
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── README.md              # This file
├── templates/                    # HTML templates
│   ├── base.html                # Base template with navigation and footer
│   ├── index.html               # Home page
│   ├── team.html                # Meet the Team page
│   ├── health_cards.html        # Health Education Cards overview
│   ├── health_card_detail.html  # Individual health card category pages
│   ├── resources_zh.html        # Chinese resources overview
│   ├── resources_zh_detail.html # Individual Chinese resource pages
│   └── contact.html             # Contact page
└── static/               # Static files
    ├── css/
    │   └── style.css     # Main stylesheet
    ├── js/
    │   └── script.js     # JavaScript for interactivity
    └── images/           # Images folder (add your images here)
```

## Installation

1. **Create a virtual environment** (recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

1. **Start the Flask development server**:
   ```bash
   python app.py
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:5000
   ```

## Pages

- **Home** (`/`): Main landing page with CTHI mission and "What We Do" sections
- **Meet the Team** (`/team`): Information about leadership and volunteer opportunities
- **Health Education Cards** (`/health-cards`): Overview of all health education resources
  - Individual category pages for: Cancer, Cardiovascular, Chronic Illness, Dental, Infections & Virus, Mental Health, Preventative Care, Respiratory, Sexual Health
- **健康教育資源** (`/resources-zh`): Chinese language health resources overview
  - Chinese language versions of all health education categories
- **Contact** (`/contact`): Contact information and form

## Customization

### Colors
The color scheme uses Northwestern University brand colors and can be customized in `static/css/style.css`:
- Primary: `#4E2A84` (Northwestern Purple)
- Secondary: `#B6ACD1` (Light Purple)
- Accent: `#C4003C` (Red)

### Content
Edit the HTML files in the `templates/` directory to update content.

### Images
Add your images to `static/images/` and reference them in templates using:
```html
<img src="{{ url_for('static', filename='images/your-image.jpg') }}" alt="Description">
```

## Deployment

For production deployment:

1. **Set a secure SECRET_KEY** in `app.py`
2. **Disable debug mode**: Change `debug=True` to `debug=False`
3. **Use a production server** like Gunicorn:
   ```bash
   pip install gunicorn
   gunicorn app:app
   ```

## Contributing

This website is maintained by the Northwestern University Chinatown Health Initiative team.

## License

© 2025 Northwestern University Chinatown Health Initiative. All rights reserved.

