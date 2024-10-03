import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div className=" min-h-screen flex  justify-center items-center w-full   bg-cover bg-center ">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-7xl leading-[120%]">
          Unlimited <span className="text-yellow-400">Entertainment</span>,{" "}
          <br />
          Movies, TVs Shows, & More.
        </h1>
        <div className="flex gap-10  items-center">
          <p className="bg-white text-black px-2 text-center">Movie</p>
          <p className="border-2 px-2">HD</p>
          <p>Action, Drama</p>
        </div>
        <div>
          <button className="flex justify-center items-center py-2 px-4 gap-2 border-2 border-yellow-400 rounded-md">
            <figure>
              <Icon icon="mdi:play" />
            </figure>
            <span> Play Now</span>
          </button>
        </div>
      </div>
      {/* <div className="flex-1"></div> */}
    </div>
  );
};

export default Home;
