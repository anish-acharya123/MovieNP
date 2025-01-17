import { FC, useEffect } from "react";
import { AppDispatch } from "../../apps/Store";
import { useAppSelector } from "../../apps/Store";
import { useDispatch } from "react-redux";
import { AllMoviesSeries } from "../../features/AllMoviesSlice";
import MovieCard from "../../ui/movies/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { SkeletonBanner } from "../skeleton";
import MovieCardSection from "../../Wrappers/MovieCardSection";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const LatestMovie: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(AllMoviesSeries(1));
  }, [dispatch]);

  const { movies, loading, error } = useAppSelector((state) => state.allmovies);
  const movieWithimg = movies.filter((item) => item.poster_path != null);

  console.log(loading, error);
  return (
    <div className="pt-12 pb-8">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="lg:text-4xl md:text-3xl text-3xl  mt-4 font-medium">
            Latest Movies
          </h2>
        </div>
        <section className="flex flex-wrap justify-between gap-4">
          <div className="swiper-container w-full">
            {" "}
            <Swiper
              slidesPerView={6}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                380: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
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
              {loading ? (
                <MovieCardSection>
                  <SkeletonBanner count={6} />
                </MovieCardSection>
              ) : (
                <>
                  {movieWithimg.map((movie, index) => (
                    <SwiperSlide key={index}>
                      <MovieCard id={movie.id} posterPath={movie.poster_path} />
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestMovie;
