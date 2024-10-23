import ButtonComponent from "../Small/Button/ButtonComponent";
import Heading from "../Small/Heading";
import PTag from "../Small/PTag";
// import image from "../../assets/homeimg.png";

const Home = () => {
  return (
    <div className="relative  flex  h-screen  justify-center items-center w-full    ">
      {/* <img
        src={image}
        alt="image"
        className="absolute top-0 opacity-30 inset-0 w-full h-full object-cover"
      /> */}

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex-1  flex flex-col gap-4    translate"
      >
        <Heading
          textfirst="Unlimited"
          highlightText="Entertainment,"
          textsecond="Movies, TVs Shows, & More."
        />
        <div className="flex gap-10  items-center">
          <PTag
            label="Movies"
            className="bg-white text-black px-2 text-center"
          />
          <PTag label="HD" className="border-2 px-2" />
          <PTag label="Action, Drama" />
        </div>
        <div>
          <ButtonComponent
            label="Play Now"
            className="flex justify-center items-center py-2 px-4 gap-2 border-2 border-yellow-400 rounded-md"
            icon="mdi:play"
            onClick={() => console.log("play btn")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
