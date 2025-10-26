# Content & Image Guide for CTHI Website

This guide will help you add images and complete the content on your new website.

## Where to Add Images

All images should be placed in: `/static/images/`

### Recommended Image Names and Locations

#### Homepage Images
1. **Hero/Banner Image** - `hero-background.jpg` or `chinatown-banner.jpg`
2. **Community Event Photo** - `community-event.jpg` (mentioned in Wix: "Community Event Photo")
3. **Volunteer Image** - `volunteer-activity.jpg` (from Wix: 17966924_1861182197488336_39805234462311)
4. **Health Desk Image** - `health-desk.jpg` (from Wix: Screen Shot 2019-04-25 at 6.42.47 PM.png)
5. **Public Events Image** - `public-event.jpg` (from Wix: IMG_9995.jpeg)
6. **Food/Social Image** - `food-bonding.jpg` (from Wix: IMG_8056 2_edited.png)

#### Team Page Images
7. **Logo** - `chinatown-logo.png` (from Wix: chinatown logo.png)
8. **Team Photo** - `team-photo.jpg` (from Wix: 23154866_1957670834506138_87516017418197)
9. Individual team member photos - `member-1.jpg`, `member-2.jpg`, etc.

## How to Add Images to Pages

### 1. Homepage - Replace Image Placeholders

In `templates/index.html`, look for `.image-placeholder` divs and replace them with actual images:

**Find this:**
```html
<div class="image-placeholder">
    <p>Community Event Photo</p>
</div>
```

**Replace with:**
```html
<img src="{{ url_for('static', filename='images/community-event.jpg') }}" 
     alt="Community Event" 
     style="width: 100%; border-radius: 15px;">
```

### 2. Add Activity Images

For the "What We Do" section, you can add images to each activity card. Add this above each activity description:

```html
<img src="{{ url_for('static', filename='images/volunteer-activity.jpg') }}" 
     alt="Volunteer Activity" 
     style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
```

### 3. Team Page - Add Team Members

In `templates/team.html`, replace the placeholder team members with actual information:

**Replace the entire team-grid section with:**
```html
<div class="team-grid">
    <div class="team-member">
        <div class="member-photo">
            <img src="{{ url_for('static', filename='images/member-1.jpg') }}" 
                 alt="Team Member Name">
        </div>
        <h3>Member Name</h3>
        <p class="member-role">President</p>
        <p>Brief bio or description</p>
    </div>
    
    <!-- Add more team members here -->
</div>
```

### 4. Add Logo to Navigation

In `templates/base.html`, find the nav-brand section and add:

```html
<div class="nav-brand">
    <a href="/">
        <img src="{{ url_for('static', filename='images/chinatown-logo.png') }}" 
             alt="CTHI Logo" 
             style="height: 60px;">
    </a>
</div>
```

## CSS for Member Photos

Add this CSS to `static/css/style.css` if you want circular team photos:

```css
.member-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.5rem;
}

.member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Content to Update from Your Wix Site

### Team Information
From your Wix "Meet the Team" page, add:
- Team member names
- Roles/positions
- Photos
- Brief bios

### Health Education Cards
For each category page, you'll want to add:
- Actual health education PDF files or images
- Download links
- Specific information for each category

### Quick Steps to Add Content

1. **Copy images** from your Wix site to `/static/images/` folder
2. **Edit templates** to reference those images using the format shown above
3. **Update team info** with actual names and roles
4. **Add health resources** - PDFs, documents, or links to existing materials
5. **Restart Flask** - The server will auto-reload if debug mode is on

## Need Help?

- All image paths use `{{ url_for('static', filename='images/FILENAME') }}`
- Images must be in `/static/images/` folder
- Supported formats: JPG, PNG, GIF, SVG
- Recommended: Optimize images before uploading (under 500KB each)

## Next Steps

1. Download all images from your Wix site
2. Copy them to `/static/images/` folder
3. Update the HTML templates with actual image references
4. Refresh your browser to see changes

Your website will automatically reload when you make changes because debug mode is enabled!

