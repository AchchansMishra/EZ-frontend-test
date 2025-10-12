
import { Link } from "react-router-dom";

export default function ArtCuration() {
  return (
    <div className="min-h-screen bg-[#fdf1ec]">
      
      <section className="max-w-5xl mx-auto py-10 px-6">
        <Link to="/services" className="text-orange-600 mb-4 inline-block">&larr; Back</Link>
        <h2 className="text-xl italic mb-6">
          “A place is where it belongs, to the people.” – Vanita Verma
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1"
            alt="Art Curation"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold mb-2">Art Curation</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Public Art Installations</li>
              <li>Culture Festivals</li>
              <li>Exhibitions & Exports</li>
              <li>Cultural Storytelling</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
