import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios.get(url + "/blogs").then(({ data }) => {
      setBlogs(data);
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-[100px]">
      {/* Başlıq və button hissəsi */}
      <div className="flex flex-col gap-7 md:flex-row justify-between md:items-end">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl/[60px] md:w-[60%] font-bold text-[#d37643]">
            Explore our latest book related blog posts.
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to=""
            className="text-center bg-[#d37643] w-fit px-6 py-2.5 text-[14px] md:text-[16px] text-white font-semibold duration-300 hover:opacity-75 hover:scale-95"
          >
            Browse all
          </Link>
        </motion.div>
      </div>

      {/* Blog kartları */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {blogs?.slice(0, 3).map(({ id, img, name, date, title }) => {
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
                    <Link>Read more</Link> <FaArrowRight />
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

export default BlogPosts;
