
type HeadingProps = {
  textfirst: string;
  textsecond?: string;
  highlightText?: string;
  className?: string;
};

const Heading = ({
  textfirst,
  textsecond,
  highlightText,
  className,
}: HeadingProps) => {
  return (
    <h1 className={` leading-[120%] ${className}`}>
      {textfirst}{" "}
      {highlightText && (
        <span className="text-yellow-400">{highlightText}</span>
      )}{" "}
      <br /> {textsecond}
    </h1>
  );
};

export default Heading;
