# Spotify Web Player Clone

A beautiful, pixel-perfect, and fully interactive Spotify Web Player clone built from the ground up using **Vanilla HTML5, CSS3 (Custom Properties & Grid/Flexbox), and ES6+ JavaScript**.

This project provides a modern dark-mode streaming player UI with advanced audio control functionalities, dynamic tab switching, interactive search, persistent liked-song synchronization, custom web widgets, and keyboard shortcuts.

---

## 🚀 Live Demo

Enjoy the fully working online application:
👉 **[Spotify Clone Live Demo](https://spotifyclone-webs.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/e37fba97-0766-4626-9212-06a9fa3e5f00/deploy-status?branch=main)](https://app.netlify.com/sites/animated-marshmallow-d90790/deploys)

---

## 🎨 Design & Visuals

- **Official Spotify Palette**: Crafted with graphite containers (`#121212`), high-contrast dark panels, and Spotify's neon accent green (`#1db954`).
- **Dynamic CSS Backfills**: Both seek progress and volume sliders have dynamic visual fills matching the exact scrub percentage.
- **Micro-Animations**: Album cover card scalings, float-in play buttons, and an active CSS-animated audio equalizer.
- **Glassmorphism Header**: Sticky header with blurred backdrop filters for that modern macOS/Spotify premium experience.

---

## 🛠️ Features

### 🎧 Audio Engine & Control Center
- **Smooth Play/Pause**: Synchronized controls in the player bar, song rows, and welcome hero banner. Keeps track position on pause instead of restarting.
- **Linear Seek Scrubber**: Real-time slider matching the track duration. Click or drag to jump to any point in the song.
- **Smart Queue controls**:
  - **Shuffle Mode**: Randomly picks tracks without repeating until the queue is exhausted.
  - **Repeat Mode**: Toggles between *Repeat Off* (stops at playlist end), *Repeat Playlist* (loops queue), and *Repeat Track* (loops single song).
- **Interactive Volume Panel**: Fully adjustable slider with single-click mute/unmute memory.

### 🧭 Multi-Tab Sidebar Navigation
- **Home Tab**: Large playlist hero header, rows of featured album cards, and a detailed track table.
- **Search Tab**: Dynamic search bar that filters songs in real-time by track name or artist. Browse category tiles with specific retro gradients.
- **Liked Songs Tab**: Dedicated playlist container showing hearted songs. Adds and removes tracks dynamically.

### 🎹 Advanced UX & Accessibility
- **CSS-Animated Equalizer**: Audio visualizer bar animations that react and dance in real-time when music plays, and freeze when paused.
- **Keyboard Media Shortcuts**:
  | Key Combination | Action |
  | :--- | :--- |
  | `Space` | Play / Pause playback |
  | `Ctrl` + `Right Arrow` | Skip to the Next Track |
  | `Ctrl` + `Left Arrow` | Previous Track / Restart Track |
  | `Up Arrow` | Increase Volume by 5% |
  | `Down Arrow` | Decrease Volume by 5% |
- **Full Responsiveness**: 
  - *Desktop*: Full sidebar, multi-tab main content, and complete player utility bar.
  - *Tablet*: Sidebar collapses into sleek icons.
  - *Mobile*: Main panel takes full width, table displays title/artist only, and player UI collapses to essential control buttons to fit all viewports.

---

## 📁 Project Structure

```text
Spotify-Clone/
├── covers/              # Album artwork covers (.jpg)
├── songs/               # Audio files (.mp3)
├── index.html           # Layout markup and structural tabs
├── style.css            # Custom design tokens, layout styles, and animations
├── script.js            # Audio controller, navigation, and rendering logic
├── logo.png             # Spotify green brand logo
├── icon.png             # Window tab favicon
└── README.md            # App documentation
```

---

## 💻 Running the Project Locally

### Option A: Static Open (No Installation)
Simply double-click the `index.html` file in your file explorer to open the player in any modern web browser.

### Option B: Local Server (Recommended)
To run on a local server, navigate to the folder in your terminal and execute:
```bash
# Using Node (http-server)
npx http-server -p 8080

# Using Python
python -m http.server 8080
```
Open your browser and navigate to `http://localhost:8080`.

---

## 🧪 Tech Stack

<div align="left">
  <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
  <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/> 
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="Font Awesome" src="https://img.shields.io/badge/Font_Awesome-333F50?style=for-the-badge&logo=font-awesome&logoColor=white"/>
</div>

---

## 📜 Credits & License
- All music tracks and covers are sourced from **NCS (No Copyright Sounds)**.
- Designed as a tribute to the Spotify Web App player. Distributed under the MIT License.
