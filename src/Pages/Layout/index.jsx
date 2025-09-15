import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#fcf2dc]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
