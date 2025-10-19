import { motion } from "framer-motion";

const MoreAbout = () => {
  return (
    <div className="container mx-auto px-6 py-[70px] lg:py-[100px]">
      <motion.h2
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-[#d37643]"
      >
        More about NovelNexus
      </motion.h2>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7 justify-between items-center lg:w-[82%] mx-auto mt-[50px] bg-[#008186] text-[#fcf2dc] px-15 py-3"
      >
        <div>
          <h3 className="font-bold text-xl md:text-3xl lg:text-4xl">
            Inspiring Story of NovelNexus
          </h3>
          <p className=" text-[#f0e0c0] mt-5">
            Non non consequat interdum sit tortor elementum semper scelerisque
            laoreet. Tempus non sed elementum urna sed vehicula auctor. Bibendum
            egestas sed enim vitae vitae proin. Sed dictum amet id massa nunc.
          </p>
        </div>
        <div className="hidden lg:flex">
          <img src="/ourStory.png" alt="ourStory" className="w-full" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7 lg:w-[82%] mx-auto">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[rgb(231,180,144)] text-[#008186] p-14"
        >
          <h4 className="font-bold text-xl md:text-[25px]">
            What is our mission & vision !
          </h4>
          <p className="my-5">
            Faucibus neque tempus faucibus tellus eget quam fames sodales
            mattis. Netus eu imperdiet imperdiet adipiscing metus.
          </p>
          <p>
            Sagittis feugiat eu cras tempus volutpat placerat. Morbi quam
            pretium fusce pellentesque. Posuere ut quis nulla commodo.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#008186] p-14"
        >
          <h4 className="text-[#fcf2dc] font-bold text-xl md:text-[25px]">
            Core values that drive our book passion.
          </h4>
          <ol className="text-[#f0e0c0] mt-5 list-disc list-inside space-y-1">
            <li>Community</li>
            <li>Quality</li>
            <li>Passion</li>
            <li>Integrity</li>
            <li>Customer Priority</li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default MoreAbout;
