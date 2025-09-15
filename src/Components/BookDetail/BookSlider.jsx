import React, { useState } from "react";

const images = [
  { src: "img_woods_wide.jpg", alt: "The Woods" },
  { src: "img_5terre_wide.jpg", alt: "Cinque Terre" },
  { src: "img_mountains_wide.jpg", alt: "Mountains and fjords" },
];

const BookSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="max-w-3xl">
      {/* Main Image */}
      <div className="relative bg-[#f4e5c1]">
        <img
          src={images[slideIndex].src}
          alt={images[slideIndex].alt}
          className="w-full h-80 object-cover"
        />
        <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1">
          {slideIndex + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => setSlideIndex(i)}
            className={`w-full h-24 object-cover cursor-pointer transition duration-200 ${
              i === slideIndex
                ? "ring-2 ring-[#d37643] opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSlider;
