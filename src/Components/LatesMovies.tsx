import MovieResult from "./MovieResult";
import { useAppSelector } from "../apps/Store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../apps/Store";
import { fetchLatestSeries } from "../features/MovieLatestSlice";
import { useEffect } from "react";

const LatesMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { movies, loading, error } = useAppSelector(
    (state) => state.movieLatest
  );
  useEffect(() => {
    dispatch(fetchLatestSeries());
  }, [dispatch]);

  
  if (loading) {
    return <div className="text-center content-center">Loading....</div>;
  }

  if (error) {
    return (
      <div className="text-center content-center">Search Term Not found.</div>
    );
  }

  

  return (
    <div>
      <h1 className="font-medium text-2xl">Latest Movies</h1>
      <MovieResult searchmovies={movies} />
    </div>
  );
};

export default LatesMovies;
