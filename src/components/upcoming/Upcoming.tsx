import { FC, useEffect } from "react";
import { AppDispatch } from "../../apps/Store";
import { useAppSelector } from "../../apps/Store";
import { useDispatch } from "react-redux";
import { fetchLatestSeries } from "../../features/MovieLatestSlice";
import { Icon } from "@iconify/react";

const Upcoming: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchLatestSeries());
  }, []);
  const { movies, loading, error } = useAppSelector(
    (state) => state.movieUpcoming
  );
  const movieWithimg = movies.filter((item) => item.poster_path != null);
  console.log(movieWithimg);
  return (
    <div className="py-20">
      <div className="flex flex-col gap-8  ">
        <div className="">
          <p className="text-xl text-yellow-400">ONLINE STREAMING</p>
          <h2 className="text-4xl mt-4 font-medium">Upcoming Movies</h2>
        </div>
        <section className="flex md:flex-nowrap flex-wrap justify-between gap-4">
          {movieWithimg.slice(0, 6).map((item) => (
            <div className="flex flex-col gap-2 border-2 p-2 border-yellow-400 cursor-pointer">
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt=""
                  className="h-[22rem] w-[18rem]"
                />
              </figure>
              <div className="flex justify-between items-start">
                <p className="text-[1rem]">{item.title}</p>
                <p className="text-[1rem] text-yellow-400">
                  {item.release_date.split("-")[0]}
                </p>
              </div>
              <div className=" flex justify-between">
                <p className="border-2 px-2 w-fit text-sm">HD</p>
                <p className=" px-2 w-fit text-sm">
                  <span>
                    <Icon
                      icon="ant-design:star-filled"
                      className="inline text-xl text-yellow-400"
                    />
                  </span>{" "}
                  <span className="">{(Math.random() * 10).toFixed()}</span>
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Upcoming;
