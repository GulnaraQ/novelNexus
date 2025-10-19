import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const BookBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get("/db.json")
      .then(({ data }) => {
        const foundBlog = data.blogs.find((item) => item.id === id);
        setBlog(foundBlog);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container mx-auto px-6 pt-[100px] pb-[50px] ">
      <div className="bg-[#008186] px-5 text-[#fcf2dc] flex flex-col md:flex-row justify-between lg:justify-center gap-10 mx-auto py-10">
        <div className="lg:w-[50%]">
          {
            <>
              <h4 className="flex gap-3 text-[#eee0c3] text-[14px] font-medium">
                {blog.date} <TfiLayoutLineSolid className="text-[25px]" /> 5
                Minutes
              </h4>
              <h2 className="font-bold text-[30px] md:text-[35px] lg:text-[50px]/[60px] my-5">
                {blog.title}
              </h2>
              <p className="text-[#fcf2dc]">
                Malesuada purus lacus facilisis sed egestas quis lorem dolor
                nisi. Bibendum ut vel quis risus. Orci adipiscing volutpat
                fermentum sed aliquam aliquet pellentesque in viverra. Blandit
                elementum natoque id venenatis.
              </p>
            </>
          }
        </div>

        <div className="lg:w-[30%]">
          {<img src={blog.img} alt={blog.name} />}
        </div>
      </div>
    </div>
  );
};

export default BookBlog;
