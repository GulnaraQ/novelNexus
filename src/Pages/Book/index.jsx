import Books from "../../Components/Book/Books";
import Discount50 from "../../Components/Home/Discount50";
import FrequentlyAskedQuestion from "../../Components/Home/FrequentlyAskedQuestion";

const Book = () => {
  return (
    <div>
      <Books />
      <FrequentlyAskedQuestion />
      <Discount50 />
    </div>
  );
};

export default Book;
