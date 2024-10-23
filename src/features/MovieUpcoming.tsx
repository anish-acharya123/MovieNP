import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type initialState = {
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

export const fetchUpcomingMovies = createAsyncThunk(
  "series/fetchLatestSeries",
  async () => {
    const response = await axios.get(
      `${baseUrl}/movie/upcoming?api_key=${apiKey}&sort_by=release_date.desc&page=1`
    );
    // console.log(response.data.results);
    return response.data.results;
  }
);

const seriesSlice = createSlice({
  name: "series",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default seriesSlice.reducer;
