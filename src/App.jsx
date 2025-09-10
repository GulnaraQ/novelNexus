import Navbar from "./Components/Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Common/Footer";
import Book from "./Pages/Book";

const App = () => {
  return (
    <div className="bg-[#fcf2dc]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
