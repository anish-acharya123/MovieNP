import { FC, useEffect } from "react";
import { AppDispatch } from "../../apps/Store";
import { useAppSelector } from "../../apps/Store";
import { useDispatch } from "react-redux";
import { fetchUpcomingMovies } from "../../features/MovieUpcoming";
import MovieCard from "../Small/movies/MovieCard";

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
    <div className="py-20" data-aos="fade-up" data-aos-duration="2000">
      <div className="flex flex-col gap-8  ">
        <div className="">
          <p className="text-xl text-yellow-400">ONLINE STREAMING</p>
          <h2 className="text-4xl mt-4 font-medium">Upcoming Movies</h2>
        </div>
        <section className="flex md:flex-nowrap flex-wrap justify-between gap-4">
          {movieWithimg.slice(0, 6).map((item) => (
            <MovieCard
              key={item.id}
              title={item.title}
              releaseDate={item.release_date}
              posterPath={item.poster_path}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Upcoming;
