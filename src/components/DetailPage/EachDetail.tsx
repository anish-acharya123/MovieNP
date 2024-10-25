import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "../../apps/Store";
import { ImageComponent } from "../Small/image/ImageComponent";
import { EachMovie } from "../../features/EachMovieSlice";
import ButtonComponent from "../Small/Button/ButtonComponent";
import Heading from "../Small/Heading";
import PTag from "../Small/PTag";
import List from "../Small/List";
import EachMovieIconList from "../../constants/Iconlist";
import IconComponent from "../Small/Icon/IconComponent";

const EachDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { movie, loading, error } = useAppSelector((state) => state.eachmovie);

  useEffect(() => {
    dispatch(EachMovie(parseInt(id ?? "1034541")));
  }, [id]);

  console.log(movie, loading, error);
  console.log(movie.title);
  return (
    <div className="flex flex-row bg-gray- gap-28 py-10">
      <ImageComponent
        parentClassName={"w-1/5"}
        alt={movie.title}
        className="h-[25rem] w-[20rem]"
        poster={movie.poster_path}
      />

      <div className="flex flex-col gap-4 w-4/5">
        <p className="tracking-wide text-yellow-400">NEW EPISODES</p>
        <Heading textfirst={movie.title} highlightText="" />
        <div className="flex gap-4">
          <PTag
            label="Movies"
            className="bg-white text-black px-2 text-center"
          />
          <PTag label="HD" className="border-2 px-2" />
          <PTag label="Action, Drama, Adventure, Science fiction" />
        </div>
        <div className="bg-slate-700 p-4 opacity- w-fit gap-8 bg-gray- flex items-center  rounded-md">
          <List
            items={EachMovieIconList}
            className="flex gap-8 items-center"
            renderItem={(item) => (
              <IconComponent
                key={item.id}
                parentClass={`w-fit h-fit flex ${item.parentClass} justify-center items-center `}
                icon={item.icon}
                iconClass={item.className}
                labelFirstClass="text-[1rem] "
                labelfirst={item.label}
                iconText={item.iconText}
              />
            )}
          />
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
          <p className="text-xl">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default EachDetail;
