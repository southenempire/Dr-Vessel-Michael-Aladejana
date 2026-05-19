# Dr. Vessel Michael Aladejana — Portfolio Website

A premium, interactive personal portfolio website for **Dr. Vessel Michael Aladejana** — Pastor, Corporate Advisor, Author, Keynote Speaker, and Founder. Built using **React + Vite** and optimized with custom **Vanilla CSS** and mathematical **3D interactive animations**.

---

## 🌟 Key Features

### 1. Interactive 3D elements
* **Fibonacci 3D Canvas Sphere**: The Hero section right-hand side features a math-based 3D rotating grid sphere rendered on an HTML5 `<canvas>`.
  - **Cursor Tracking**: The sphere's tilt and rotation speeds react dynamically to the movement of the user's mouse.
  - **Z-Depth Sorting**: Nodes and connecting lines are sorted frame-by-frame along the Z-axis, applying smooth opacity fading for a genuine sense of 3D depth.
* **3D Perspective Hover Tilt**: All core platform cards, event cards, shop product cards, and social media cards tilt dynamically in 3D perspective space following mouse movements, scaling slightly for premium interactive feedback.
* **Floating 3D Background Shapes**: Custom gold and burgundy stars (`✦`) float gently with keyframe animations throughout the About and Platforms sections, creating subtle visual layers.

### 2. Auto-Cycling Hero Roles
* The roles list (`Pastor`, `Advisor`, `Author`, `Speaker`, `Founder`) automatically cycles every `2.5 seconds`, shifting the active burgundy background pill styling across the items.
* **Manual Override & Resume**: If a visitor manually clicks any role badge, the auto-cycle is paused for `10 seconds` so they can read at their own pace, before resuming the carousel.

### 3. High Contrast & Muted Text Legibility Overrides
* Custom `:root` contrast and border variables are configured in the stylesheet to guarantee compliance with modern accessibility standards, making sure headers, descriptions, the Jeremiah verse, and contact forms have high legibility on warm beige backgrounds.

### 4. Vector Social Icons
* Replaced old text-based abbreviations with modern, inline SVG logos for Instagram, YouTube, LinkedIn, and TikTok.
* SVGs are styled using `stroke="currentColor"` so they automatically transition to the premium light gold color on card hover.

---

## 🛠️ Tech Stack

* **Core**: React 18+
* **Build Tool**: Vite 8+
* **Styles**: Vanilla CSS (modular layer styles for optimal load speeds)
* **Icons**: Inline Custom SVGs

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed (v18+ recommended).

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:5173/` to view the local site.

### 3. Build for Production
```bash
npm run build
```
This compiles the code into minified static assets inside the `dist/` directory, ready to deploy.

---

## 📂 Git & Deployment

The local repository is configured to push to the following remote repository on GitHub:
```bash
https://github.com/southenempire/Dr-Vessel-Michael-Aladejana.git
```

### Initial Setup & Pushing Code
If you are committing local updates:
```bash
git add .
git commit -m "feat: added interactive 3D elements, card tilts, and custom vector icons"
git push -u origin main
```
