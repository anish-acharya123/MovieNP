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

interface searchParams {
  query?: string;
  sortBy?: string;
}

// https://api.themoviedb.org/3/discover/movie?api_key=d315b6608d6c57f8ac20bbcb9164bdcc&sort_by=popularity.desc
const key: string = "d315b6608d6c57f8ac20bbcb9164bdcc";
const baseUrl: string = "https://api.themoviedb.org/3";

export const SearchMovies = createAsyncThunk(
  "movies/searchMovie",
  async ({ query = "", sortBy = "popularity.desc" }: searchParams) => {
    let url;

    if (query) {
      url = `${baseUrl}/search/movie?api_key=${key}&query=${encodeURIComponent(
        query
      )}`;
    } else {
      url = `${baseUrl}/discover/movie?api_key=${key}&sort_by=${sortBy}`;
    }

    console.log(url);
    const response = await axios.get(url);
    return response.data.results;
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
