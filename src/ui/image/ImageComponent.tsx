import image from "../../assets/detail.png";

type imageProps = React.CSSProperties & {
  alt: string;
  className: string;
  poster: string;
  parentClassName?: string;
};

export const ImageComponent = ({
  alt,
  className,
  poster,
  parentClassName,
}: imageProps) => {
  return (
    <>
      <figure className={parentClassName}>
        {poster ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={alt}
            className={className}
            loading="lazy"
          />
        ) : (
          <img
            src={`${image}`}
            alt={alt}
            className={className}
            loading="lazy"
          />
        )}
      </figure>
    </>
  );
};
