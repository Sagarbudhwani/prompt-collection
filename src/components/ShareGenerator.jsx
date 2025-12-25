import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import html2canvas from 'html2canvas';
import { Loader2 } from 'lucide-react';

const ShareGenerator = forwardRef(({ promptData }, ref) => {
  const cardRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useImperativeHandle(ref, () => ({
    handleShare: async () => {
      if (!cardRef.current) return;
      setIsGenerating(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 100));

        const canvas = await html2canvas(cardRef.current, {
          useCORS: true,
          scale: 2,
          backgroundColor: '#1e293b',
          windowHeight: cardRef.current.scrollHeight, // Capture full height
        });

        canvas.toBlob(async (blob) => {
          if (!blob) return;

          const file = new File([blob], `prompt-${promptData.id}.png`, { type: 'image/png' });

          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
              await navigator.share({
                files: [file],
                title: 'Check out this AI Prompt',
                text: promptData.title,
              });
            } catch (err) {
              console.log('Share dismissed');
            }
          } else {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `prompt-collection-${promptData.id}.png`;
            link.click();
          }
          setIsGenerating(false);
        }, 'image/png');

      } catch (error) {
        console.error("Generation failed:", error);
        alert("Could not generate image.");
        setIsGenerating(false);
      }
    }
  }));

  return (
    <>
      {/* THE INVISIBLE CARD */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div 
          ref={cardRef} 
          // Card width is fixed (600px), but height is auto so it grows with the image
          className="w-[600px] h-auto min-h-[900px] bg-slate-900 text-white p-8 flex flex-col relative overflow-hidden"
        >
          {/* Background Gradient Blob */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

          {/* 1. Header */}
          <div className="flex justify-between items-center z-10 mb-6 shrink-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PromptCollection
            </h2>
            <span className="bg-white/10 px-4 py-1 rounded-full text-sm font-mono border border-white/10">
              #{promptData.id}
            </span>
          </div>

          {/* 2. Main Image - FULL SIZE */}
          {/* 'h-auto' ensures aspect ratio is kept. 'w-full' fits it to width. */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative z-10 shrink-0">
             <img 
               src={promptData.image} 
               alt="Prompt Result" 
               className="w-full h-auto object-contain"
               crossOrigin="anonymous"
             />
          </div>

          {/* 3. Text Area Wrapper */}
          <div className="mt-6 z-10 flex-1 flex flex-col">
            <h1 className="text-3xl font-bold mb-4 leading-tight">
              {promptData.title}
            </h1>
            
            <div className="bg-black/40 p-6 rounded-xl border border-white/10 backdrop-blur-md">
               <p className="text-xl text-gray-200 font-mono leading-relaxed">
                {promptData.prompt}
              </p>
            </div>
          </div>

          {/* 4. Footer */}
          <div className="mt-8 flex justify-between items-center z-10 shrink-0">
             <div className="flex items-center gap-3">
               <img src="/logo.png" alt="Logo" className="w-14 h-14 rounded-xl shadow-lg border border-white/10" />
               <div className="text-gray-400">
                 <div className="text-sm">Create with Gemini</div>
                 <div className="text-white font-semibold tracking-wide">promptcollection.netlify.app</div>
               </div>
             </div>
             
             <div className="bg-white p-1.5 rounded-lg">
               <div className="w-14 h-14 bg-gray-900 flex items-center justify-center">
                 <div className="w-8 h-8 border-2 border-white rounded-sm opacity-50"></div>
               </div> 
             </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center flex-col">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
          <p className="text-white font-semibold">Generating Share Card...</p>
        </div>
      )}
    </>
  );
});

export default ShareGenerator;