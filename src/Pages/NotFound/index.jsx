import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fcf2dc] text-center px-6">
      <h1 className="text-[120px] font-extrabold text-[#008186]">404</h1>
      <h2 className="text-3xl font-bold text-[#d37643] mb-4">
        Oops! Page not found
      </h2>
      <p className="text-[#141517] mb-8 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-[#008186] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d37643] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
