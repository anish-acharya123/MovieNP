import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "../../apps/Store";
import { AllMoviesSeries } from "../../features/AllMoviesSlice";
import { useEffect, useState } from "react";
import MovieCard from "../../components/Small/movies/MovieCard";
import { Pagination } from "@mui/material";

const Movies = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error } = useAppSelector((state) => state.allmovies);
  useEffect(() => {
    dispatch(AllMoviesSeries(page));
  }, [page]);

  console.log(movies, loading, error);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,

    value: number
  ) => {
    setPage(value);
  };

  return (
    // <Box>
    <div className="py-52 relative">
      <h1 className="text-xl font-medium">Home/all-moviess</h1>
      <section className="grid grid-cols-5 gap-4">
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
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        variant="outlined"
        shape="rounded"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          // border: "2px solid white",
          "& .MuiPaginationItem-root": {
            color: "white",
            border: "2px solid white"

            // backgroundColor: "yellow"
          },
          "& .Mui-selected": {
            backgroundColor: "yellow", 
            color: "black", // Change the active number text color
          },
        }}
      />
    </div>
    // {/* </Box> */}
  );
};

export default Movies;
