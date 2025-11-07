export default function ServiceCard({ title, image, link, tape, small }) {
  return (
    <a href={link}
      className={`relative bg-white shadow-lg rounded-sm overflow-hidden transition-transform hover:scale-105 duration-300 ${
        small ? "w-52" : "w-72"
      } border-3 border-white`}
    >
      {tape && (
        <img
          src="/tape.png"
          alt="tape"
          className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-20 opacity-90"
        />
      )}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover ${small ? "h-56" : "h-80"}`}
        />
      </div>
      <div className="text-center py-2 italic text-gray-800 font-serif text-base">
        {title}
      </div>
    </a>
  );
}
