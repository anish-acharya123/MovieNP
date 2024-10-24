import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "../../apps/Store";
import { EachMovie } from "../../features/EachMovieSlice";
import ButtonComponent from "../Small/Button/ButtonComponent";
import Heading from "../Small/Heading";
import PTag from "../Small/PTag";
import { Icon } from "@iconify/react";
import img from "../../assets/detail.png";
import { useEffect } from "react";

const EachDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { movie, loading, error } = useAppSelector((state) => state.eachmovie);

  useEffect(() => {
    dispatch(EachMovie(parseInt(id ?? "1034541")));
  }, []);

  console.log(movie);
  return (
    <div className="flex flex-row bg-gray- gap-28 py-10">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="h-[25rem] w-[18rem]"
          loading="lazy"
        />
      </figure>
      <div className="flex flex-col gap-4 ">
        <p className="tracking-wide text-yellow-400">NEW EPISODES</p>
        <Heading textfirst="Free" highlightText="Guy," />
        <div className="flex gap-4">
          <PTag
            label="Movies"
            className="bg-white text-black px-2 text-center"
          />
          <PTag label="HD" className="border-2 px-2" />
          <PTag label="Action, Drama, Adventure, Science fiction" />
        </div>
        <div className="bg-slate-700 p-4 opacity- w-fit gap-8 bg-gray- flex items-center  rounded-md">
          <div className=" w-fit h-fit">
            <p>
              <figure>
                <Icon
                  icon="material-symbols:share-outline"
                  className="text-5xl"
                />
              </figure>
              <span className="text-[1rem] text-slate-200">Share</span>
            </p>
          </div>
          <div className=" w-fit h-fit">
            <p>
              <span className="text-[1.2rem]">Rate The Show</span>
              <figure className="text-center">
                <Icon
                  icon="material-symbols:star"
                  className="text-2xl inline "
                />{" "}
                <span className="text-xl">
                  {(Math.random() * 10).toFixed()}
                </span>
              </figure>
            </p>
          </div>
          <div>
            <ButtonComponent
              label="Play Now"
              className="flex justify-center items-center py-2 px-4 gap-2 border-2 border-yellow-400 rounded-md"
              icon="mdi:play"
              onClick={() => console.log("play btn")}
            />
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            rem molestiae atque quia consequatur quaerat. <br /> Dolorum, cumque
            distinctio cum laboriosam rem atque maiores eum vel sapiente ipsa
            tenetur? Dolorum harum nisi expedita ipsam error.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachDetail;
