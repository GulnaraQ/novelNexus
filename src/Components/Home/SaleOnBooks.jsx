import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SaleOnBooks = () => {
  return (
    <div className="container mx-auto px-6 py-[50px] grid grid-cols-1 lg:grid-cols-2 gap-7 justify-between">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid grid-cols-[1fr_2fr] gap-7 justify-between items-center bg-[#008186] p-12 text-white"
      >
        <div>
          <img src="./saleOn.png" alt="saleOn" />
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="text-[20px] md:text-[25px] lg:text-[35px]/[45px] font-bold">
            Special sale on Featured books !
          </h3>
          <Link
            to="/book"
            className="bg-[#d37643] w-fit px-6 py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95"
          >
            Shop now
          </Link>
        </div>
        <div className="absolute right-[-25px] top-[-25px]">
          <img src="./percentOrange.svg" alt="percentOrange" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid grid-cols-[1fr_2fr] gap-7 justify-between items-center bg-[#e7b490] p-12"
      >
        <div>
          <img src="./basket.png" alt="basket" className="w-[180px]" />
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="text-[20px] md:text-[25px] lg:text-[35px]/[45px] font-bold text-[#008186]">
            Checkout for a discount up to 20%
          </h3>
          <Link
            to="/book"
            className="bg-[#008186] w-fit px-6 py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95 hover:bg-[#d37643]"
          >
            Checkout now
          </Link>
          <div className="absolute right-[-25px] top-[-25px]">
            <img src="./percentGreen.svg" alt="percentGreen" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SaleOnBooks;
