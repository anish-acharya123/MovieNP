// import { useAppSelector } from "../apps/Store";
import { useState } from "react";
import ButtonComponent from "../../ui/Button/ButtonComponent";

const SearchPage = () => {
  const [search, setSearch] = useState<string |undefined>()
  return (
    <div className=" relative min-h-screen flex flex-col  items-center  py-40 gap-10 px-">
      <h1 className="text-4xl uppercase font-medium text-yellow-400 text-center">
        Search Your Favourite
      </h1>
      <form  className="space-x-10 flex items-center bg- border-2  rounded-full  px-4 py-2 sm:w-4/6 bg-[rgba(0,0,0,0.2)] backdrop-blur-xl">
        <input
          type="text"
          className="  bg-transparent focus:outline-none   text-lg w-full"
        />
        <ButtonComponent
          icon="iconamoon:search-duotone"
          // onClick={() => console.log("/search")}
          className="  md:text-3xl text-2xl"
        />
      </form>
    </div>
  );
};

export default SearchPage;
