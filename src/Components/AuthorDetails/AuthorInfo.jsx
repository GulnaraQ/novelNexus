import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const AuthorInfo = () => {
  const [author, setAuthor] = useState({});
  const { id } = useParams();
  const url = import.meta.env.VITE_BACKEND_URL + "/authors/" + id;

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setAuthor(data);
    });
  }, []);
  return (
    <div className="container mx-auto px-6 lg:w-[80%] m-auto py-[100px]">
      <div className="bg-[#008186]  grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-10">
        <div>
          <img src={author.img} alt={author.name} />
        </div>
        <div className="flex flex-col justify-between text-[#fcf2dc]">
          <div>
            <h3 className="font-bold text-[20px] md:text-[30px] lg:text-[35px]">
              {author.name}
            </h3>
            <p className="text-[#ecdec0] text-[15px] mt-2">{author.category}</p>
          </div>

          <div className="flex gap-2 mt-7 text-[22px]">
            <Link to="#">
              <FaLinkedin />
            </Link>
            <Link to="#">
              <FaFacebookSquare />
            </Link>
            <Link to="#">
              <FaInstagramSquare />
            </Link>
            <Link to="#">
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-[#898585] mt-10 flex flex-col gap-5">
        <h3 className="text-[#d37643] font-bold text-[20px] md:text-[25px]">
          About {author.name}
        </h3>
        <p>
          In porttitor placerat bibendum lorem faucibus donec consequat
          ultrices. Enim in erat nunc donec feugiat nec metus non. Viverra
          quisque leo quam amet tincidunt donec nulla magna. Accumsan ipsum
          pharetra quis ac purus nascetur imperdiet varius aliquam. Hendrerit
          quisque ipsum viverra maecenas non fringilla. Faucibus venenatis
          facilisi sapien semper at a integer neque sed. Vel nam diam etiam
          morbi. Sed dignissim cursus gravida commodo cras netus vitae egestas.
          Morbi tortor felis tortor ligula magna sed suscipit velit.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Enim in erat nunc donec feugiat nec metus non.</li>
          <li>Viverra quisque leo quam amet tincidunt donec nulla magna.</li>
          <li>
            Accumsan ipsum pharetra quis ac purus nascetur imperdiet varius
            aliquam.
          </li>
          <li>Hendrerit quisque ipsum viverra maecenas non fringilla.</li>
          <li>
            Faucibus venenatis facilisi sapien semper at a integer neque sed.
          </li>
          <li>
            Vel nam diam etiam morbi. Sed dignissim cursus gravida commodo cras
            netus vitae egestas.
          </li>
          <li>Morbi tortor felis tortor ligula magna sed suscipit velit.</li>
        </ul>

        <p>
          Faucibus venenatis facilisi sapien semper at a integer neque sed. Vel
          nam diam etiam morbi. Sed dignissim cursus gravida commodo cras netus
          vitae egestas. Morbi tortor felis tortor ligula magna sed suscipit
          velit.
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
