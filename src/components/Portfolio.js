import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Portfolio() {
  
  const videos = [
   
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
     
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-screen bg-[#fdf1ec] flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      
      
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif mb-2">
          The Highlight Reel
        </h2>
        <p className="text-gray-700">Watch the magic we’ve captured.</p>
      </div>

      
      <div className="relative flex items-center justify-center">
        
        <button
          onClick={prevVideo}
          className="absolute left-[-40px] z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={28} />
        </button>

        
        <div className="border-8 border-gray-300 bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
          
          <div className="flex justify-between w-full mb-2">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="w-8 h-4 bg-white rounded-sm"></div>
            ))}
          </div>

          
          <div className="w-[320px] sm:w-[480px] md:w-[640px] aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src={videos[currentIndex]}
              title="Portfolio Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          
          <div className="flex justify-between w-full mt-2">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="w-8 h-4 bg-white rounded-sm"></div>
            ))}
          </div>
        </div>

        
        <button
          onClick={nextVideo}
          className="absolute right-[-40px] z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
