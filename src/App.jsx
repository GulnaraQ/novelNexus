import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import BookDetails from "./Pages/BookDetails";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/Common/ScrollToTop";
import BlogDetails from "./Pages/BlogDetails";
import Author from "./Pages/Author";
import AuthorDetails from "./Pages/AuthorDetails";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Book />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/author" element={<Author />} />
          <Route path="/author/:id" element={<AuthorDetails />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
