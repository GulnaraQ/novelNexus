import { motion } from "framer-motion";
import { powerfulFeatures } from "../../Mock/data";

const Features = () => {
  return (
    <div className="container mx-auto px-6 py-[50px]">
      {/* title */}
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-bold text-[#d37643] text-3xl md:w-[65%] md:text-4xl/[50px] lg:text-5xl/[60px] mx-auto text-center"
      >
        Discover powerful features to elevate your reading.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[28%_35%_28%] gap-10 items-center justify-between mt-[50px]">
        {/* left box */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-between md:flex-row lg:flex-col gap-10 lg:gap-20"
        >
          {powerfulFeatures
            .slice(0, 2)
            .map(({ img, alt, title, description }, index) => {
              return (
                <div key={index}>
                  <img src={img} alt={alt} />
                  <h3 className="text-[#d37643] text-[20px] font-semibold mt-7 mb-3">
                    {title}
                  </h3>
                  <p className="text-[#8b7463] font-medium">{description}</p>
                </div>
              );
            })}
        </motion.div>

        {/* image box */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="./featureImage.webp"
            alt="featureImage"
            className="w-[100%]"
          />
        </motion.div>

        {/* right box */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-between md:flex-row lg:flex-col gap-10 lg:gap-20"
        >
          {powerfulFeatures
            .slice(2, 4)
            .map(({ img, alt, title, description }, index) => {
              return (
                <div key={index}>
                  <img src={img} alt={alt} />
                  <h3 className="text-[#d37643] text-[20px] font-semibold mt-7 mb-3">
                    {title}
                  </h3>
                  <p className="text-[#8b7463] font-medium">{description}</p>
                </div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
