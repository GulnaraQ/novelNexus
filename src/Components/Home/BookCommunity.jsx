import { motion } from "framer-motion";

const BookCommunity = () => {
  return (
    <div className="container mx-auto px-6 py-[50px] grid grid-cols-1 md:grid-cols-2 md:justify-between lg:grid-cols-[45%_30%] items-center lg:justify-center gap-15">
      {/* Left side (text) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col gap-7"
      >
        <h2 className="text-3xl lg:text-5xl/[60px] font-bold text-[#d37643]">
          Become a Part of Our Book Enthusiasts Community!
        </h2>
        <p className="text-[#8b7463] font-medium">
          Sed ac sit accumsan sed. Mauris senectus eget in faucibus senectus
          integer tortor id a. Feugiat turpis aliquro tellus ut vitae aliquet
          facilisi.
        </p>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your E-mail..."
            className="bg-white p-2.5 text-[15px] w-[250px] outline-none border-none text-[#7c7169]"
          />
          <input
            type="submit"
            value="Subscribe"
            className="text-center bg-[#d37643] w-fit px-6 py-2.5 text-[14px] md:text-[16px] text-white font-semibold duration-300 hover:opacity-75 hover:scale-95 cursor-pointer"
          />
        </div>
        <p className="text-[#8b7463] font-medium">
          Subscribe our mail list & get inform about our latest updates !
        </p>
      </motion.div>

      {/* Right side (image with hover text) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative group w-full"
      >
        <img
          src="./bookCommunity.webp"
          alt="bookCommunity"
          className="w-full h-auto"
        />
        {/* Overlay text */}
        <div className="absolute bottom-0 m-5 bg-[#008186] opacity-0 group-hover:opacity-100 flex flex-col items-end justify-center text-center text-white p-6 transition-opacity duration-500">
          <p className="italic text-lg">
            “ This site has revolutionized my reading habits. I can’t imagine my
            book collection without ”
          </p>
          <span className="mt-3 font-semibold">James Lee</span>
        </div>
      </motion.div>
    </div>
  );
};

export default BookCommunity;
