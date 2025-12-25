import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from './components/Navbar';
import CategoryNav from './components/CategoryNav';
import PromptCard from './components/PromptCard';
import PromptDetail from './components/PromptDetail';
import AdminHelper from './components/AdminHelper';
import Footer from './components/Footer';

// Data
import { mockPrompts } from './data';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  // State for Search and Filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle Dark Mode Logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Filter Logic: Filters the prompts based on Category AND Search Text
  const filteredPrompts = mockPrompts.filter(prompt => {
    const matchesCategory = selectedCategory === "All" || prompt.category === selectedCategory;
    const matchesSearch = 
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchQuery.toLowerCase()); // Allow searching by category name too

    return matchesCategory && matchesSearch;
  });

  return (
    <BrowserRouter>
      {/* Main wrapper handles background color and flex layout for footer sticking */}
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        
        {/* Toast Notification Container */}
        <Toaster position="bottom-center" reverseOrder={false} />

        {/* Navbar */}
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        {/* Routes determine what shows on the page */}
        <div className="flex-grow">
          <Routes>
            {/* HOME PAGE */}
            <Route path="/" element={
              <>
                <CategoryNav 
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  {/* Results Check */}
                  {filteredPrompts.length === 0 ? (
                    <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                      <p className="text-xl">No prompts found matching "{searchQuery}"</p>
                      <button 
                        onClick={() => {setSearchQuery(""); setSelectedCategory("All")}}
                        className="mt-4 text-blue-500 hover:underline"
                      >
                        Clear Filters
                      </button>
                    </div>
                  ) : (
                    // Masonry Grid
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-auto">
                      {filteredPrompts.map((item) => (
                        <PromptCard key={item.id} prompt={item} />
                      ))}
                    </div>
                  )}
                </main>
              </>
            } />

            {/* DETAIL PAGE */}
            <Route path="/prompt/:id" element={<PromptDetail />} />

            {/* SECRET ADMIN PAGE */}
            <Route path="/admin" element={<AdminHelper />} />
          </Routes>
        </div>

        {/* Footer always at bottom */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;