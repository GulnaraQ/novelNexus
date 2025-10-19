import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Books = () => {
  const genres = [
    "All",
    "Fiction",
    "Non Fiction",
    "Comedy",
    "Romance",
    "Science Fiction",
    "Horror",
    "Adventure",
  ];

  const [books, setBooks] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  useEffect(() => {
    axios
      .get("/db.json")
      .then(({ data }) => {
        setBooks(data.books);
      })
      .catch((err) => console.error(err));
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  // Filter
  const filteredBooks =
    activeGenre === "All"
      ? books
      : books.filter((book) => book.genre.includes(activeGenre));

  return (
    <div className="container mx-auto px-6 py-[100px]">
      <motion.h1
        className="font-bold text-5xl text-center text-[#d37643]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Discover your next favorite book offers.
      </motion.h1>

      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 lg:flex gap-4 items-center justify-between w-fit mx-auto bg-[#f4e5c1] p-5 my-[50px]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        {genres.map((genre, index) => (
          <button
            key={index}
            onClick={() => setActiveGenre(genre)}
            className={`px-3 py-2 text-white duration-300 ${
              activeGenre === genre ? "bg-[#d37643]" : "bg-[#008186]"
            }`}
          >
            {genre}
          </button>
        ))}
      </motion.div>

      <motion.div
        key={activeGenre}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 justify-between mt-[50px]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map(({ id, img, name, author, price, discount }, i) => (
            <motion.div
              key={id}
              className="p-5"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4 + i * 0.1}
            >
              <div>
                <Link to={`/book/${id}`}>
                  <img
                    src={img}
                    alt={name}
                    className="w-[90%] mx-auto duration-500 hover:scale-110"
                  />
                </Link>
                <h3 className="font-semibold text-[20px] text-[#008186] mt-5">
                  {name}
                </h3>
                <h4 className="text-[#826a59] text-[15px] mt-2">{author}</h4>
                <p className="font-bold text-[20px] lg:text-[25px] text-[#db804f] my-3">
                  {discount}
                </p>
                <p className="text-[#9b9a98] line-through">{price}</p>

                <button className="bg-[#d37643] mt-5 w-full py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No books found in this genre.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Books;
