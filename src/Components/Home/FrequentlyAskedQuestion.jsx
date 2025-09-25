import React, { useState } from "react";
import { question } from "../../Mock/data";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const FrequentlyAskedQuestion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-6 py-[70px]">
      <h2 className="font-bold text-[#d37643] text-3xl md:w-[65%] md:text-4xl/[50px] lg:text-5xl/[60px] mx-auto text-center">
        Frequently asked question.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        {/* left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {question.slice(0, 4).map(({ id, title, content }) => {
            const isOpen = openId === id;

            return (
              <div
                key={id}
                className="p-6 bg-[#008186] border-b border-[#07acb2] text-[#fcf2dc] cursor-pointer"
                onClick={() => toggleAccordion(id)}
              >
                <div className="flex justify-between items-center text-[20px] font-medium">
                  <h3>{title}</h3>
                  <IoIosArrowDown
                    className={`text-[30px] transition-transform duration-500 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#f0e0be] mt-5">{content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {question.slice(4, 8).map(({ id, title, content }) => {
            const isOpen = openId === id;

            return (
              <div
                key={id}
                className="p-6 bg-[#008186] border-b border-[#07acb2] text-[#fcf2dc] cursor-pointer"
                onClick={() => toggleAccordion(id)}
              >
                <div className="flex justify-between items-center text-[20px] font-medium">
                  <h3>{title}</h3>
                  <IoIosArrowDown
                    className={`text-[30px] transition-transform duration-500 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#f0e0be] mt-5">{content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
