import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import AboutTeam from "./components/AboutTeam";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";

import Services from "./Pages/Services";
import FilmProduction from "./Pages/FilmProduction";
import Branding from "./Pages/Branding";
import ArtCuration from "./Pages/ArtCuration";

export default function App() {
  return (
    <>
     
      <Navbar />
     
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <div className="pt-20">
                <Hero />
              <AboutTeam />
              <AboutUs />
              
              <ContactForm />
              </div>
            </>
          }
        />

        
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/film-production" element={<FilmProduction />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/art-curation" element={<ArtCuration />} />
      </Routes>
    </>
  );
}
