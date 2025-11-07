
import { Link } from "react-router-dom";

export default function ArtCuration() {
  return (
    <div className="min-h-screen bg-[#fdf1ec]">
        <br/>
      <br/>
      <br/>
    <br/>
      <section className="max-w-5xl mx-auto py-10 px-6">
        <Link to="/services" className="text-orange-600 mb-4 inline-block">&larr; Back</Link>
        <h2 className="mt-16 text-xl italic mb-6"
        style={{fontFamily: "Halant"}}>
          “A place is where it belongs, to the people.” – Vanita Verma
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/art_curation.jpg"
            alt="Art Curation"
            className="w-1/2 md:w-1/4 rounded-lg shadow"
          />
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold mb-2">Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
Through every festival, every performance, and every gathering, we help stories find their stage and their people.
V curates:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Art Festivals</li>
              <li>Live Performances</li>
              <li>Community Events</li>
              <li>Cultural Storytelling</li>
            </ul>
          </div>
        </div>
        <div><h3 className="ml-12 text-lg font-semibold mb-2">Art Curation</h3></div>
      </section>
    </div>
  );
}
