import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fcf2dc] text-center px-6">
      <div className="bg-white w-[65%] h-[450px] m-auto flex flex-col gap-8 justify-center items-center">
        <img src="/404Image.svg" alt="404Image" />
        <h2 className="text-[#d37643] font-bold text-[47px]">Page Not Found</h2>
        <Link
          to="/"
          className="bg-[#d37643] text-white px-6 py-3 font-semibold hover:bg-[#d37643] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
