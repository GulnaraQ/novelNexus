import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const Footer = () => {
  const { id } = useParams();
  return (
    <div className="bg-[#d37643] pt-[50px] text-white">
      <div className="container mx-auto px-6 py-[50px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 border-b-1 border-b-[#ecaf8fac] justify-between">
        <div>
          <Link to="/">
            <img src="/Footer_logo.svg" alt="logo" />
          </Link>
          <p className="mt-7 mb-10 text-[#fcf2dc]">
            Velit venenatis mauris commodo malesuada pulvinar nunc. Purus
            facilisis dolor viverra magna elementum proin ornare semper.
          </p>
          <div className="flex gap-2 mt-7 text-[27px]">
            <Link to="#" className="duration-500 hover:scale-110">
              <FaLinkedin />
            </Link>
            <Link to="#" className="duration-500 hover:scale-110">
              <FaFacebookSquare />
            </Link>
            <Link to="#" className="duration-500 hover:scale-110">
              <FaInstagramSquare />
            </Link>
            <Link to="#" className="duration-500 hover:scale-110">
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
          <div className="text-[#fcf2dc] font-medium">
            <h3 className="font-semibold text-[20px] text-white">Main page</h3>
            <ol className="mt-6 flex flex-col gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="#">FAQ page</Link>
              </li>
            </ol>
          </div>

          <div className="text-[#fcf2dc] font-medium">
            <h3 className="font-semibold text-[20px] text-white">Inner page</h3>
            <ol className="mt-6 flex flex-col gap-4">
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="#">Blog details</Link>
              </li>
            </ol>
          </div>

          <div className="text-[#fcf2dc] font-medium">
            <h3 className="font-semibold text-[20px] text-white">Inner page</h3>
            <ol className="mt-6 flex flex-col gap-4">
              <li>
                <Link to="#">Book Details</Link>
              </li>
              <li>
                <Link to="/author">Author</Link>
              </li>
              <li>
                <Link to="#">Author Details</Link>
              </li>
            </ol>
          </div>

          <div className="text-[#fcf2dc] font-medium">
            <h3 className="font-semibold text-[20px] text-white">
              Utility page
            </h3>
            <ol className="mt-6 flex flex-col gap-4">
              <li>
                <Link to="#">Style guide</Link>
              </li>
              <li>
                <Link to="#">Licenses</Link>
              </li>
              <li>
                <Link to="/NotFound">404 page</Link>
              </li>
              <li>
                <Link to="#">Password</Link>
              </li>
              <li>
                <Link to="#">Changelog</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="p-7 flex justify-center items-center">
        <p>Powered by webflow designed by webocean</p>
      </div>
    </div>
  );
};

export default Footer;
