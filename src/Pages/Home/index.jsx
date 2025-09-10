import Header from "../../Components/Home/Header";
import Counter from "../../Components/Home/Counter";
import PopularBooks from "../../Components/Home/PopularBooks";
import Features from "../../Components/Home/Features";
import SaleOnBooks from "../../Components/Home/SaleOnBooks";
import FavoriteBookOffers from "../../Components/Home/FavoriteBookOffers";
import Authors from "../../Components/Home/Authors";
import BookCommunity from "../../Components/Home/BookCommunity";
import FrequentlyAskedQuestion from "../../Components/Home/FrequentlyAskedQuestion";
import Discount50 from "../../Components/Home/Discount50";
import BlogPosts from "../../Components/Home/BlogPosts";

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
