# 🎨 PromptCollection

[![GitHub license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-100%25-yellow)
![No Dependencies](https://img.shields.io/badge/dependencies-None-success)

A curated collection of powerful AI image generation prompts for Gemini and ChatGPT. Discover, share, and copy prompts with ease.

## 🌐 Live Demo

<div align="center">
  <a href="https://promptcollection.netlify.app/">
    <img src="Screenshotss/screenshot.png" alt="PromptCollection Preview" width="600">
  </a>
  <br>
  <a href="https://promptcollection.netlify.app/">
    <img src="https://img.shields.io/badge/Explore_Prompts-Live_Demo-brightgreen?style=for-the-badge&logo=netlify" alt="Explore Now">
  </a>
</div>

## 📂 File Structure

```bash
PromptCollection/
├── Images/ # All prompt example images
│ ├── Surreal_paper_portrait.png
│ ├── Classic_portrait_photography.png
│ ├── Power_suit_portrait.png
│ └── ... (more to come)
├── Screenshots/
│ └── screenshot.png #Screenshot
├── index.html # Main application interface
├── styles.css # Complete visual styling
├── script.js # Application logic
├── data.json # All prompts data
├── README.md # This document
└── LICENSE # MIT License
```

## 🚀 Features

**Prompt Management:**
- 🔍 Smart search functionality
- 🏷️ Filter by AI model (Gemini, ChatGPT)
- 📋 One-click prompt copying
- 🔗 Easy sharing options

**User Experience:**
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Beautiful card-based UI
- ⚡ Fast and lightweight

**Content Organization:**
- 🗂️ Categorized by AI model
- 🔖 Tagged for easy discovery
- ⭐ Featured prompts highlighting
- 📊 Sort by newest, popular, or A-Z

## 🎮 Quick Start

1. **Clone or download the repository**

```bash
git clone https://github.com/Sagarbudhwani/PromptCollection.git
```

2. **Open in browser**
   - Simply open `index.html` in any modern browser
   - No build process or dependencies required

3. **Start exploring!**
   - Browse prompts by scrolling
   - Use search to find specific prompts
   - Filter by AI model using the buttons
   - Click "Copy" to use any prompt

## 🛠️ For Developers

**Adding New Prompts:**
Simply edit the `data.json` file with new prompt objects following this format:

```json
{
  "id": 4,
  "title": "Your Prompt Title",
  "prompt": "The complete prompt text here...",
  "tags": ["Gemini", "ChatGPT"],
  "image": "your-image.png"
}
```

**Customization Options:**
- Modify colors in the `:root` CSS variables
- Add new filter categories in the HTML and JS
- Adjust the UI in `styles.css`

**Technical Highlights:**
- Pure vanilla JavaScript (no frameworks)
- CSS variables for easy theming
- LocalStorage for theme preference persistence
- Responsive design with CSS Grid and Flexbox

## 📜 License

MIT © Sagar Budhwani - Free to use, modify, and share! See [LICENSE](LICENSE) for details.

## 👨‍💻 Developer

Developed by [Sagar Budhwani](https://github.com/Sagarbudhwani)

Check out more of my projects at [https://appsbysagar.netlify.app](https://appsbysagar.netlify.app)
