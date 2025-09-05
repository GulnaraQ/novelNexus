import { Link } from "react-router-dom";

const Discount50 = () => {
  return (
    <div className="bg-[#008186] py-[100px] lg:p-[100px]">
      <div className="container mx-auto px-6 bg-[#141517] py-[50px] text-center flex flex-col gap-14 justify-center items-center">
        <h2 className="font-bold lg:w-[70%] text-3xl/[40px] lg:text-5xl/[65px] text-white ">
          Get up to 50% discount on your 1st purchase !
        </h2>
        <Link
          to="#"
          className="bg-[#d37643] w-fit px-6 py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Discount50;
