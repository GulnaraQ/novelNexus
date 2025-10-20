import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PopularBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/db.json")
      .then(({ data }) => {
        if (data.books) {
          setBooks(data.books.slice(0, 4));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto pt-[100px] pb-[50px] px-6">
      {/* title */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-7">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#d37643]">
          Our most popular books
        </h2>
        <Link
          to="/book"
          className="text-center bg-[#d37643] w-fit px-6 py-2.5 text-[14px] md:text-[16px] text-white font-semibold duration-300 hover:opacity-75 hover:scale-95"
        >
          See all Book
        </Link>
      </div>

      {/* books */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 justify-between mt-[50px]">
        {books?.map(({ id, img, name, author, price, discount }, i) => {
          return (
            <motion.div
              key={id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-5"
            >
              <Link
                to={`/book/${id}`}
                className="flex flex-col justify-between"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-[90%] mx-auto duration-500 hover:scale-110"
                />
                <div>
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
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularBooks;
