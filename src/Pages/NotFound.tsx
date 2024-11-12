import Heading from "../ui/Heading";

const NotFound = () => {
  return (
    <div className="relative  flex md:py-80 py-60  justify-center items-center w-full    ">
      <Heading textfirst="404" className="lg:text-7xl  text-center  sm:text-5xl  text-4xl"  highlightText="Page Not Found"/>
    </div>
  );
};

export default NotFound;
