
import { Link } from "react-router-dom";

export default function Branding() {
  return (
    <div className="min-h-screen bg-[#fdf1ec]">
       <br/>
      <br/>
      <br/>
      <br/>
      <section className="max-w-5xl mx-auto py-10 px-6">
        <Link to="/services" className="text-orange-600 mb-4 inline-block">&larr; Back</Link>
        <h2 className="mt-16 text-xl italic mb-6"
        style={{fontFamily: "Haltan"}}>
          “A brand is a voice, and a product is a souvenir.” – Lisa Gansky
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/branding-img.png"
            alt="Branding"
            className="w-1/2 md:w-1/4 rounded-lg shadow"
          />
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold mb-2">A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
We shape brands that people remember, return to, and fall in love with.
V creates:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Branding & Communication</li>
              <li>Market Mapping</li>
              <li>Content Management</li>
              <li>Social Media Management</li>
               <li>Rebranding</li> 
            </ul>
          </div>
        </div>
        <div><h3 className="ml-14 text-lg font-semibold mb-2">Branding</h3></div>
      </section>
    </div>
  );
}
