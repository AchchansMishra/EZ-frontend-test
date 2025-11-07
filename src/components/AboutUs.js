import React from "react";

export default function AboutUs() {
  return (
    <section className="relative w-full bg-[#fdf1ec] min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 py-20 md:px-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center md:text-left">
            A montage of familiar faces and names.
          </h2>

          <p
            className="text-gray-800 text-center md:text-left leading-relaxed"
            style={{ fontFamily: "Instrument Sans" }}
          >
            Some stories come from the biggest names.
            <br />
            Others begin with bold, rising voices.
            <br />
            We’ve been fortunate to walk alongside both - listening, creating,
            and building stories that matter.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <div className="bg-[#dad999] shadow-md px-6 py-4 text-center transform rotate-[-5deg]">
              <h3 className="text-3xl font-bold text-gray-800">85+</h3>
              <p className="text-orange-500 mt-1">Projects</p>
            </div>

            <div className="bg-[#dad999] shadow-md px-6 py-4 text-center transform rotate-[2deg]">
              <h3 className="text-3xl font-bold text-gray-800">50+</h3>
              <p className="text-orange-500 mt-1">Happy Clients</p>
            </div>

            <div className="bg-[#dad999] shadow-md px-6 py-4 text-center transform rotate-[-3deg]">
              <h3 className="text-3xl font-bold text-gray-800">10+</h3>
              <p className="text-orange-500 mt-1">Experts Team</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-end text-right relative">
          <blockquote className="font-serif text-lg md:text-xl italic text-gray-800 max-w-lg leading-relaxed">
            “Every project is more than just a brief – it’s a new chapter
            waiting to be written. Together, we’ve crafted tales that inspire,
            connect, and endure.”
          </blockquote>
          <img
            src="/Coca-Cola.png"
            alt="Coca-Cola Logo"
            className="absolute bottom-24 right-10 w-33 sm:w-41 md:w-49 opacity-75 pointer-events-none select-none top-32 left-28"
          />
          <img
            src="/Mountains.png"
            alt="Mountain illustration"
            className="absolute bottom-0 right-0 w-[300px] md:w-[400px] opacity-90 pointer-events-none top-48"
          />
        </div>
      </div>
    </section>
  );
}
