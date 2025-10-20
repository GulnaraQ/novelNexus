import { blogSections } from "../../Mock/data";

const BlogInfo = () => {
  return (
    <div className="cotainer mx-auto px-6 py-[50px] lg:w-[80%] text-[#898585] flex flex-col gap-7">
      <img src="/postDetail.jpg" alt="postDetail" />

      <p>
        Arcu amet bibendum ut urna. Rutrum urna tempus praesent etiam gravida
        tristique diam. Tellus nam sit diam sem. Ut lacinia egestas amet
        aliquet. Eleifend fringilla at convallis nibh ultrices. Quis sit libero
        tincidunt adipiscing pharetra bibendum quis malesuada sed. Venenatis sed
        nulla bibendum laoreet at malesuada mauris fermentum integer. Sed eu
        odio semper risus lobortis. Amet id sit orci lobortis orci. Condimentum
        venenatis turpis vulputate elit eu nulla lectus nec quam. Interdum
        ultricies congue quisque in tincidunt. Amet placerat in consectetur
        vitae nascetur consectetur.
      </p>

      {blogSections.map(({ title, text, list, afterList }, i) => (
        <div key={i}>
          <h3 className="text-[#d37643] text-[20px] md:text-[25px] font-bold mb-3">
            {title}
          </h3>
          <p>{text}</p>

          {list && (
            <ul className="list-disc list-inside space-y-1 my-4">
              {list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}

          {afterList && <p>{afterList}</p>}
        </div>
      ))}

      <div className="p-10 bg-[#008186]">
        <p className="italic text-white text-[20px]">
          “Bedipiscing pharetra bibendum quis malesuada sed. Venenatis sed nulla
          bibendum laoreet at malesuada mauris fermentum integer. Sed eu odio
          semper risus lobortis. Amet id sit orci lobortis orci. Condimentum
          venenatis turpis vulputate elit eu nulla lectus nec quam. “
        </p>
      </div>
    </div>
  );
};

export default BlogInfo;
