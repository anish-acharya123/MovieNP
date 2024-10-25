import React from "react";
import { useNavigate } from "react-router-dom";
import { ImageComponent } from "../image/ImageComponent";
import IconComponent from "../Icon/IconComponent";

interface MovieCardProps {
  title?: string;
  releaseDate?: string;
  posterPath: string;
  id: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  releaseDate,
  posterPath,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 border- p-2 border-yellow-400 cursor-pointer">
      <div onClick={() => navigate(`/detailpage/${id}`)}>
        <ImageComponent
          alt={title || "movie"}
          className={"h-[22rem] w-[18rem]"}
          poster={posterPath}
        />
      </div>

      {title && releaseDate && (
        <div className="flex justify-between items-start">
          <p className="text-[1rem]">{title}</p>
          <p className="text-[1rem] text-yellow-400">
            {releaseDate.split("-")[0]}
          </p>
        </div>
      )}
      {title && releaseDate && (
        <ul>
          <IconComponent
            parentClass="flex justify-between flex-row-reverse"
            labelFirstClass="border-2 px-2 w-fit text-sm"
            labelfirst="HD"
            icon="ant-design:star-filled"
            iconClass="inline text-xl text-yellow-400"
            iconText={(Math.random() * 10).toFixed()}
          />
        </ul>
      )}
    </div>
  );
};

export default MovieCard;
