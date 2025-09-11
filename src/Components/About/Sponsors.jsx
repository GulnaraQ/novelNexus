import { motion } from "framer-motion";
import React from "react";

const Sponsors = () => {
  const sponsors = [
    { img: "/cloud.svg", title: "lorem mi mus aliq" },
    { img: "/manila.svg", title: "Vivamus mauris amet" },
    { img: "/minty.svg", title: "Popi ivamus mauri" },
    { img: "/vision.svg", title: "Kuris amet lorem" },
    { img: "/hues.svg", title: "Ss aliquam Ut enim." },
  ];

  return (
    <div className="bg-[#008186] text-[#fcf2dc] py-[70px] lg:py-[100px] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* h2 animasiya ilə yuxarıdan */}
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[30px] lg:text-[45px]/[55px] font-bold lg:w-[50%] mx-auto"
        >
          Appreciating sponsors who foster reading
        </motion.h2>

        {/* box-lar animasiya ilə aşağıdan */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-10">
          {sponsors?.map(({ img, title }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <img src={img} alt="sponsors" />
              <p className="text-[#efe0c1]">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
