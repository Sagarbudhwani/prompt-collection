import React from 'react';
import { Github, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-gray-900 dark:text-white">PromptCollection</span>
          </div>

          {/* Developer Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a 
              href="https://github.com/Sagarbudhwani" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              Developed by Sagarbudhwani
            </a>

            <a 
              href="https://appsbysagar.netlify.app/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Explore More Projects
            </a>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> for AI Users
          </p>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} PromptCollection. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;