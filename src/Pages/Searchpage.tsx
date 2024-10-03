import SearchBox from "../Components/SearchBox";
import SearchResult from "../Components/SearchResult";

const SearchPage = () => {
  return (
    <div className="min-h-screen flex flex-col   py-32 gap-10">
      <SearchBox />
      <SearchResult />
    </div>
  );
};

export default SearchPage;
