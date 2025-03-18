import Link from "next/link";
const Card = ({ id, image, title, description, route }) => {
  return (
    <Link href={`/${route}/${id}`}>
      <div className="flex flex-row rounded-2xl  space-x-6 relative">
        <div className="flex-shrink-0 z-10 py-3 pl-3">
          <img
            src={image}
            alt={title}
            className="w-40 h-56 rounded-xl object-fill shadow-lg mb-3 hover:scale-105 transition-all"
          />
          <button className="bg-blue-300 hover:bg-blue-200 transition px-4 py-1.5 rounded-full font-medium uppercase text-gray-800 cursor-pointer">
            Read Full Article
          </button>
        </div>
        <div className="flex-1 self-end z-10 py-5">
          <h2 className="font-bold text-gray-800 text-lg mb-2">{title}</h2>
          <p className="text-gray-600 text-sm line-clamp-6 ">{description}</p>
        </div>
        <div className="bg-gray-200 w-full h-2/3 absolute bottom-0 rounded-2xl"></div>
      </div>
    </Link>
  );
};
export default Card;
