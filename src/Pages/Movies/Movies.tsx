import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "../../apps/Store";
import { AllMoviesSeries } from "../../features/AllMoviesSlice";
import { useEffect } from "react";
import MovieCard from "../../components/Small/movies/MovieCard";

const Movies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error } = useAppSelector((state) => state.allmovies);
  useEffect(() => {
    dispatch(AllMoviesSeries(1));
  }, []);

  console.log(movies, loading, error);
  return (
    <div  className="py-52 relative">
        <h1 className="text-xl font-medium">Home/all-moviess</h1>
      <section className="flex md:flex-  flex-wrap justify-between gap-4">
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            title={item.title}
            id={item.id}
            releaseDate={item.release_date}
            posterPath={item.poster_path}
          />
        ))}
      </section>
    </div>
  );
};

export default Movies;
