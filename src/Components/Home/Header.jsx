import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="container mx-auto px-6 pt-[100px] pb-[50px] flex flex-wrap md:flex-nowrap gap-10 justify-between items-center">
      <div>
        <h3 className="flex items-center gap-2 text-[#008186] text-[14px]">
          <TfiLayoutLineSolid className="font-bold text-xl" />
          Welcome to NovelNexus
        </h3>
        <h1 className="text-[#d37643] text-[50px]/[60px] lg:text-[70px]/[80px] font-bold mt-[40px] mb-[20px]">
          Books That Shape Your Future
          <img
            src="./books.png"
            alt="books"
            className="w-[80px] lg:w-[110px] inline ml-2"
          />
        </h1>
        <p className="text-[#7e6b5c] mb-10">
          Rhoncus in ornare eu fusce morbi amet ut est in. A urna dui urna et
          orci urna eu nam bibendum. Amet at ac blandit interdum maecenas
          praesent posuere.
        </p>
        <div className="flex gap-3">
          <Link
            to="/book"
            className="bg-[#d37643] w-fit px-6 py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95"
          >
            Buy now
          </Link>
          <Link
            to="/about"
            className="flex gap-2 items-center w-fit px-6 py-2.5 text-[#008186] font-semibold duration-300 hover:gap-3 hover:bg-white hover:opacity-75 hover:scale-95"
          >
            Read more <FaArrowRight />
          </Link>
        </div>
      </div>
      <div>
        <img src="./winwinStrategyBook.webp" alt="winwinStrategyBook" />
      </div>
    </div>
  );
};

export default Header;
