# Akash Suresh Kulkarni – Personal Developer Portfolio

[![Production Build](https://img.shields.io/badge/Vite-Build%20Passing-10B981?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React 18](https://img.shields.io/badge/React-18.3-38BDF8?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-22D3EE?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=for-the-badge)](LICENSE)

A personal developer portfolio built for **Akash Suresh Kulkarni**, Computer Science Engineering student (2023–2027) at **Bangalore Institute of Technology (CGPA: 9.26)**.

Engineered with a **minimalist, cyber-inspired developer aesthetic**, this portfolio showcases verified engineering capabilities across **Full-Stack Web Development, Data Analytics, Business Intelligence, and Artificial Intelligence & Machine Learning**.

---

## 🚀 Key Features & Highlights

- **Futuristic Developer UI**: Custom glassmorphism, subtle cyber grid background, floating particles, ambient radial lighting, and syntax-highlighted interactive code terminal.
- **Dynamic Role Typewriter**: Real-time typewriter rotating through Full-Stack Developer, Software Developer, Data Analyst, AI/ML Enthusiast, and Problem Solver.
- **Interactive Project Consoles**: Custom-designed, high-fidelity UI previews for all 5 major projects (AgriLogix Telemetry, PneuScan Medical Workstation with real Grad-CAM heatmaps, SmartShelf Automated Audits, Crypto Time-Series MA, and Supply Chain Inventory Health).
- **In-Depth Technical Modal**: Complete architectural breakdown for flagship projects (Problem Statement, Proposed Solution, System Architecture, ML/DL Pipeline, Results & Limitations).
- **Verified Credentials & Achievements**: 5★ Gold SQL Badge on HackerRank, 150+ LeetCode problems solved, Elevate Labs Data Analyst internship deliverables, and OCI AI Foundations certification.
- **Live Interactive Filtering**: Dynamic category filters and instant live search for technical skills and projects.
- **Responsive & Accessible**: 100% responsive across mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px+), with full `prefers-reduced-motion` compliance.
- **Verified Direct Contact & Download**: Built-in resume download (`Akash_Suresh_Kulkarni_Resume.pdf`) and mailto contact dispatch with confetti feedback.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 18, Vite 6, Tailwind CSS 3.4 |
| **Icons & Visuals** | Lucide React, Canvas Confetti |
| **Typography** | Inter, JetBrains Mono |
| **Styling Architecture** | Custom Cyber Palette, Backdrop Blur, Radial Glows, Hardware Accelerated CSS Keyframes |
| **Deployment Target** | Vercel (Configured via `vercel.json`) |

---

## 📂 Project Structure

```text
PORTFOLIO/
├── public/
│   ├── Akash_Suresh_Kulkarni_Resume.pdf  # Downloadable verified resume
│   ├── resume.pdf
│   └── projects/
│       └── pneuscan-gradcam.jpg          # Real Grad-CAM localization visual
├── src/
│   ├── assets/                           # Static assets & media
│   ├── components/
│   │   ├── Navbar.jsx                    # Glassmorphism navbar + scroll progress
│   │   ├── Hero.jsx                      # Hero workspace + typing animation
│   │   ├── About.jsx                     # Narrative + BIT academic credentials
│   │   ├── Skills.jsx                    # Categorized competencies + instant search
│   │   ├── Experience.jsx                # Elevate Labs vertical internship timeline
│   │   ├── Projects.jsx                  # Project grid + category filters
│   │   ├── ProjectCard.jsx               # Project card with telemetry preview
│   │   ├── ProjectModal.jsx              # Comprehensive engineering deep dive
│   │   ├── ProjectPreviews.jsx           # High-fidelity project dashboard consoles
│   │   ├── Education.jsx                 # B.E. (BIT) & Pre-University timeline
│   │   ├── Certifications.jsx           # HackerRank, LeetCode, OCI, Udemy, GDSC
│   │   ├── CodingProfiles.jsx            # GitHub commit activity & repositories
│   │   ├── Contact.jsx                   # Contact form with direct mailto fallback
│   │   ├── Footer.jsx                    # Terminal branding & quick navigation
│   │   └── BackgroundEffects.jsx         # Ambient cyber grid & floating dust nodes
│   ├── data/
│   │   ├── projects.js                   # Verified project datasets & architecture specs
│   │   ├── skills.js                     # 8 skill domains with proficiency tiers
│   │   └── certifications.js             # Verified credentials & academic milestones
│   ├── styles/
│   │   └── index.css                     # Tailwind layers, glassmorphism, cyber glow
│   ├── App.jsx                           # Primary layout structure
│   └── main.jsx                          # React 18 root mount
├── index.html                            # Semantic HTML5, SEO & Open Graph meta
├── package.json                          # Dependencies & build scripts
├── postcss.config.js                     # PostCSS config
├── tailwind.config.js                    # Cyber palette & animation keyframes
├── vercel.json                           # SPA routing & deployment config
└── vite.config.js                        # Vite bundler config
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v22.x recommended)
- **npm**: v9.0.0 or higher

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/akashsuresh2005/PORTFOLIO.git
cd PORTFOLIO
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will launch locally at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside `dist/` (gzipped size under 90 kB).

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

This portfolio is configured for zero-config one-click deployment on **Vercel**:

### Option A: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B: Using GitHub Integration
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete futuristic developer portfolio"
   git branch -M main
   git remote add origin https://github.com/akashsuresh2005/PORTFOLIO.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **"Add New"** > **"Project"** and import the `PORTFOLIO` repository.
4. Framework Preset will auto-detect **Vite**.
5. Click **"Deploy"**. The site will be live on an HTTPS custom domain in seconds.

---

## 👤 Author Information

- **Name**: Akash Suresh Kulkarni
- **College**: Bangalore Institute of Technology, Bangalore
- **Degree**: B.E. in Computer Science & Engineering (2023–2027) | **CGPA: 9.26**
- **Email**: [akashraghvendra2654@gmail.com](mailto:akashraghvendra2654@gmail.com)
- **Phone**: [+91 8073471289](tel:+918073471289)
- **LinkedIn**: [linkedin.com/in/akash-kulkarni-146a5a298](https://www.linkedin.com/in/akash-kulkarni-146a5a298)
- **GitHub**: [github.com/akashsuresh2005](https://github.com/akashsuresh2005)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

