import { useAppSelector } from "../../apps/Store";
import SearchBox from "../../components/SearchBox";
import SkeletonRec from "../../components/skeleton";
import MovieCard from "../../ui/movies/MovieCard";
import MovieCardSection from "../../Wrappers/MovieCardSection";

const SearchPage = () => {
  const { movies, loading, error } = useAppSelector(
    (state) => state.movieSearch
  );

  console.log(error);

  return (
    <div className=" relative min-h-screen  pt-32 pb-20 space-y-6 px-">
      <h1 className="md:text-4xl text-3xl uppercase font-medium text-yellow-400 text-center">
        Search Your Favourite
      </h1>
      <section className="flex flex-col ">
        <SearchBox />
      </section>
      <section>
        <MovieCardSection>
          {loading ? (
            <SkeletonRec count={12} />
          ) : (
            <>
              {movies.map((item) => (
                <MovieCard
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  releaseDate={item.release_date}
                  posterPath={item.poster_path}
                />
              ))}
            </>
          )}
        </MovieCardSection>
      </section>
    </div>
  );
};

export default SearchPage;
