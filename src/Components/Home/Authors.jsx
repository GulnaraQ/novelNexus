import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios.get(url + "/authors").then(({ data }) => {
      setAuthors(data.slice(0, 4));
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-[50px] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-7 md:flex-row justify-between md:items-end">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl/[60px] md:w-[50%] font-bold text-[#d37643]"
        >
          Discover the talented Authors Behind the Stories
        </motion.h2>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="#"
            className="text-center bg-[#d37643] w-fit px-6 py-2.5 text-[14px] md:text-[16px] text-white font-semibold duration-300 hover:opacity-75 hover:scale-95"
          >
            See all author
          </Link>
        </motion.div>
      </div>

      {/* Authors grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {authors?.map(({ id, name, category, img }, index) => (
          <motion.div
            key={id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#008186] text-[#f1e2bf] flex flex-col justify-center items-center px-7 py-12 
                       transition-transform duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl group"
          >
            <Link to="#" className="overflow-hidden rounded-full">
              <img
                src={img}
                alt={name}
                className="rounded-full object-cover w-45 h-45 shadow-lg 
                           transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </Link>
            <h3 className="font-semibold text-[20px] mt-7">{name}</h3>
            <p className="text-[15px] text-[#eedcb7] mt-2">{category}</p>
            <div className="flex gap-2 mt-7 text-[22px]">
              <Link to="#">
                <FaLinkedin />
              </Link>
              <Link to="#">
                <FaFacebookSquare />
              </Link>
              <Link to="#">
                <FaInstagramSquare />
              </Link>
              <Link to="#">
                <FaSquareXTwitter />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
