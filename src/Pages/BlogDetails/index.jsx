import React from "react";
import BookBlog from "../../Components/BlogDetails/BookBlog";
import BlogInfo from "../../Components/BlogDetails/BlogInfo";
import Discount50 from "../../Components/Home/Discount50";

const BlogDetails = () => {
  return (
    <div>
      <BookBlog />
      <BlogInfo />
      <Discount50 />
    </div>
  );
};

export default BlogDetails;
