import React, { useState } from 'react';
import { Copy, Terminal } from 'lucide-react';
import PromptCard from './PromptCard';
import toast from 'react-hot-toast';
import { mockPrompts } from '../data'; // Import data to get existing lists

const AdminHelper = () => {
  const [formData, setFormData] = useState({
    id: Date.now(), 
    title: "",
    prompt: "",
    model: "Gemini", // Default
    category: "",
    image: "", 
  });

  // Calculate existing lists dynamically so you can pick from them
  const existingCategories = [...new Set(mockPrompts.map(p => p.category))];
  const existingModels = [...new Set(mockPrompts.map(p => p.model))];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const jsonOutput = `
  {
    id: ${formData.id},
    title: "${formData.title}",
    prompt: "${formData.prompt.replace(/"/g, '\\"')}", 
    model: "${formData.model}",
    image: "${formData.image}",
    category: "${formData.category}"
  },`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput);
    toast.success("JSON copied! Ready for data.js", {
        icon: '📋',
        style: { background: '#1e293b', color: '#fff' }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
        <Terminal className="w-8 h-8 text-blue-500" />
        Admin JSON Generator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: The Input Form */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">New Prompt Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Title</label>
              <input 
                name="title" 
                value={formData.title} 
                onChange={handleChange}
                placeholder="e.g. Neon Samurai"
                className="w-full p-2 rounded bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              
              {/* DYNAMIC CATEGORY INPUT */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Category</label>
                <input 
                  list="category-options"
                  name="category"
                  value={formData.category} 
                  onChange={handleChange}
                  placeholder="Select or Type New..."
                  className="w-full p-2 rounded bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none"
                />
                <datalist id="category-options">
                  {existingCategories.map(c => <option key={c} value={c} />)}
                </datalist>
              </div>

              {/* DYNAMIC MODEL INPUT */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Model</label>
                <input 
                  list="model-options"
                  name="model"
                  value={formData.model} 
                  onChange={handleChange}
                  placeholder="Select or Type New..."
                  className="w-full p-2 rounded bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none"
                />
                <datalist id="model-options">
                   {existingModels.map(m => <option key={m} value={m} />)}
                   {/* Fallback defaults if list is empty */}
                   <option value="Gemini" />
                   <option value="Midjourney" />
                   <option value="DALL-E 3" />
                </datalist>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Image URL</label>
              <input 
                name="image" 
                value={formData.image} 
                onChange={handleChange}
                placeholder="https://..."
                className="w-full p-2 rounded bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Prompt</label>
              <textarea 
                name="prompt" 
                value={formData.prompt} 
                onChange={handleChange}
                rows="4"
                placeholder="Paste the full prompt here..."
                className="w-full p-2 rounded bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Preview & Code */}
        <div className="space-y-6">
          
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Live Preview</h2>
            <div className="w-full max-w-sm mx-auto">
               <PromptCard prompt={formData} />
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-gray-700 relative group">
            <h3 className="text-gray-400 text-xs uppercase font-mono mb-2">Generated JSON for data.js</h3>
            <pre className="text-green-400 font-mono text-xs overflow-x-auto p-2 bg-black/30 rounded whitespace-pre-wrap">
              {jsonOutput}
            </pre>
            
            <button 
              onClick={copyToClipboard}
              className="absolute top-4 right-4 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 text-sm transition-colors"
            >
              <Copy className="w-4 h-4" /> Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHelper;