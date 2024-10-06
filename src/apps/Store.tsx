import { configureStore } from "@reduxjs/toolkit";
import MovieSearch from "../features/MovieSearchSlice";
import MovieLatest from "../features/MovieLatestSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    movieSearch: MovieSearch,
    movieLatest: MovieLatest,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
