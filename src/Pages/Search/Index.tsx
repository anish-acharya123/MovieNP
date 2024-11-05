import { useAppSelector } from "../../apps/Store";
import SearchBox from "../../components/SearchBox";

const SearchPage = () => {
  const { movies, loading, error } = useAppSelector(
    (state) => state.movieSearch
  );
  console.log(movies, loading, error);

  return (
    <div className=" relative min-h-screen   py-40 space-y-6 px-">
      <h1 className="text-4xl uppercase font-medium text-yellow-400 text-center">
        Search Your Favourite
      </h1>
      <section className="flex flex-col ">
        <SearchBox />
      </section>
      <section>
        
      </section>
    </div>
  );
};

export default SearchPage;
