import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type initialState = {
  movies: any[];
  loading: boolean;
  error: string | undefined;
};

const initialState: initialState = {
  movies: [],
  loading: false,
  error: undefined,
};

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

export const AllMoviesSeries = createAsyncThunk(
  "series/allMovieSeries",
  async (pageNumber: Number) => {
    const response = await axios.get(
      `${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=release_date.desc&page=${pageNumber}`
    );
    return response.data.results;
  }
);

const allMoviesSlice = createSlice({
  name: "allmovies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllMoviesSeries.pending, (state) => {
        state.loading = true;
      })
      .addCase(AllMoviesSeries.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(AllMoviesSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default allMoviesSlice.reducer;
