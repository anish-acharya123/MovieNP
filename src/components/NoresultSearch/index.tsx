import Heading from "../../ui/Heading";

const NoResultFound = ({ search }: { search: string | undefined }) => {
  return (
    <Heading
      textfirst="No Result Found for"
      textsecond="Search of Another Movie"
      highlightText={search}
      className="  sm:text-5xl  text-4xl text-center w-full"
    />
  );
};

export default NoResultFound;
