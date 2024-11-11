import { FC, useState } from "react";
import CompanyList from "../../constants/Companylist";
// import SkeletonRec from "../skeleton/index";

const Companylist: FC = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  const handleImageLoad = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoadedImages((prev) => [...prev, id]);
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {CompanyList.map((item) => (
        <div
          key={item.id}
          data-aos="fade-right"
          data-aos-duration={item.duration}
        >
          {/* {!loadedImages.includes(item.id) && <SkeletonRec count={4} />} */}
          <figure
            style={{
              display: loadedImages.includes(item.id) ? "block" : "none",
            }}
          >
            <img
              src={item.img}
              alt=""
              className="md:h-[15rem] md:w-full h-[10rem] "
              onLoad={() => handleImageLoad(item.id)}
            />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Companylist;
