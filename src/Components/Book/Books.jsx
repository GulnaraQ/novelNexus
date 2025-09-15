import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Books = () => {
  const genres = [
    "Fiction",
    "Non Fiction",
    "Comedy",
    "Romance",
    "Science Fiction",
    "Horror",
    "Adventure",
  ];

  const [books, setBooks] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL + "/books";

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBooks(data);
    });
  }, []);

  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <div className="container mx-auto px-6 py-[100px]">
      {/* Başlıq */}
      <motion.h1
        className="font-bold text-5xl text-center text-[#d37643]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Discover your next favorite book offers.
      </motion.h1>

      {/* Genres */}
      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 lg:flex gap-4 items-center justify-between w-fit mx-auto bg-[#f4e5c1] p-5 my-[50px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.3} // delay
      >
        {genres?.map((genre, index) => (
          <motion.div
            key={index}
            className="bg-[#046064] px-3 py-2 text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            {genre}
          </motion.div>
        ))}
      </motion.div>

      {/* Books */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 justify-between mt-[50px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.5}
      >
        {books?.map(({ id, img, name, author, price, discount }, i) => (
          <motion.div
            key={id}
            className="p-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2 + i * 0.1}
          >
            <Link to={`/book/${id}`}>
              <img
                src={img}
                alt={name}
                className="w-[90%] mx-auto duration-500 hover:scale-110"
              />
              <h3 className="font-semibold text-[20px] text-[#008186] mt-5">
                {name}
              </h3>
              <h4 className="text-[#826a59] text-[15px] mt-2">{author}</h4>
              <p className="font-bold text-[20px] lg:text-[25px] text-[#db804f] my-3">
                {discount}
              </p>
              <p className="text-[#9b9a98] line-through">{price}</p>

              <button className="bg-[#d37643] mt-5 w-full py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95">
                Add to Card
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Books;
