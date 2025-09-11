import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL + "/blogs";

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBlogs(data);
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-[100px]">
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-bold text-3xl md:text-4xl lg:text-5xl/[60px] text-center text-[#d37643] lg:w-[60%] mx-auto"
      >
        Explore our latest book related blog posts.
      </motion.h1>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
      >
        {blogs?.map(({ id, img, name, date, title }) => {
          return (
            <div key={id}>
              <img src={img} alt={name} />
              <div className="p-4">
                <Link
                  to="#"
                  className="font-semibold text-[20px] text-[#098489]"
                >
                  {title}
                </Link>
                <div className="flex justify-between items-center gap-5 mt-6">
                  <div>
                    <h4 className="text-[#d46e37]">{name}</h4>
                    <p className="text-gray-400 text-[14px] mt-1">{date}</p>
                  </div>
                  <div className="flex gap-3 items-center font-semibold text-[#098489] duration-300 hover:gap-2">
                    <Link to="#">Read more</Link> <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Posts;
