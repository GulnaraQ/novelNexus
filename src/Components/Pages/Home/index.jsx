import Header from "../../Home/Header";
import Counter from "../../Home/Counter";
import PopularBooks from "../../Home/PopularBooks";
import Features from "../../Home/Features";
import SaleOnBooks from "../../Home/SaleOnBooks";
import FavoriteBookOffers from "../../Home/FavoriteBookOffers";
import Authors from "../../Home/Authors";
import BookCommunity from "../../Home/BookCommunity";
import FrequentlyAskedQuestion from "../../Home/FrequentlyAskedQuestion";
import Discount50 from "../../Home/Discount50";
import BlogPosts from "../../Home/BlogPosts";

const Home = () => {
  return (
    <div>
      <Header />
      <Counter />
      <PopularBooks />
      <Features />
      <SaleOnBooks />
      <FavoriteBookOffers />
      <Authors />
      <BookCommunity />
      <FrequentlyAskedQuestion />
      <Discount50 />
      <BlogPosts />
    </div>
  );
};

export default Home;
