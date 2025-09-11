import Navbar from "./Components/Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Common/Footer";
import Book from "./Pages/Book";
import About from "./Pages/About";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <div className="bg-[#fcf2dc]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
