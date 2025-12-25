import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockPrompts } from '../data';
import { ArrowLeft, Copy, Share2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ShareGenerator from './ShareGenerator';
import toast from 'react-hot-toast';

const PromptDetail = () => {
  const { id } = useParams();
  const promptItem = mockPrompts.find(p => p.id === parseInt(id));
  
  const shareRef = useRef();

  if (!promptItem) {
    return <div className="text-white text-center mt-20">Prompt not found!</div>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(promptItem.prompt);
    toast.success("Prompt copied!");
  };

  const handleShareClick = () => {
    if (shareRef.current) {
      shareRef.current.handleShare();
    }
  };

  const handleTryOnGemini = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(promptItem.prompt);
    
    toast.loading("Opening Gemini...", { duration: 2000 });
    
    setTimeout(() => {
      window.open("https://gemini.google.com/", "_blank");
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Hidden Generator */}
      <ShareGenerator ref={shareRef} promptData={promptItem} />

      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Feed
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700"
        >
          <img 
            src={promptItem.image} 
            alt={promptItem.title} 
            className="w-full h-auto object-contain max-h-[80vh]" 
          />
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-600/30">
              {promptItem.model}
            </span>
            <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-600/30">
              {promptItem.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {promptItem.title}
          </h1>

          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-6 relative group">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Prompt
            </h3>
            <p className="text-gray-800 dark:text-gray-100 leading-relaxed font-mono text-sm">
              {promptItem.prompt}
            </p>
            
            <button 
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-gray-600 dark:text-gray-300 transition-colors"
              title="Copy"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleCopy}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
            >
              <Copy className="w-5 h-5" />
              Copy Prompt
            </button>
            
            <button 
              onClick={handleShareClick}
              className="flex-1 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 transition-all transform hover:scale-105"
            >
              <Share2 className="w-5 h-5" />
              Share Card
            </button>
          </div>

          <button 
            onClick={handleTryOnGemini}
            className="mt-6 w-full sm:w-auto inline-flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 cursor-pointer"
          >
            Try this on Gemini <ExternalLink className="w-3 h-3 ml-1" />
          </button>

        </motion.div>
      </div>
    </div>
  );
};

export default PromptDetail;