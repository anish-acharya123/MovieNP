import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "../../apps/Store";
import { AllMoviesSeries } from "../../features/AllMoviesSlice";
import { useEffect } from "react";
import MovieCard from "../../ui/movies/MovieCard";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import MovieCardSection from "../../Wrappers/MovieCardSection";
import { SkeletonRec } from "../../components/skeleton";
import { ScrollToTop } from "../../utils/scrollUtils";
import { useLocation, useNavigate } from "react-router-dom";

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page") || "1");

  const totalPages = 10;
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error } = useAppSelector((state) => state.allmovies);
  ScrollToTop();
  useEffect(() => {
    dispatch(AllMoviesSeries(page));
    ScrollToTop();
  }, [page]);

  console.log(loading, error);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,

    value: number
  ) => {
    console.log(event);
    navigate(`/movies?page=${value}`);
  };

  return (
    <div
      className="md:pt-40 pt-28 pb-20 relative space-y-10"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className=" w-full space-y-4">
        <p className="text-left text-yellow-400">
          <Link to="/" className="hover:underline hover:text-black">
            Home
          </Link>{" "}
          / {"all-movies"}
        </p>
        <h2 className="text-center md:text-4xl text-3xl sm:block  font-semibold text-yellow-400">
          {"All MOVIES"}
          'S LISTS
        </h2>
      </div>
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
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          "& .MuiPaginationItem-root": {
            color: "white",
            border: "2px solid yellow",
            "&.Mui-selected": {
              backgroundColor: "yellow !important",
              color: "black !important",
            },
          },
          "@media (max-width: 600px)": {
            "& .MuiPaginationItem-root": {
              fontSize: "0.75rem",
              minWidth: "24px",
              padding: "7px",
            },
            "& .MuiPaginationItem-previousNext": {
              fontSize: "0.75rem",
            },
          },
          "@media (max-width: 400px)": {
            "& .MuiPaginationItem-root": {
              fontSize: "0.7rem",
              minWidth: "20px",
            },
          },
        }}
      />
    </div>
  );
};

export default Movies;
