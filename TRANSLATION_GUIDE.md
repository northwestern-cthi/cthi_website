# How to Edit Chinese Translations

This guide explains how to easily update Chinese text on your website.

## Quick Overview

All translations are in: `static/js/script.js`

## Finding Translations

Open `static/js/script.js` and look for the `languageContent` object (around line 78).

You'll see two sections:
- `en:` - English translations
- `zh:` - Chinese translations (Traditional Chinese)

## How to Edit Chinese Text

### Example: Change the Home Page Title

**Find this around line 178:**
```javascript
zh: {
    content: {
        heroTitle: '唐人街健康倡議',
```

**To change it, just edit the text between the quotes:**
```javascript
heroTitle: '你的新文字',
```

### Example: Change Navigation Labels

**Find this around line 159:**
```javascript
nav: {
    home: '首頁',
    team: '認識團隊',
    healthCards: '健康教育卡片',
    contact: '聯絡我們'
},
```

**Edit any of these to change the navigation labels.**

## Common Sections

### Navigation Bar (line ~159)
```javascript
nav: {
    home: '首頁',
    team: '認識團隊',
    healthCards: '健康教育卡片',
    contact: '聯絡我們'
}
```

### Dropdown Menu (line ~165)
```javascript
dropdown: {
    cancer: '癌症',
    cardiovascular: '心血管',
    'chronic-illness': '慢性病',
    dental: '牙科健康',
    infections: '感染與病毒',
    'mental-health': '心理健康',
    preventative: '預防保健',
    respiratory: '呼吸系統健康',
    'sexual-health': '性健康'
}
```

### Home Page Content (line ~177)
```javascript
content: {
    heroTitle: '唐人街健康倡議',
    heroSubtitle: '西北大學',
    aboutTitle: '關於我們',
    whatWeDoTitle: '我們的工作',
    // ... and many more
}
```

### Team Page (line ~199)
```javascript
teamTitle: '認識團隊',
teamSubtitle: '認識讓醫療保健在我們社區中變得可及的熱情學生',
// ... etc
```

### Contact Page (line ~205)
```javascript
contactTitle: '聯絡我們',
contactSubtitle: '我們很想聽到您的消息！',
// ... etc
```

## Tips

1. **Keep the quotes** - Always have single quotes around the text
2. **Don't delete commas** - Each item needs a comma after it (except the last one)
3. **Save the file** - After making changes, save the file
4. **Refresh browser** - Hard refresh (Ctrl+F5 or Cmd+Shift+R) to see changes
5. **Match English structure** - The Chinese sections mirror the English sections

## Quick Reference

| What You Want to Change | Where to Find It |
|------------------------|------------------|
| Navigation bar labels | Line ~159, `nav:` section |
| Dropdown menu items | Line ~165, `dropdown:` section |
| Home page hero title | Line ~178, `heroTitle` |
| About section | Line ~180, `aboutTitle`, `aboutText` |
| What We Do section | Line ~181, `whatWeDoTitle`, activity cards |
| Team page | Line ~199, `teamTitle`, `teamDescription`, etc. |
| Contact page | Line ~205, `contactTitle`, form labels |

## Example: Changing Contact Page Title

**Current:**
```javascript
contactTitle: '聯絡我們',
```

**Change to:**
```javascript
contactTitle: '聯繫我們',
```

That's it! Just edit the Chinese text, save, and refresh your browser.

## Need Help?

- All Chinese text is in the `zh:` section
- Look for the matching English text first to find what you need to change
- The structure is the same for English and Chinese, just the text differs
- Remember to keep proper punctuation and formatting

