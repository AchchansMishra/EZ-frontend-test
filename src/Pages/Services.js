import ServiceCard from "../components/ServiceCard";


export default function Services() {
  return (
    <div className="min-h-screen bg-[#fdf1ec] pt-40">
     
      <section className="flex flex-col items-center py-10">
        <h2 className="text-2xl md:text-3xl italic text-blue-900 mb-8 text-center">
          The storyboard reveals the breadth of our craft.
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ServiceCard 
            title="Film Production"
            image="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1"
            link="/services/film-production"
          />
          <ServiceCard
            title="Branding"
            image="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1"
            link="/services/branding"
          />
          <ServiceCard
            title="Art Curation"
            image="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1"
            link="/services/art-curation"
          />
        </div>
      </section>
    </div>
  );
}
