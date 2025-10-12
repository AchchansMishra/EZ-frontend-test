import { Link } from "react-router-dom";

export default function ServiceCard({ title, image, link }) {
  return (
    <Link
      to={link}
      className="flex flex-col items-center w-64 bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden "
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
