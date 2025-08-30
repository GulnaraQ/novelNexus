import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="container mx-auto px-6 py-[50px]">
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
          <div>
            <img src="./bestQuality.svg" alt="bestQuality" />
            <h3 className="text-[#d37643] text-[20px] font-semibold mt-7 mb-3">
              Best quality
            </h3>
            <p className="text-[#8b7463] font-medium">
              Interdum est tortor sodales facilisis nulla. Turpis sapien neque
              id ac tortor. Nunc nunc et ut neque.
            </p>
          </div>
          <div>
            <img src="./SimpletoMaster.svg" alt="SimpletoMaster" />
            <h3 className="text-[#d37643] text-[20px] font-semibold mt-7 mb-3">
              Simple to Master
            </h3>
            <p className="text-[#8b7463] font-medium">
              Quam tincidunt erat phasellus faucibus. Ipsum congue fermentum
              nulla urna sed. Pretium leo diam eu lectus.
            </p>
          </div>
        </motion.div>

        {/* orta box */}
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
          <div>
            <img src="./manuscriptStyle.svg" alt="manuscriptStyle" />
            <h3 className="text-[#d37643] text-[20px] font-semibold mt-7 mb-3">
              Manuscript Style
            </h3>
            <p className="text-[#8b7463] font-medium">
              Morbi et ultrices aliquam at. Purus enim arcu vitae mauris donec
              aliquam a sed. Urna nunc gravida nunc eget in.
            </p>
          </div>
          <div>
            <img src="./FastandWelcoming.svg" alt="FastandWelcoming" />
            <h3 className="text-[#d37643] text-[20px] font-semibold mt-7 mb-3">
              Fast and Welcoming
            </h3>
            <p className="text-[#8b7463] font-medium">
              Odio morbi semper mauris vel id ipsum imperdiet. Duis habitant
              lorem volutpat fringilla sagittis purus amet dui pharetra.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
