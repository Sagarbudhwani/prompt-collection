import React from 'react';
import { Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const PromptCard = ({ prompt }) => {
  
  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.prompt);
    
    toast.success("Prompt copied!", {
      style: { background: '#333', color: '#fff' },
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4 break-inside-avoid group relative rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
    >
      {/* Link to detail page (disabled in Admin preview) */}
      <Link to={prompt.id ? `/prompt/${prompt.id}` : '#'} className={!prompt.id ? 'pointer-events-none' : ''}>
        
        <div className="w-full bg-gray-200 dark:bg-gray-800">
          <img 
            src={prompt.image || "https://via.placeholder.com/400x600?text=No+Image"} 
            alt={prompt.title} 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            onError={(e) => {e.target.src = "https://via.placeholder.com/400x600?text=Image+Error"}} 
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600/90 px-2 py-1 rounded text-white mb-2 inline-block backdrop-blur-md">
                {prompt.model || "AI"}
              </span>
              <h3 className="font-bold text-lg leading-tight text-white/95 group-hover:text-white transition-colors">
                {prompt.title || "Untitled Prompt"}
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-300">
            <p className="text-xs text-gray-300 line-clamp-1 flex-1 mr-2 opacity-80 font-mono">
              {prompt.prompt || "No prompt text..."}
            </p>
            
            {/* ONLY Copy Button remains */}
            <button 
              onClick={handleCopy}
              className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-colors z-10 border border-white/10"
              title="Copy Prompt"
            >
              <Copy className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PromptCard;