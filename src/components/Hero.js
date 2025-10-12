

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-[#fdf1ec] text-gray-800 overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20"
    >
      
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none select-none">
       
      </div>

      
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic text-[#12326b] mb-4 leading-snug max-w-lg">
          Yarnan is where stories find their voice and form
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-orange-600 font-medium mb-4">
          Films . Brands . Art
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md leading-relaxed px-2 sm:px-0">
          Since 2008, V has been telling stories — stories of people, their journeys,
          and the places that shape them. Some begin in polished boardrooms,
          others in humble village squares. But every story starts the same way —
          by listening with intention. V believes it takes trust, patience,
          and an eye for the unseen to capture what truly matters. <br />
          V doesn’t just tell stories — V honors them.
        </p>
      </div>

      
      <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border-2 border-orange-300 rounded-full flex items-center justify-center bg-white shadow-md">
          <img
            src="/logo.png.png"
            alt="V Films Logo"
            className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
