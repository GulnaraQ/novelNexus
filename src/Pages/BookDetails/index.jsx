import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookSlider from "../../Components/BookDetail/BookSlider";
import KeyFeatures from "../../Components/BookDetail/KeyFeatures";
import FavoriteBookOffers from "../../Components/Home/FavoriteBookOffers";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const url = import.meta.env.VITE_BACKEND_URL + "/books/" + id;

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBook(data);
    });
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-7 justify-between border-b-1 border-[#b8b4b4]">
        <BookSlider />
        <div className="px-3">
          <h2 className="text-2xl lg:text-[40px] font-bold mb-4 text-[#d37643]">
            {book.name}
          </h2>
          <p className="text-[#898585]">
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
          <button className="bg-[#d37643] mt-5  px-10 py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95">
            Add to Card
          </button>
        </div>
      </div>

      <KeyFeatures author={book.author} />
      <FavoriteBookOffers />
    </div>
  );
};

export default BookDetails;
