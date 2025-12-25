# 🎨 PromptCollection (V2)

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Fast-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A modern, mobile-first AI Prompt Library built with **React, Vite, and Tailwind CSS**.
Discover, copy, and generate shareable image cards for your favorite AI prompts (Gemini, Midjourney, DALL-E).

## 🌐 Live Demo

<div align="center">
  <a href="https://promptcollection.netlify.app/">
    <img src="Screenshots/screenshot.png" alt="PromptCollection V2 Preview" width="700" style="border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  </a>
  <br><br>
  <a href="https://promptcollection.netlify.app/">
    <img src="https://img.shields.io/badge/🚀_Launch-Live_Demo-blue?style=for-the-badge&logo=netlify" alt="Live Demo" height="40">
  </a>
</div>

## 🚀 New in V2 (React Rewrite)

This project has been completely rebuilt from the ground up!
* **⚡ Speed:** Powered by Vite for instant loading.
* **📱 Mobile-First:** Beautiful masonry grid layout that looks perfect on phones.
* **🖼️ Share Engine:** Custom built-in image generator to create social media cards for any prompt.
* **🛠️ Admin Tools:** Hidden admin interface to auto-generate JSON data.
* **🎨 UI/UX:** Smooth animations with Framer Motion and Toast notifications.

## 📂 Project Structure

```bash
PromptCollection/
├── public/                 # Static assets (Logo, Favicon)
├── src/
│   ├── components/         # React Components
│   │   ├── Navbar.jsx      # Search & Mobile Menu
│   │   ├── PromptCard.jsx  # Masonry Grid Item
│   │   ├── ShareGenerator.jsx # Image Generation Logic
│   │   └── AdminHelper.jsx # Internal Admin Tool
│   ├── data.js             # Prompt Data Source
│   ├── App.jsx             # Main Logic & Routing
│   └── main.jsx            # Entry Point
├── index.html              # HTML Root
├── tailwind.config.js      # Style Configuration
├── vite.config.js          # Build Configuration
└── package.json            # Dependencies
```

## ✨ Features

**Prompt Discovery:**
* 🔍 Real-time search (by title, category, or content)
* 🏷️ Dynamic Category filtering
* 📋 One-click copy with Toast notifications

**Creative Tools:**
* 🖼️ **Share Card Generator:** Converts any prompt into a high-quality image card for Twitter/Instagram.
* 🧠 **Smart Links:** "Try on Gemini" buttons that auto-copy text before opening the AI.

**User Experience:**
* 🌙 Dark/Light mode toggle (persists in memory)
* 📱 Fully responsive Masonry layout

## 🛠️ Installation & Setup

Unlike V1, this version requires Node.js.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Sagarbudhwani/prompt-collection.git](https://github.com/Sagarbudhwani/prompt-collection.git)
    cd prompt-collection
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open the link shown in the terminal (usually `http://localhost:5173`).

## 🛡️ Admin & Contribution

### Adding New Prompts
You don't need to write code manually!
1.  Run the app locally (`npm run dev`).
2.  Go to `http://localhost:5173/admin` in your browser.
3.  Use the **Admin JSON Generator** to create your prompt.
4.  Copy the generated code and paste it into `src/data.js`.

### How to Contribute
We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details.
1.  Fork the repo.
2.  Create a feature branch.
3.  Submit a Pull Request.

## 📚 Tech Stack

* **Core:** React.js, Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Animations:** Framer Motion
* **Utilities:** html2canvas (Image Gen), react-hot-toast (Notifications)

## 📜 License

MIT © [Sagar Budhwani](https://github.com/Sagarbudhwani) - Free to use, modify, and share!

## 👨‍💻 Developer

**Sagar Budhwani**
* GitHub: [@Sagarbudhwani](https://github.com/Sagarbudhwani)
* More Apps: [appsbysagar.netlify.app](https://appsbysagar.netlify.app)
