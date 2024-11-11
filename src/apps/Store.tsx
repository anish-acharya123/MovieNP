import { configureStore } from "@reduxjs/toolkit";
import MovieSearch from "../features/MovieSearchSlice";
import MovieUpcoming from "../features/MovieUpcoming";
import AllMovies from "../features/AllMoviesSlice";
import EachMovie from "../features/EachMovieSlice";
import ImageReducer from "../features/BgImageSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    movieSearch: MovieSearch,
    movieUpcoming: MovieUpcoming,
    allmovies: AllMovies,
    eachmovie: EachMovie,
    image: ImageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
