import { configureStore } from "@reduxjs/toolkit";
import MovieSearch from "../features/MovieSearchSlice";
import MovieUpcoming from "../features/MovieLatestSlice";
import AllMovies from "../features/AllMoviesSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    movieSearch: MovieSearch,
    movieLatest: MovieUpcoming,
    allmovies: AllMovies,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
