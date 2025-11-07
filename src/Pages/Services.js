import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#fdf1ec] pt-40 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full">
        <img src="/Frame_33.png" alt="decorative border" className="w-full" />
      </div>

      <section className="flex flex-col items-center py-10 relative z-10">
        <h2
          className="text-2xl md:text-3xl italic text-[#3b3b6d] mb-10 text-center font-light"
          style={{ fontFamily: "Halant" }}
        >
          The storyboard reveals the breadth of our craft.
        </h2>

        <div className="w-48 h-[2px] bg-[#12326b] mb-12 rounded-full"></div>

        <div className="flex justify-center items-end gap-10 px-4 flex-wrap md:flex-nowrap">
          <div className="transform rotate-[-4deg] hover:rotate-[-2deg] transition-transform duration-300">
            <ServiceCard
              title="Film Production"
              image="/img1.png"
              link="/services/film-production"
              tape
              small
            />
          </div>

          <div className="transform rotate-[0deg] hover:rotate-[1deg] transition-transform duration-300">
            <ServiceCard
              title="Branding"
              image="/img2.png"
              link="/services/branding"
              tape
              small
            />
          </div>

          <div className="transform rotate-[4deg] hover:rotate-[2deg] transition-transform duration-300">
            <ServiceCard
              title="Art Curation"
              image="/img3.png"
              link="/services/art-curation"
              tape
              small
            />
          </div>
        </div>
      </section>
    </div>
  );
}
