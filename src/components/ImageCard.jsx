// components/ImageCard.jsx
import Image from "next/image";

const ImageCard = ({ image, title, description }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-56 w-full">
        <img
          src={image}
          alt={title}
          width={288}
          height={384}
          className="h-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          placeholder="blur"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black 
                      group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
      />
      <div
        className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 
                      text-center transition-all duration-500 group-hover:translate-y-0"
      >
        <h1 className="font-dmserif text-3xl font-bold text-white mb-5 uppercase">
          {title}
        </h1>
        <p
          className="mb-3 text-base italic text-white opacity-0 transition-opacity 
                    duration-300 group-hover:opacity-100"
        >
          {description}
        </p>
        <button
          className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize cursor-pointer
                        text-white shadow shadow-black/60"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
