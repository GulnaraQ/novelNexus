import { motion } from "framer-motion";
import { items } from "../../Mock/data";

const Counter = () => {
  return (
    <div className="bg-[#008186]">
      <div className="container mx-auto px-6 grid gap-7 grid-cols-2 md:grid-cols-3 lg:flex justify-between py-[50px]">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex gap-5 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.3,
              ease: "easeOut",
            }}
          >
            <div>
              <img src={item.img} alt={item.text} />
            </div>
            <div>
              <h3 className="font-bold text-2xl text-[#fcf2dc]">
                {item.title}
              </h3>
              <p className="text-[#f4e5c6] mt-2">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
