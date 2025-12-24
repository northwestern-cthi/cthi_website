# Northwestern University Chinatown Health Initiative Website

A modern, responsive website built with Flask, HTML, and CSS for the Northwestern University Chinatown Health Initiative.

## Features

- **Modern Design**: Clean, professional interface with Northwestern University brand colors
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Bilingual Support**: Full English and Chinese (中文) language support with toggle functionality
- **Team Profiles**: Comprehensive team page with Executive Board and committee member profiles
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
│   ├── team.html                # Meet the Team page with member profiles
│   ├── health_cards.html        # Health Education Cards overview
│   ├── health_card_detail.html  # Individual health card category pages
│   ├── resources_zh.html        # Chinese resources overview
│   ├── resources_zh_detail.html # Individual Chinese resource pages
│   └── contact.html             # Contact page
└── static/               # Static files
    ├── css/
    │   └── style.css     # Main stylesheet
    ├── js/
    │   └── script.js     # JavaScript for language toggle and interactivity
    ├── homepage_pics/    # Homepage images
    ├── member_portraits/ # Team member photos
    ├── images/           # Logo and other images
    └── resources/         # Health education PDF resources
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
   http://localhost:5001
   ```

The server runs on port 5001 with debug mode enabled for development.

## Pages

- **Home** (`/`): Main landing page with CTHI mission, "What We Do" sections, and activity highlights
- **Meet the Team** (`/team`): 
  - Executive Board (2025-2026) with member profiles
  - Clinical Committee
  - Health Education Committee
  - Events Committee
  - Finance Committee
- **Health Education Cards** (`/health-cards`): Overview of all health education resources
  - Individual category pages for: Cancer, Cardiovascular, Chronic Illness, Dental, Infections & Virus, Mental Health, Preventative Care, Respiratory, Sexual Health
- **健康教育資源** (`/resources-zh`): Chinese language health resources overview
  - Chinese language versions of all health education categories
- **Contact** (`/contact`): Contact information and form

## Customization

### Colors
The color scheme uses Northwestern University brand colors and can be customized in `static/css/style.css`:
- Primary: `#C4003C` (Red)
- Secondary: `#FFD700` (Gold)
- Accent: `#FF6B35` (Orange)

### Content
- Edit the HTML files in the `templates/` directory to update content
- Update language translations in `static/js/script.js` in the `languageContent` object
- Team member profiles can be added/updated in `templates/team.html`

### Images
- Homepage images: Add to `static/homepage_pics/`
- Team member photos: Add to `static/member_portraits/` (JPG format recommended)
- Other images: Add to `static/images/` and reference them in templates using:
  ```html
  <img src="{{ url_for('static', filename='images/your-image.jpg') }}" alt="Description">
  ```

### Team Member Photos
Team member photos should be:
- JPG format (converted from PDF if needed)
- Named with the member's full name (e.g., `John Doe.jpg`)
- Referenced in `templates/team.html` with the path `member_portraits/[Name].jpg`

## Language Toggle

The website includes a language toggle feature that switches between English and Chinese. The language preference is stored in localStorage and persists across page visits. All content translations are managed in `static/js/script.js`.

## Deployment

For production deployment:

1. **Set a secure SECRET_KEY** in `app.py`:
   ```python
   app.config['SECRET_KEY'] = 'your-secure-secret-key-here'
   ```

2. **Disable debug mode**: Change `debug=True` to `debug=False` in `app.py`

3. **Use a production server** like Gunicorn:
   ```bash
   pip install gunicorn
   gunicorn app:app --bind 0.0.0.0:5001
   ```

## Development Notes

- The Flask server runs on port 5001 by default
- Debug mode is enabled for automatic reloading during development
- Changes to templates and static files will automatically reload when saved
- Use hard refresh (Cmd+Shift+R / Ctrl+Shift+R) to clear browser cache if changes don't appear

## Contributing

This website is maintained by the Northwestern University Chinatown Health Initiative team.

## License

© 2025 Northwestern University Chinatown Health Initiative. All rights reserved.
