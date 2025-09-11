import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-[70px] lg:py-[100px] overflow-hidden">
      <div className="lg:w-[50%] mx-auto text-center">
        {/* h1 və p eyni vaxtda yuxarıdan gəlir */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-[#d37643] text-3xl lg:text-5xl font-bold">
            About us
          </h1>
          <p className="text-[#826a59] text-2xl lg:text-[26px]/[35px] font-semibold mt-7">
            Sed in mi enim turpis nillesque dolor scelerisque eget libero massa.
            Tincidunt ut maecenas mi impdiet bibendum ultrices.
          </p>
        </motion.div>
      </div>

      <div className="mt-10">
        {/* Şəkil animasiya ilə aşağıdan */}
        <motion.img
          src="./aboutUs.jpg"
          alt="aboutUs"
          className="w-full"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
