// DOM Elements
const promptsContainer = document.getElementById('promptsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchBox = document.querySelector('.search-box');
const themeToggle = document.getElementById('themeToggle');
const toast = document.getElementById('toast');
const sortSelect = document.getElementById('sortSelect');
const loadMoreBtn = document.getElementById('loadMore');

// Load prompts data from JSON
let promptsData = [];
let displayedPrompts = 6; // Number of prompts to show initially

async function loadPromptsData() {
    try {
        const response = await fetch('data.json');
        promptsData = await response.json();
        renderPrompts(promptsData.slice(0, displayedPrompts));
    } catch (error) {
        console.error('Error loading prompts data:', error);
        // Fallback to sample data if JSON file doesn't exist yet
        promptsData = [
            {
                "id": 1,
                "title": "Surreal paper portrait",
                "prompt": "A moody, cinematic portrait of a woman wearing Cap backwords, sitting on a wooden chair in a dimly lit room. She is wearing a loose, cream-colored blouse with ruffles, looking contemplative and lost in thought. Around her, sheets of paper are dramatically suspended in mid-air, as if caught in motion, creating a surreal and dreamlike atmosphere. The lighting casts soft shadows on the wall, emphasizing the mysterious and artistic mood of the scene",
                "tags": ["Gemini Nano Banana"],
                "image": "Images/Surreal_paper_portrait.png"
            },
            {
                "id": 2,
                "title": "Classic portrait photography",
                "prompt": "Using this picture, create in a glamorous woman in a full long sleeves black blouse & Total black chiffon saree, sitting gracefully against a dramatic circular spotlight backdrop. She wears beautiful studds and minimal jewelry, long black wavy hair with beautiful eyes exuding elegance and poise, showing her face with slightly tilted chin gracefully. The image is in black and white, with cinematic lighting and deep shadows, creating a timeless, vintage-inspired fashion editorial look",
                "tags": ["Gemini Nano Banana"],
                "image": "Images/Classic_portrait_photography.png"
            },
            {
                "id": 3,
                "title": "Power suit portrait",
                "prompt": "A moody, cinematic portrait of a woman wearing Cap backwords, sitting on a wooden chair in a dimly lit room. She is wearing a loose, cream-colored blouse with ruffles, looking contemplative and lost in thought. Around her, sheets of paper are dramatically suspended in mid-air, as if caught in motion, creating a surreal and dreamlike atmosphere. The lighting casts soft shadows on the wall, emphasizing the mysterious and artistic mood of the scene",
                "tags": ["Gemini Nano Banana"],
                "image": "Images/Power_suit_portrait.png"
            }
        ];
        renderPrompts(promptsData.slice(0, displayedPrompts));
    }
}

// Initialize the page
function init() {
    loadPromptsData();
    setupEventListeners();
    
    // Set dark mode as default
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    
    // Set "All" as active filter by default
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        allBtn.classList.add('active');
        // No need to call filterPrompts('all') here as it will show all by default
    }
}

// Render prompt cards
function renderPrompts(prompts) {
    promptsContainer.innerHTML = '';
    
    if (prompts.length === 0) {
        promptsContainer.innerHTML = '<div class="no-results">No prompts found matching your criteria</div>';
        return;
    }
    
    prompts.forEach(prompt => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        
        // Get a random badge for demonstration
        const badges = ["Trending", "New", "Popular", "Staff Pick"];
        const randomBadge = badges[Math.floor(Math.random() * badges.length)];
        
        card.innerHTML = `
            <div class="card-image-container">
                <img src="Images/${prompt.image}" alt="${prompt.title}" class="card-image">
                <div class="card-badge">${randomBadge}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${prompt.title}</h3>
                <p class="card-prompt">${prompt.prompt}</p>
                <div class="card-tags">
                    ${prompt.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                </div>
                <div class="card-actions">
                    <button class="card-btn copy-btn" data-prompt="${prompt.prompt}">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <button class="card-btn share-btn" data-id="${prompt.id}" data-title="${prompt.title}" data-prompt="${prompt.prompt}">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            </div>
        `;
        
        promptsContainer.appendChild(card);
    });
    
    // Add event listeners to the new buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', copyPrompt);
    });
    
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', sharePrompt);
    });
    
    // Show or hide load more button
    if (prompts.length >= promptsData.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
}

// Copy prompt to clipboard
function copyPrompt(e) {
    const promptText = e.currentTarget.getAttribute('data-prompt');
    navigator.clipboard.writeText(promptText).then(() => {
        showToast('Prompt copied to clipboard!');
    });
}

// Share prompt
function sharePrompt(e) {
    const id = e.currentTarget.getAttribute('data-id');
    const title = e.currentTarget.getAttribute('data-title');
    const prompt = e.currentTarget.getAttribute('data-prompt');
    const url = window.location.origin;
    
    const shareText = `**${title}**\n\n${prompt}\n\nCheck out more prompts at: ${url}`;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: shareText,
            url: url
        }).catch(err => {
            console.log('Error sharing:', err);
            navigator.clipboard.writeText(shareText).then(() => {
                showToast('Share content copied to clipboard!');
            });
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('Share content copied to clipboard!');
        });
    }
}

// Filter prompts by tag
function filterPrompts(filter) {
    if (filter === 'all') {
        renderPrompts(promptsData.slice(0, displayedPrompts));
    } else {
        const filteredPrompts = promptsData.filter(prompt => 
            prompt.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
        );
        renderPrompts(filteredPrompts.slice(0, displayedPrompts));
    }
}

// Search prompts
function searchPrompts(query) {
    if (!query) {
        renderPrompts(promptsData.slice(0, displayedPrompts));
        return;
    }
    
    const filteredPrompts = promptsData.filter(prompt => 
        prompt.title.toLowerCase().includes(query.toLowerCase()) || 
        prompt.prompt.toLowerCase().includes(query.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    renderPrompts(filteredPrompts);
}

// Sort prompts
function sortPrompts(criteria) {
    let sortedPrompts = [...promptsData];
    
    switch(criteria) {
        case 'newest':
            sortedPrompts.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
            // For demo purposes, we'll simulate popularity with random values
            sortedPrompts.forEach(p => p.views = Math.floor(Math.random() * 1000));
            sortedPrompts.sort((a, b) => b.views - a.views);
            break;
        case 'az':
            sortedPrompts.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    renderPrompts(sortedPrompts.slice(0, displayedPrompts));
}

// Load more prompts
function loadMorePrompts() {
    displayedPrompts += 6;
    renderPrompts(promptsData.slice(0, displayedPrompts));
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');
}

// Show toast notification
function showToast(message) {
    toast.querySelector('span').textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Set up event listeners
function setupEventListeners() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPrompts(button.getAttribute('data-filter'));
        });
    });
    
    searchBox.addEventListener('input', (e) => {
        searchPrompts(e.target.value);
    });
    
    themeToggle.addEventListener('click', toggleTheme);
    
    sortSelect.addEventListener('change', (e) => {
        sortPrompts(e.target.value);
    });
    
    loadMoreBtn.addEventListener('click', loadMorePrompts);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
