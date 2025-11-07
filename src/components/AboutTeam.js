import React from "react";
import { Link } from "react-router-dom";

export default function AboutTeam() {
  return (
    <section className="relative w-full bg-[#fdf1ec] min-h-screen flex flex-col items-center overflow-hidden px-4 py-16 md:px-12 lg:px-20">
      
      <img
        src="Indiagate.png"
        alt="India Gate Illustration"
        className="absolute bottom-0 left-0 w-40 sm:w-52 md:w-64 lg:w-80 object-contain opacity-90 pointer-events-none select-none"
      />

      
      <div className="absolute top-8 left-4 sm:top-12 sm:left-8 md:top-16 md:left-16 w-28 sm:w-36 md:w-48 rotate-[-5deg]">
        <img
          src="Paper.png"
          alt="Paper Background"
          className="w-full h-auto object-contain"
        />
      </div>

     
      <div className="text-center mt-10 md:mt-12 lg:mt-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800">
          Meet Our Creative Team
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2">
          The minds and hearts behind every story.
        </p>
      </div>

      
      <div className="relative w-full flex flex-col items-center mt-12 md:mt-16">
        
        <div className="flex justify-center flex-wrap gap-6 md:gap-16 text-sm sm:text-base md:text-lg font-serif text-gray-800 mb-6">
          <span className="transform rotate-[-6deg]">Branding Experts</span>
          <span className="transform rotate-[0deg]">Film Makers</span>
          <span className="transform rotate-[6deg]">Art Curators</span>
        </div>

        
        <img
          src="Team.png"
          alt="Team Silhouettes"
          className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl object-contain"
        />
      </div>

      
      <div className="mt-10 md:mt-12 text-center">
        <h2 className="text-base sm:text-lg md:text-xl font-serif text-gray-800 px-4">
          Take a closer look at the stories V bring to life.
        </h2>
        <Link
          to="/portfolio"
          className="inline-block mt-5 bg-orange-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-orange-600 transition-colors"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  );
}
