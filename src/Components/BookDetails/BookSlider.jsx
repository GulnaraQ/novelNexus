import { useState } from "react";

const BookSlider = ({ image }) => {
  const imgs = [
    { src: image || "/no-image.jpg", alt: "Book cover" },
    { src: "/book1.jpg", alt: "Book" },
    { src: "/book2.jpg", alt: "Book" },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="max-w-3xl">
      {/* Main Image */}
      <div className="bg-[#f4e5c1] flex items-center justify-center h-110">
        <img
          src={imgs[slideIndex].src}
          alt={imgs[slideIndex].alt}
          className={` transition-opacity duration-500 ${
            slideIndex === 0
              ? "object-contain h-80"
              : "w-full object-cover h-full"
          }`}
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {imgs.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => setSlideIndex(i)}
            className={`w-full h-36 cursor-pointer transition duration-200 ${
              i === 0 ? "object-contain bg-[#fcf2dc]" : "object-cover"
            } ${
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
