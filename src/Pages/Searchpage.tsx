// // import SearchBox from "../Components/SearchBox";
// // import MovieResult from "../Components/MovieResult";
// import { useAppSelector } from "../apps/Store";

// const SearchPage = () => {
//     const { movies, loading, error } = useAppSelector(
//       (state) => state.movieSearch
//     );

//     if (loading) {
//       return <div className="text-center content-center">Loading....</div>;
//     }

//     if (error) {
//       return (
//         <div className="text-center content-center">Search Term Not found.</div>
//       );
//     }
//   return (
//     <div className="min-h-screen flex flex-col   py-32 gap-10">
//       <SearchBox />
//       <MovieResult searchmovies= {movies}/>
//     </div>
//   );
// };

// export default SearchPage;
