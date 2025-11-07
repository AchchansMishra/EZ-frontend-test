import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#fdf1ec] text-gray-800 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="absolute top-1/2 left-0 md:left-1/6 transform -translate-y-1/2 pointer-events-none select-none z-0">
        <img
          src="/mandala.png"
          alt="Mandala background"
          className="mt-8 ml-5 w-64 sm:w-80 md:w-96 lg:w-112 opacity-60"
        />
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/logo.png.png"
            alt="V Films Logo"
            className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain"
          />
        </div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
        <h2
          className="text-l sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic text-[#0F3255] mb-4 leading-snug max-w-lg"
          style={{ fontFamily: '"Island Moments"' }}
        >
          Varnan is where stories find their voice and form
        </h2>

        <p
          className="text-base sm:text-lg md:text-xl text-orange-600 font-medium mt-4 mb-4 ml-28"
          style={{ fontFamily: "Halant" }}
        >
          Films . Brands . Art
        </p>

        <p
          className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md leading-relaxed px-2 sm:px-0 mt-4"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Since 2009, V has been telling stories - stories of people, their journeys,
          and the places that shape them. Some begin in polished boardrooms,
          others in humble village squares. But every story starts the same way -
          by listening with intention. V believes it takes trust, patience, and an eye
          for the unseen to capture what truly matters. <br />
          V doesn’t just tell stories - V honours them.
        </p>
      </div>
    </section>
  );
}
