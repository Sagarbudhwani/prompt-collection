# Contributing to PromptCollection (V2)

Contributions are welcome! Since upgrading to React, adding prompts and improving the code is much easier. This guide will help you add prompts, fix bugs, or improve the project.
## 🎯 Quick Start

### Want to add a prompt?
1. **Run the app locally** (see [Development Setup](#-development-setup)).
2. **Go to `/admin`** in your browser (e.g., `http://localhost:5173/admin`).
3. **Generate the code** using our built-in tool.
4. **Paste it** into `src/data.js`.
5. **Submit a Pull Request.**

### Want to fix a bug?
1. Fork the repository.
2. Create a branch (`fix/issue-name`).
3. Make your changes in React.
4. Submit a Pull Request.

## 📝 Table of Contents
- [Development Setup](#-development-setup)
- [Project Structure](#-project-structure)
- [Adding Prompts (The Easy Way)](#-adding-prompts)
- [Coding Guidelines](#-coding-guidelines)
- [Reporting Bugs](#-reporting-bugs)

## 🔧 Development Setup

Unlike the old HTML version, V2 requires Node.js.

```bash
# 1. Fork and clone the repository
git clone [https://github.com/YOUR_USERNAME/prompt-collection.git](https://github.com/YOUR_USERNAME/prompt-collection.git)

# 2. Navigate to the project
cd prompt-collection

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app should now be running at `http://localhost:5173`.

## 📂 Project Structure

```bash
prompt-collection/
├── public/                 # Static assets (Logo, Favicon)
├── src/
│   ├── components/         # React Components
│   │   ├── Navbar.jsx      # Navigation & Search
│   │   ├── PromptCard.jsx  # The Grid Card
│   │   ├── AdminHelper.jsx # Internal Tool for contributors
│   │   └── ...
│   ├── data.js             # The Main Database (Edit this!)
│   ├── App.jsx             # Main Logic & Routing
│   └── main.jsx            # Entry Point
├── tailwind.config.js      # Styling Config
└── vite.config.js          # Build Config
```

## 🎨 Adding Prompts

We have a built-in **Admin Helper** to prevent syntax errors. Please use it!

### Step 1: Generate the Code
1.  Run the app: `npm run dev`
2.  Navigate to `http://localhost:5173/admin`
3.  Fill in the form (Title, Category, Image URL, Prompt).
4.  Check the **Live Preview**.
5.  Click **"Copy Code"**.

### Step 2: Add to Database
1.  Open `src/data.js` in your code editor.
2.  Paste the code at the bottom of the `mockPrompts` array.
3.  **Important:** Ensure the ID is unique (increment the last ID by 1).

### Image Guidelines
* **URLs:** High-quality hosted URLs (Unsplash, Pexels, etc.) are preferred.
* **Local Files:** If using a local file, place it in the `public/` folder and reference it as `/filename.png`.

## 💻 Coding Guidelines

### Tech Stack
* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React

### Style Guide
* **Functional Components:** Use modern React hooks (`useState`, `useEffect`).
* **Tailwind:** Use utility classes for styling. Avoid writing custom CSS in `index.css` unless necessary.
* **Mobile First:** Always test layout on mobile size first, then add `sm:` or `md:` breakpoints.

### Common Tasks

**Adding a New Category:**
You don't need to touch the code! Just add a prompt with a new category name (e.g., "Pixel Art") in `src/data.js`. The app will automatically create a filter button for it.

**Updating the Logic:**
* Search logic is located in `src/App.jsx`.
* Card design is in `src/components/PromptCard.jsx`.

## 🐛 Reporting Bugs

Found a bug? Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug-report.md).

### Information to Include:
* Browser and device information.
* Screenshots.
* Console errors (F12 → Console).

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

**Thank you for contributing to PromptCollection V2!** 🚀
