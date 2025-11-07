
import { Link } from "react-router-dom";

export default function FilmProduction() {
  return (
    <div className="min-h-screen bg-[#fdf1ec]">
      <br/>
      <br/>
      <br/>
      <br/>
      <section className="max-w-5xl mx-auto py-10 px-6">
        <Link to="/services" className="text-orange-600 mb-4 inline-block">&larr; Back</Link>
        <h2 className="mt-16 text-2xl italic mb-6 top-12"
        style={{fontFamily: "Halant"}}>
          “Filmmaking is a chance to live many lifetimes.” - Robert Altman
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/film_production.png"
            alt="Film Production"
            className="w-1/2 md:w-1/4 rounded-lg shadow"
          />
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold mb-2">Who says films are just an escape?
We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.
V crafts:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Documentaries</li>
              <li>Corporate Videos</li>
              <li>2D Animation Videos</li>
              <li>3D Animation Videos</li>
            </ul>
          </div>
        </div>
        <div><h3 className=" ml-8 text-lg font-semibold mb-2">Film Production</h3></div>
      </section>
    </div>
  );
}
