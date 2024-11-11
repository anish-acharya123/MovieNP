import { lazy } from "react";
import ButtonComponent from "../../ui/Button/ButtonComponent";
// import Heading from "../../ui/Heading";

const Head = lazy(() => import("../../ui/Heading"));
const Home = () => {
  return (
    <div className="relative  flex lg:py-80 md:pt-52 pt-32 justify-center items-center w-full    ">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex-1  flex flex-col gap-4    translate"
      >
        <Head
          textfirst="Unlimited"
          highlightText="Entertainment,"
          textsecond="Movies, TVs Shows, & More."
          className="lg:text-7xl  sm:text-5xl  text-4xl"
        />
        <div className="flex gap-10  items-center md:text-[16px] text-sm">
          <p className="bg-white text-black px-2 text-center">Movies</p>
          <p className="border-2 px-2">HD</p>
          <p>Action, Drama</p>
        </div>
        <div>
          <ButtonComponent
            label="Play Now"
            className="flex justify-center items-center py-2 px-4 gap-2 border-2 border-yellow-400 rounded-md  md:px-3 md:py-2 p-2 text-sm md:text-xl   "
            icon="mdi:play"
            onClick={() => console.log("play btn")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
