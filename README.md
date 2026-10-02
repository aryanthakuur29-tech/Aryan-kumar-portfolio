# Aryan Kumar - Portfolio

A premium, modern, and high-performance personal developer portfolio website designed for **Aryan Kumar**, a 3rd-year B.Tech Computer Science & Engineering student actively preparing for software development internships and placement opportunities.

Built from scratch using pure **HTML5, CSS3, and JavaScript (ES6+)**, this portfolio adheres to modern web standards, includes zero heavy frameworks, and is completely optimized for seamless deployment on **GitHub Pages**.

---

## 📌 Table of Contents
- [About Me](#about-me)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Projects Featured](#projects-featured)
- [Folder Structure](#folder-structure)
- [Quick Customization Guide](#quick-customization-guide)
- [How to Run Locally](#how-to-run-locally)
- [How to Deploy on GitHub Pages](#how-to-deploy-on-github-pages)
- [Connecting the Contact Form](#connecting-the-contact-form)
- [License & Credits](#license--credits)

---

## 👨‍💻 About Me

- **Name:** Aryan Kumar
- **Role:** B.Tech CSE Student | Aspiring Software Developer
- **Academic Year:** 3rd Year (Pre-final year)
- **Seeking:** Software Development Internships & Placement Opportunities
- **Core Competencies:** Data Structures & Algorithms, Object-Oriented Programming, Web Development, Relational Databases (MySQL), Foundations of AI/ML.

---

## ✨ Key Features

- **Premium Dark Developer Theme:** Deep charcoal/black aesthetic (`#080c14`) accented with vibrant electric blue and violet gradients (`#38bdf8`, `#6366f1`).
- **Interactive Code Editor Hero Visual:** Features a macOS-style developer terminal tab with syntax-colored TypeScript code representing Aryan's profile, plus an interactive "Copy Code" button. No generic stock photos.
- **Categorized Technical Skills:** 6 clear domains:
  1. *Programming Languages* (C, C++, Python, Java)
  2. *Web Development* (HTML, CSS, JavaScript)
  3. *Database* (MySQL, SQL)
  4. *Computer Science Core* (DSA, DBMS, OS, Computer Networks, OOP)
  5. *AI & Machine Learning* (Machine Learning, Data Analysis, Pandas, NumPy)
  6. *Developer Tools* (Git, GitHub, VS Code)
- **Interactive Project Showcase:** 5 realistic student-level projects with category filtering (`All`, `Web & Software`, `AI & Data Science`), tech tags, GitHub repository links, and interactive live demo preview modals.
- **Academic Education Timeline:** Clear chronological milestone cards for B.Tech CSE and Senior Secondary education with editable placeholders.
- **Developer & Competitive Coding Handles:** Dedicated section for GitHub, LinkedIn, LeetCode, CodeChef, and HackerRank handles.
- **Integrated Resume Section:** Relative path link to `assets/Aryan-Kumar-Resume.pdf` with both direct download and browser preview options.
- **Responsive Navigation & Drawer:** Sticky glassmorphic navbar with active scroll section observer, mobile hamburger animation, and full-screen drawer menu.
- **SEO & Accessibility Ready:** Semantic HTML5 landmarks, Open Graph metadata, ARIA roles, skip-to-content links, and keyboard accessibility.
- **Ultra Fast & Lightweight:** Zero external build steps, zero node_modules dependencies, and instantaneous page load times.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility landmarks, and SEO metadata |
| **CSS3** | Glassmorphism, CSS Grid, Flexbox, custom variables, responsive design |
| **JavaScript (ES6+)** | IntersectionObserver, mobile menu drawer, project filters, modal dialogs |
| **Google Fonts** | `Plus Jakarta Sans` (UI typography) & `JetBrains Mono` (Code typography) |
| **Font Awesome 6** | Modern developer icons (via CDN) |
| **GitHub Pages** | Static hosting with custom domain and SSL support |

---

## 🚀 Projects Featured

All projects are structured as realistic student-level engineering implementations with clear editable tags:

1. **Student Management System**
   - *Tech:* HTML, CSS, JavaScript, MySQL
   - *Description:* Web portal managing student enrollment, academic grading, and records through relational database schemas.
2. **Machine Learning Prediction System**
   - *Tech:* Python, Pandas, NumPy, Scikit-learn
   - *Description:* End-to-end data processing and predictive machine learning workflow with cross-validation.
3. **Personal Developer Portfolio**
   - *Tech:* HTML5, CSS3, JavaScript, GitHub Pages
   - *Description:* Clean dark-mode developer portfolio engineered for recruiter engagement and fast loading.
4. **Data Analysis Dashboard**
   - *Tech:* Python, Pandas, Matplotlib
   - *Description:* Statistical exploratory analysis uncovering trends and distributions across tabular datasets.
5. **AI/ML Classification Project**
   - *Tech:* Python, Machine Learning, Scikit-learn
   - *Description:* Supervised machine learning classifier evaluating multi-class instances with precision/recall benchmarks.

---

## 📁 Folder Structure

```text
portfolio/
│
├── index.html                   # Main single-page portfolio markup
├── style.css                    # Complete CSS stylesheet & design tokens
├── script.js                    # Modular client-side interactivity
├── README.md                    # Project documentation & deployment guide
├── .gitignore                   # Git ignore configurations
│
└── assets/
    ├── profile.jpg              # Developer avatar / monogram graphic
    └── Aryan-Kumar-Resume.pdf   # Pre-formatted ATS-compatible student resume
```

---

## ✏️ Quick Customization Guide

Search for the comment `<!-- EDITABLE` inside `index.html` to quickly customize your personal details:

1. **College / University Name:** Search for `[College/University Name]` in the Education section and replace it with your college name.
2. **Graduation Year:** Search for `[Expected Graduation Year]` (e.g. `2027`).
3. **Profile Links:** Replace `https://github.com/your-username` and `https://linkedin.com/in/your-username` with your real profile URLs.
4. **Coding Handles:** Update LeetCode, CodeChef, and HackerRank URLs in the **Developer Profiles** section.
5. **Resume:** Replace `assets/Aryan-Kumar-Resume.pdf` with your updated resume PDF whenever you need to update it.
6. **Email:** Update `aryan.kumar.placeholder@email.com` with your real email address.

---

## 💻 How to Run Locally

You do not need any package managers, Node.js, or complex servers to run this project.

### Method 1: Direct File Opening
Double-click `index.html` in your file explorer, and it will immediately open in your default browser.

### Method 2: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The portfolio will run at `http://127.0.0.1:5500/`.

---

## 🌐 How to Deploy on GitHub Pages

Follow these step-by-step instructions to deploy your portfolio live to the web for free:

### Step 1: Initialize Git and Push to GitHub

Open PowerShell, Command Prompt, or your terminal in this portfolio directory and run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

*(Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL from GitHub, e.g., `https://github.com/your-username/portfolio.git`)*

---

### Step 2: Enable GitHub Pages

Once your repository is pushed to GitHub:

1. Go to your **GitHub Repository** in your browser.
2. Click on the **Settings** tab (gear icon at the top right of the repo).
3. In the left navigation sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - Source: Select **Deploy from a branch**.
   - Branch: Select **main**.
   - Folder: Select **/ (root)**.
5. Click **Save**.
6. Wait 1-2 minutes. GitHub will generate your live URL:
   ```text
   https://YOUR_USERNAME.github.io/aryan-kumar-portfolio/
   ```

---

## ✉️ Connecting the Contact Form

Because GitHub Pages hosts static files, form submissions cannot run backend PHP or Node servers directly. You can easily connect free email forwarders in just 2 minutes:

### Using Formspree (Free & Recommended)
1. Sign up for a free account at [https://formspree.io](https://formspree.io).
2. Create a new form and copy your unique Form ID (e.g. `xpzvvqqb`).
3. In `index.html`, locate line ~480 and update the form tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contact-form">
   ```
4. Now, every message sent from the website will arrive directly in your email inbox!

---

## 📄 License & Credits

- Designed & coded for **Aryan Kumar** (B.Tech CSE, 3rd Year).
- Free to customize and adapt for student, internship, and placement applications.
- Icons by [Font Awesome](https://fontawesome.com/).
- Fonts by [Google Fonts](https://fonts.google.com/) (`Plus Jakarta Sans` & `JetBrains Mono`).
