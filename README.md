# MIR4 Game Overview Website

A modern, responsive website showcasing MIR4's game modes and features with an interactive carousel and navigable grid system.

## Features

✨ **Auto-Cycling Carousel**
- Automatic image rotation with zoom out animation
- 8-second cycle with smooth transitions
- Beautiful overlay and text styling

📦 **Game Modes Grid**
- 9 clickable game mode boxes
- Hover effects with overlay display
- Responsive grid layout

🎮 **Individual Landing Pages**
- Dedicated pages for each game mode
- Class, Conquest, Main Mission, Clan, Castle Siege, Valley War, Raids, Portal, World Boss
- Consistent styling and navigation

🧭 **Navigation System**
- Sticky navbar with logo
- Dropdown menu for Game Overview
- Smooth scrolling and transitions

🎨 **Design**
- Dark gaming theme with gold/orange accents
- Professional animations and hover effects
- Fully responsive for mobile and desktop

## Project Structure

```
mir4/
├── index.html              # Main page with carousel and grid
├── class.html             # Class system page
├── conquest.html          # Conquest mode page
├── main-mission.html      # Main mission page
├── clan.html              # Clan system page
├── castle-siege.html      # Castle siege mode page
├── valley-war.html        # Valley war mode page
├── raids.html             # Raids mode page
├── portal.html            # Portal dimension page
├── world-boss.html        # World boss mode page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── carousel.js        # Carousel functionality
│   └── dropdown.js        # Dropdown menu functionality
├── images/                # Image assets folder
│   ├── mir4-logo.png
│   ├── carousel-1.jpg
│   ├── carousel-2.jpg
│   ├── carousel-3.jpg
│   ├── class.png
│   ├── conquest.jpg
│   ├── mainmission.jpg
│   ├── clan.png
│   ├── castle-siege.png
│   ├── valley-war.jpg
│   ├── raid.png
│   ├── portal.jpg
│   └── world-boss.png
└── README.md
```

## Setup Instructions

1. **Add Images**
   - Create an `images/` folder in the root directory
   - Add all required image files:
     - 3 carousel images (carousel-1.jpg, carousel-2.jpg, carousel-3.jpg)
     - 9 game mode images (class.png, conquest.jpg, mainmission.jpg, clan.png, castle-siege.png, valley-war.jpg, raid.png, portal.jpg, world-boss.png)
     - MIR4 logo (mir4-logo.png)

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No server setup required for local testing

3. **Deploy**
   - Host on any web hosting service
   - GitHub Pages compatible
   - No backend requirements

## Customization

### Colors
Edit the CSS variables in `css/style.css`:
- Primary color: `#ff6b35` (orange)
- Secondary color: `#daa520` (gold)
- Background: `#0a0a0a` (dark)

### Carousel Timing
Edit `js/carousel.js` to change cycle time:
```javascript
setInterval(nextCarousel, 8000); // Change 8000 to desired milliseconds
```

### Content
Edit HTML files directly to update text and descriptions for each game mode.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIR4 © 2026. All rights reserved.

## Contact

For more information about MIR4, visit the official website.
