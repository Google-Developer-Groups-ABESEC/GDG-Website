# 🌐 GDG Website - Google Developer Groups ABESEC

<div align="center">

![GitHub issues](https://img.shields.io/github/issues/Google-Developer-Groups-ABESEC/GDG-Website)
![GitHub forks](https://img.shields.io/github/forks/Google-Developer-Groups-ABESEC/GDG-Website)
![GitHub stars](https://img.shields.io/github/stars/Google-Developer-Groups-ABESEC/GDG-Website)
![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2025-blueviolet)
![Contributors](https://img.shields.io/github/contributors/Google-Developer-Groups-ABESEC/GDG-Website)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

**Official website for Google Developer Groups ABESEC Chapter**

[Report Bug](https://github.com/Google-Developer-Groups-ABESEC/GDG-Website/issues) · [Request Feature](https://github.com/Google-Developer-Groups-ABESEC/GDG-Website/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Recent Changes](#recent-changes)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

The GDG (Google Developer Groups) ABESEC website serves as the central hub for the developer community at ABES Engineering College. This platform provides information about events, team members, and ways to connect with the community.

### Key Features

- 🏠 **Home Page** - Introduction to GDG ABESEC community
- 📅 **Events Section** - Showcasing past events including HackHaven 2.0, WebWonders, and more
- 👥 **Team Page** - Meet the organizers and leadership team
- 📧 **Contact Form** - Get in touch with the community (integrated with EmailJS)
- 📱 **Responsive Design** - Fully responsive across all devices
- ✨ **Smooth Animations** - Enhanced user experience with Lenis smooth scrolling

---

## 🔄 Recent Changes

### Latest Updates (October 2025)

- ✨ Initial website launch with modern UI
- 📱 Fully responsive design implementation
- 📅 Past events showcase added (HackHaven 2.0, WebWonders, InnovationQuest, etc.)
- 👥 Team member profiles with leadership hierarchy
- 📧 Contact form integration with EmailJS
- 🎨 Custom animations and smooth scrolling
- 🏷️ Hacktoberfest participation ready
- 📝 Complete documentation with README and LICENSE

---

## 🛠️ Built With

### Core Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Libraries & Tools

- **Lenis** - Smooth scrolling library
- **EmailJS** - Contact form email service
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Outfit, Space Grotesk, Syne, Clash Display, Bai Jamjuree, Be Vietnam Pro, Intro Rust)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Before you begin, ensure you have:

- **Git**: [Download &amp; Install Git](https://git-scm.com/downloads)
- **A Code Editor**: VS Code, Sublime Text, or any editor of your choice
- **Web Browser**: Chrome, Firefox, Safari, or Edge (latest version)

### Installation

1. **Fork the Repository**

   Click the "Fork" button at the top right of this repository.
2. **Clone your forked repository**

   ```bash
   git clone https://github.com/melloxyz/GDG-Website.git
   ```
3. **Navigate to the project directory**

   ```bash
   cd GDG-Website
   ```
4. **Open the project**

   Simply open `index.html` in your browser, or use a local development server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (with http-server)
   npx http-server

   # Using VS Code Live Server extension
   # Right-click on index.html → "Open with Live Server"
   ```
5. **View the website**

   Open your browser and navigate to:

   - Direct file: `file:///path/to/GDG-Website/index.html`
   - Local server: `http://localhost:8000`

---

## 💻 Usage

### For Developers

1. **Making Changes**

   ```bash
   # Create a new branch for your feature
   git checkout -b feature/YourFeatureName

   # Make your changes to the code

   # Stage your changes
   git add .

   # Commit with a descriptive message
   git commit -m "feat: add your feature description"
   ```
2. **Testing Your Changes**

   - Open the website in multiple browsers (Chrome, Firefox, Safari)
   - Test on different screen sizes (mobile, tablet, desktop)
   - Ensure all links and forms work correctly
3. **Pushing Changes**

   ```bash
   git push origin feature/YourFeatureName
   ```

### EmailJS Configuration

If you need to configure the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update `emailjs-config.js` with your credentials:
   - Service ID
   - Template ID
   - Public Key
3. The recipient email is set to: `dsc@abesec.ac.in`

---

## 📁 Project Structure

```
GDG-Website/
├── index.html              # Home page
├── events.html             # Events page
├── teams.html              # Team members page
├── contact.html            # Contact form page
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript file
├── events.js               # Events page functionality
├── teams.js                # Teams page functionality
├── contact.js              # Contact form handling
├── lenis-config.js         # Smooth scrolling configuration
├── emailjs-config.js       # EmailJS configuration
├── Assets/                 # Images and media files
├── Team Photos/            # Team member photos
├── LICENSE                 # MIT License file
└── README.md               # Project documentation
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Check existing issues** or create a new one
2. **Comment on the issue** you'd like to work on
3. **Wait for assignment** from maintainers
4. **Fork the repository** and create a new branch
5. **Make your changes** following our coding standards
6. **Test thoroughly** before submitting
7. **Submit a Pull Request** with a clear description

### Contribution Guidelines

- ✅ Follow the existing code style and structure
- ✅ Write clear, descriptive commit messages
- ✅ Test your changes across different browsers
- ✅ Ensure responsive design on all screen sizes
- ✅ Reference issue numbers in PRs (e.g., "Closes #1")
- ✅ Be respectful and constructive in discussions

### Commit Message Convention

```
feat: Add new event to events page
fix: Resolve navigation menu bug on mobile
docs: Update README with setup instructions
style: Improve button hover effects
refactor: Optimize image loading
```

### First Time Contributors

Look for issues labeled:

- `good first issue` - Perfect for newcomers
- `hacktoberfest` - Eligible for Hacktoberfest

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ⚠️ Liability and warranty limitations

Copyright (c) 2025 Google Developer Groups ABESEC

---

## 📞 Contact

### GDG ABESEC

- 📧 **Email:** dsc@abesec.ac.in
- 📍 **Address:** 19th KM Stone, NH-09, Ghaziabad - 201009, Uttar Pradesh, India
- ☎️ **Phone:** +91 1207 135 112

### Lead Organizer

- **Aviral Mittal** - [@aviralmittal8](https://github.com/aviralmittal8)

### Project Links

- **Repository:** [https://github.com/Google-Developer-Groups-ABESEC/GDG-Website](https://github.com/Google-Developer-Groups-ABESEC/GDG-Website)
- **Issues:** [Report a bug or request a feature](https://github.com/Google-Developer-Groups-ABESEC/GDG-Website/issues)
- **Pull Requests:** [Submit your contributions](https://github.com/Google-Developer-Groups-ABESEC/GDG-Website/pulls)

---

## 🙏 Acknowledgments

- Thanks to all [contributors](https://github.com/Google-Developer-Groups-ABESEC/GDG-Website/graphs/contributors) who have helped shape this project
- Google Developers for their continuous support
- ABES Engineering College for hosting our chapter
- The open-source community for inspiration and tools

---

<div align="center">

**Made with ❤️ by the GDG ABESEC Community**

⭐ Star this repository if you find it helpful!

</div>
