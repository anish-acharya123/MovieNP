import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  title?: string;
  releaseDate?: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  releaseDate,
  posterPath,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 border- p-2 border-yellow-400 cursor-pointer">
      <figure onClick={() => navigate("/detailpage")}>
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="h-[22rem] w-[18rem]"
          loading="lazy"
        />
      </figure>
      {title && releaseDate && (
        <div className="flex justify-between items-start">
          <p className="text-[1rem]">{title}</p>
          <p className="text-[1rem] text-yellow-400">
            {releaseDate.split("-")[0]}
          </p>
        </div>
      )}
      {title && releaseDate && (
        <div className="flex justify-between">
          <p className="border-2 px-2 w-fit text-sm">HD</p>
          <p className="px-2 w-fit text-sm">
            <span>
              <Icon
                icon="ant-design:star-filled"
                className="inline text-xl text-yellow-400"
              />
            </span>{" "}
            <span>{(Math.random() * 10).toFixed()}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
