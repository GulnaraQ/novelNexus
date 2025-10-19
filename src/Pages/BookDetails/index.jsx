import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookSlider from "../../Components/BookDetails/BookSlider";
import KeyFeatures from "../../Components/BookDetails/KeyFeatures";
import FavoriteBookOffers from "../../Components/Home/FavoriteBookOffers";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/db.json")
      .then(({ data }) => {
        const foundBook = data.books.find((item) => item.id === id);
        setBook(foundBook);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!book)
    return (
      <p className="text-center py-20 text-gray-500 text-xl">Loading...</p>
    );

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-7 justify-between border-b border-[#b8b4b4]">
        <BookSlider image={book.img} />
        <div className="px-3">
          <h2 className="text-2xl lg:text-[40px] font-bold mb-4 text-[#d37643]">
            {book.name}
          </h2>
          <p className="text-[#898585] leading-relaxed">
            Libero gravida et amet pellentesque ut amet. Urna nunc sapien sit
            et. Suspendisse ac quis volutpat urna fusce sed. Sit risus mi erat
            neque. Vitae nec enim nulla a viverra sem lobortis ultricies massa.
            Adipiscing ipsum at risus at integer. In pellentesque felis in est
            lacinia. Pulvinar posuere eget duis eget mauris consectetur quis.
            Auctor vulputate vitae feugiat turpis eget.
          </p>
          <p className="text-[#d37643] text-[25px] font-bold mt-6">
            {book.discount}
          </p>
          <p className="text-[#918989] line-through my-3">{book.price}</p>
          <button className="bg-[#d37643] mt-5 px-10 py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95">
            Add to Cart
          </button>
        </div>
      </div>

      <KeyFeatures author={book.author} />
      <FavoriteBookOffers />
    </div>
  );
};

export default BookDetails;
