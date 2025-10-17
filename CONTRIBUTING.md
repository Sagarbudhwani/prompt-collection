# Contributing to PromptCollection

We love contributions! This guide will help you add prompts, report issues, and contribute to our AI image prompt collection.

## 🎯 Quick Start

### Just want to add a prompt?
1. Use our [Prompt Submission Template](.github/ISSUE_TEMPLATE/prompt-submission.md)
2. We'll add it for you!

### Want to edit directly?
1. Fork the repository
2. Edit `data.json`
3. Submit a Pull Request

## 📝 Table of Contents
- [Adding Prompts](#adding-prompts)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [Code Contributions](#code-contributions)
- [Code Style](#code-style)
- [Questions?](#questions)

## 🎨 Adding Prompts

### Method 1: Direct JSON Editing
Edit the `data.json` file following this format:

```json
{
  "id": 4,
  "title": "Your Creative Title",
  "prompt": "Detailed prompt description that generates amazing AI images. Be specific about styles, lighting, composition, and mood.",
  "tags": ["Gemini Nano Banana"],
  "image": "Images/your-image-filename.png"
}
```

### Method 2: Issue Template (Recommended for Beginners)
1. Go to: https://github.com/Sagarbudhwani/prompt-collection/issues
2. Click "New Issue"
3. Select "Prompt Submission"
4. Fill out the form with your prompt details
5. We'll handle the technical part!

### Field Guidelines
- **id**: Get the next number (current highest + 1)
- **title**: Clear, descriptive (max 60 characters)
- **prompt**: Detailed and specific instructions
- **tags**: Use existing tags like "Gemini Nano Banana"
- **image**: Path to your image in Images/ folder

## 🖼️ Image Guidelines

### File Requirements
- **Format**: PNG or JPG
- **Size**: 800x600px recommended (4:3 ratio)
- **Quality**: Clear, high-quality images
- **Naming**: Use descriptive_names_with_underscores.png
- **Location**: Place in `Images/` folder

### Example Image Names

```bash
Images/
├── surreal_dreamscape.png
├── cinematic_portrait.jpg
├── fantasy_landscape.png
└── abstract_art.jpg
```

### Prompt Quality Standards

#### ✅ Do's
- Be specific about style, lighting, composition
- Use descriptive language ("cinematic lighting" vs "good lighting")
- Include context and desired mood
- Test prompts before submitting
- Use proper formatting and punctuation

#### ❌ Don'ts
- Vague descriptions ("a beautiful landscape")
- Overly complex or contradictory instructions
- Copyrighted content or specific brands
- Inappropriate or unsafe content

## 🐛 Reporting Bugs

Found an issue? Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug-report.md).

### Information to Include:
- Steps to reproduce the issue
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable
- Console errors (F12 → Console)

### Common Issues to Check First:
- Images not loading? Check file paths in `data.json`
- Search not working? Check browser console for errors
- Theme not persisting? Check localStorage is enabled

## 💡 Feature Requests

Have a great idea? Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature-request.md).

### Feature Categories We're Interested In:
- New filter categories
- User experience improvements
- Additional prompt types
- Integration possibilities
- Performance enhancements

## 🔧 Code Contributions

### Development Setup

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/prompt-collection.git

# 2. Navigate to the project
cd prompt-collection

# 3. Open in browser (no build process needed!)
open index.html|
```

# Project Structure

```bash
prompt-collection/
├── index.html      # Main application interface
├── styles.css      # Styling with CSS variables
├── script.js       # Application logic
├── data.json       # Prompt database
└── Images/         # Example images
```

### Making Changes
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly in multiple browsers
4. Submit a Pull Request

### Common Development Tasks

#### Adding New Filter Categories
1. Add filter button in `index.html`:
```html
<button class="filter-btn" data-filter="new-category">
    <i class="fas fa-tag"></i> New Category
</button>
```

2. The existing JavaScript will automatically handle the filtering

Modifying Search Behavior
Edit the searchPrompts function in script.js:

```javascript
function searchPrompts(query) {
    const filteredPrompts = promptsData.filter(prompt => 
        prompt.title.toLowerCase().includes(query.toLowerCase()) || 
        prompt.prompt.toLowerCase().includes(query.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    renderPrompts(filteredPrompts);
}
```

### Testing Checklist
- [ ] Works in Chrome, Firefox, Safari
- [ ] Responsive on mobile, tablet, desktop
- [ ] Search functionality works
- [ ] Filter buttons work
- [ ] Copy to clipboard works
- [ ] Theme toggle works
- [ ] Images load correctly
- [ ] No console errors

### Browser Support
We support:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Testing Responsive Design
- Test on screens smaller than 768px (mobile)
- Test on screens 768px-1024px (tablet)
- Test on screens larger than 1024px (desktop)

### Common Issues to Test
- Image loading with correct paths
- LocalStorage for theme persistence
- Clipboard API permissions
- CSS variable compatibility

## 🎨 Code Style

### JavaScript
- Use modern ES6+ features
- Add comments for complex logic
- Follow existing naming conventions
- Handle errors gracefully

### CSS
- Use CSS variables for theming
- Follow BEM-like naming for complex components
- Keep responsive design in mind
- Use flexbox/grid for layouts

### HTML
- Semantic HTML where possible
- Accessible labels and alt text
- Clean, readable structure

## ❓ Questions?

### Getting Help
- Check our [Wiki](https://github.com/Sagarbudhwani/prompt-collection/wiki)
- Search existing [Issues](https://github.com/Sagarbudhwani/prompt-collection/issues)

### Communication
- Be respectful and inclusive
- Provide clear, constructive feedback
- Help others when you can
- Celebrate contributions!

## 🔒 Security Notes

This is a static website with no backend, user data, or authentication. 

If you find any security concerns, please report them through regular issues using our bug report template.

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

**Thank you for contributing to PromptCollection!** 🎨✨

Every prompt, bug report, and improvement helps build a better resource for the AI community.
