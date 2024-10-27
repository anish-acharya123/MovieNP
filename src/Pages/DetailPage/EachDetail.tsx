import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "../../apps/Store";
import { ImageComponent } from "../../components/Small/image/ImageComponent";
import { EachMovie } from "../../features/EachMovieSlice";
import ButtonComponent from "../../components/Small/Button/ButtonComponent";
import Heading from "../../components/Small/Heading";
import List from "../../components/Small/List";
import EachMovieIconList from "../../constants/Iconlist";
import IconComponent from "../../components/Small/Icon/IconComponent";

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
    <div className="flex items-center sm:flex-row flex-col bg-gray- lg:gap-28 md:gap-20 gap-4 pt-10">
      <ImageComponent
        parentClassName={"lg:w-1/5 sm:w-2/5"}
        alt={movie.title}
        className="h-[25rem] w-[20rem]"
        poster={movie.poster_path}
      />

      <div className="flex flex-col gap-4 lg:w-4/5 sm:w-3/5 w-full sm:items-start items-center">
        <p className="tracking-wide text-yellow-400">NEW EPISODES</p>
        <Heading
          textfirst={movie.title}
          highlightText=""
          className="lg:text-7xl  sm:text-5xl  text-4xl"
        />
        <div className="flex sm:gap-10 gap-4  items-center md:text-[16px] text-sm">
          <p className="bg-white text-black px-2 text-center">Movies</p>
          <p className="border-2 px-2">HD</p>
          <p>Action, Drama</p>
        </div>
        <div className="bg-slate-700 p-4 opacity- sm:flex-row flex-col justify-center sm:w-fit w-fit md:gap-8 sm:gap-3 gap-4 bg-gray- flex items-center  rounded-md ">
          <List
            items={EachMovieIconList}
            className="flex md:gap-8 sm:gap-10 gap-10 items-center  "
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
          <div className="">
            <ButtonComponent
              label="Play Now"
              className="flex justify-center items-center py-2 px-2 md:px-4 gap-2 text-sm  md:text-xl  border-2 border-yellow-400 rounded-md"
              icon="mdi:play"
              onClick={() => alert("This is just a demo site. Thank you")}
            />
          </div>
        </div>
        <div>
          <p className="md:text-xl text-sm text-justify">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default EachDetail;
