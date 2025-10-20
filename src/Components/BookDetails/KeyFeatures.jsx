import { keyFeatures } from "../../Mock/data";

const KeyFeatures = ({ author }) => {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-10">
      <div>
        <h3 className="text-[#d37643] font-semibold text-[20px]">Authors:</h3>
        <div className="flex gap-3 items-center mt-5">
          <img src="/AuthorImage.png" alt="AuthorImage" className="w-[50px]" />
          <h4 className="text-[#008186]">{author}</h4>
        </div>
      </div>

      <div className="text-[#898585]">
        <h3 className="text-[#d37643] font-semibold text-[20px]">
          Key Features :
        </h3>
        <p className="my-5">
          Quis in vel donec interdum orci tortor mauris. Sit pellentesque elit
          platea posuere sed tempor nullam rutrum aliquam. Pellentesque nibh
          tincidunt pharetra vitae gravida in diam nunc. Proin leo fermentum
          ullamcorper massa aliquam commodo.
        </p>
        <ul className="list-disc list-inside space-y-1">
          {keyFeatures.map((feature, index) => {
            return <li key={index}>{feature}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default KeyFeatures;
