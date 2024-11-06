import { FC, useEffect } from "react";
import { AppDispatch } from "../../apps/Store";
import { useAppSelector } from "../../apps/Store";
import { useDispatch } from "react-redux";
import { fetchUpcomingMovies } from "../../features/MovieUpcoming";
import MovieCard from "../../ui/movies/MovieCard";
import MovieCardSection from "../../Wrappers/MovieCardSection";

const Upcoming: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, []);
  const { movies, loading, error } = useAppSelector(
    (state) => state.movieUpcoming
  );
  const movieWithimg = movies.filter((item) => item.poster_path != null);
  console.log(loading, error);
  return (
    <div className="py-16" data-aos="fade-up" data-aos-duration="2000">
      <div className="flex flex-col gap-8  ">
        <div className="space-y-2">
          <p className="md:text-xl text-yellow-400">ONLINE STREAMING</p>
          <h2 className="lg:text-4xl md:text-3xl text-3xl font-medium">
            Upcoming Movies
          </h2>
        </div>
        <MovieCardSection>
          {movieWithimg.slice(0, 6).map((item) => (
            <MovieCard
              key={item.id}
              title={item.title}
              id={item.id}
              releaseDate={item.release_date}
              posterPath={item.poster_path}
            />
          ))}
        </MovieCardSection>
      </div>
    </div>
  );
};

export default Upcoming;
