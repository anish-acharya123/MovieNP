type imageProps = React.CSSProperties & {
  alt: string;
  className: string;
  poster: string;
  parentClassName?: string
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
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={alt}
          className={className}
          loading="lazy"
        />
      </figure>
    </>
  );
};
