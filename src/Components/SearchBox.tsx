import { useState } from "react";
import { SearchMovies } from "../features/MovieSearchSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../apps/Store";
import { Icon } from "@iconify/react";

const SearchBox = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string | undefined>(undefined);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (search) {
      dispatch(SearchMovies(search));
    }
  };
  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-3xl">Search Movie Here</h1>
      <div className="flex justify-center  items-center gap-2">
        <input
          type="search"
          value={search}
          onChange={(e) => handleSearch(e)}
          className="p-2 w-[40rem] rounded-md text-black outline-none "
        />
        <button onClick={handleSubmit}>
          <button
            aria-label="search"
            className="border-2 border-yellow-400 p-1 rounded-md"
          >
            <figure>
              <Icon icon="ion:search" className="h-8 w-8" />
            </figure>
          </button>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
