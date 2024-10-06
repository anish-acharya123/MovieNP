import { useEffect } from "react";
import { useAppSelector } from "../apps/Store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../apps/Store";
import { SearchMovies } from "../features/MovieSearchSlice";

const MovieResult = ({ searchmovies }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error } = useAppSelector(
    (state) => state.movieSearch
  );

  let movie;
  if (searchmovies) {
    movie = searchmovies;
  } else {
    useEffect(() => {
      dispatch(SearchMovies());
    });
    movie = movies;
  }


  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className=" grid 2xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 place-items-center">
      {movie?.map((item) => (
        <div
          key={item.id}
          className="lg:max-h-[18rem] sm:scale-100 scale-90 max-h-[15rem] h-full cursor-pointer border-2 border-yellow-400 gap-2 flex justify-center items-center flex-col p-2"
        >
          <figure className=" overflow-hidden">
            <img
              src={`${baseUrl}${item.poster_path}`}
              alt={`${baseUrl}${item.original_title}`}
              className="h-52 lg:w-52 sm:max-w-none max-w-40  hover:scale-110 transition-all "
            />
          </figure>

          <p className="max-w-52 text-center font-medium lg:text-lg md:text-md sm:text-sm leading-3">
            {item.original_title}
          </p>
          <div className="flex justify-between  w-full">
            <span className="max-w-52 text-center text-sm"> {item.Type}</span>
            <span className="text-gray-400 text-sm">
              {item.release_date.split("-")[1]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieResult;
