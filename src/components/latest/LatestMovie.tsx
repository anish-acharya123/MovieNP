import { FC, useEffect } from "react";
import { AppDispatch } from "../../apps/Store";
import { useAppSelector } from "../../apps/Store";
import { useDispatch } from "react-redux";
import { AllMoviesSeries } from "../../features/AllMoviesSlice";
import MovieCard from "../Small/movies/MovieCard";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const LatestMovie: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(AllMoviesSeries(1));
  }, [dispatch]);

  const { movies, loading, error } = useAppSelector((state) => state.allmovies);
  const movieWithimg = movies.filter((item) => item.poster_path != null);

  return (
    <div className="py-20">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-4xl mt-4 font-medium">Latest Movies</h2>
        </div>
        <section className="flex flex-wrap justify-between gap-4">
          <div className="swiper-container w-full">
            {" "}
            <Swiper
              slidesPerView={6}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 2000 }}
              //   pagination={{ clickable: true }}
              //   navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
            >
              {movieWithimg.map((movie, index) => (
                <SwiperSlide key={index}>
                  <MovieCard
                    // title={movie.title}
                    // releaseDate={movie.release_date}
                    posterPath={movie.poster_path}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestMovie;
