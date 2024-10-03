import { useAppSelector } from "../apps/Store";
const SearchResult = () => {
  const { movies, loading, error } = useAppSelector(
    (state) => state.movieSearch
  );

  if (loading) {
    return <div className="text-center content-center">Loading....</div>;
  }

  if (error) {
    return <div className="text-center content-center">Search Term Not found.</div>;
  }


  return (
    <div className=" grid grid-cols-5 gap-4 place-items-center">
      {movies.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer border-2 border-yellow-400 flex justify-center items-center flex-col p-2"
        >
          <figure className=" overflow-hidden">
            <img src={item.Poster} alt={item.Poster} className="h-52 w-52 hover:scale-110 transition-all " />
          </figure>
          <div>
            <p className="max-w-52 text-center font-medium">{item.Title}</p>
            <p className="max-w-52 text-center">Type: {item.Type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
