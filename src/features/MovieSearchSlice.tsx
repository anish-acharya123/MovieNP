import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface initialState {
  movies: any[];
  loading: boolean;
  error: string | undefined;
}

const initialState: initialState = {
  movies: [],
  loading: false,
  error: undefined,
};

const key = "641e1680";
const URL = "https://www.omdbapi.com";

export const SearchMovies = createAsyncThunk(
  "movies/searchMovie",
  async (query: string) => {
    const response = await axios.get(`${URL}/?apikey=${key}&s=${query}`);
    return response.data.Search;
  }
);

export const movieSearchSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SearchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(SearchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    });
    builder.addCase(SearchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default movieSearchSlice.reducer;
