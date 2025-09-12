import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-6 py-[100px]">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-bold text-3xl md:text-4xl lg:text-5xl/[60px] text-center text-[#d37643] mx-auto"
      >
        We're Here to Help!
      </motion.h1>

      <div className="bg-[#008186] p-7 lg:p-15 lg:w-[85%] mt-10 mx-auto text-[#fcf2dc] grid gap-7 lg:grid-cols-[40%_57%] justify-between items-center">
        {/* left side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white text-[22px] lg:text-[25px] font-bold">
            We would love to here from you !
          </h3>

          {/* Phone */}
          <div className="flex gap-7 mt-10">
            <img src="/phoneIcon.svg" alt="phoneIcon" />
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold  lg:text-[20px]">Phone-</h4>
              <a href="tel:(926) 551-0997 x8688">
                (926) 551-0997 x8688 <br />
                275.625.5628 x1326{" "}
              </a>
            </div>
          </div>

          {/* Mail */}
          <div className="flex gap-7 mt-10">
            <img src="/mailIcon.svg" alt="mailIcon" />
            <div className="flex flex-col">
              <h4 className="font-semibold lg:text-[20px] mb-3">Mail-</h4>
              <a href="mailto:Angela_Mohr@hotmail.com">
                Angela_Mohr@hotmail.com
              </a>
              <a href="mailto:Bryan.Mitchell@yahoo.com">
                Bryan.Mitchell@yahoo.com
              </a>
            </div>
          </div>

          {/* location */}
          <div className="flex gap-7 mt-10">
            <img src="/locationIcon.svg" alt="locationIcon" />
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold lg:text-[20px]">Address-</h4>
              <a href="#">782 Harrison Avenue, East Providence 15215-4458</a>
            </div>
          </div>
        </motion.div>

        {/* right side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form className="text-gray-700 text-[15px] flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter your first name:"
                className="bg-[#fcf2dc] p-3 outline-none border-none"
              />
              <input
                type="text"
                placeholder="Enter your last name:"
                className="bg-[#fcf2dc] p-3 outline-none border-none"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your e-mail:"
              className="bg-[#fcf2dc] p-3 outline-none border-none"
            />
            <input
              type="tel"
              placeholder="Enter your phone number:"
              className="bg-[#fcf2dc] p-3 outline-none border-none"
            />
            <textarea
              placeholder="Tell us your thoughts:"
              className="bg-[#fcf2dc] p-3 outline-none border-none resize-none h-30"
            ></textarea>

            {/* düymə sağ tərəfdə */}
            <input
              type="submit"
              value="Send message"
              className="ml-auto text-center bg-[#d37643] px-6 py-2.5 text-[14px] md:text-[16px] text-white font-semibold duration-300 hover:opacity-75 hover:scale-95 cursor-pointer"
            />
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
