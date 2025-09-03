import Header from "../../Home/Header";
import Counter from "../../Home/Counter";
import PopularBooks from "../../Home/PopularBooks";
import Features from "../../Home/Features";
import SaleOnBooks from "../../Home/SaleOnBooks";
import FavoriteBookOffers from "../../Home/FavoriteBookOffers";
import Authors from "../../Home/Authors";

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
    </div>
  );
};

export default Home;
