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

interface fetchParams {
  query?: string;
  sortBy?: string;
  letter?: string;
  page?: number;
}
const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

export const SearchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ query = "", page = 1 }: fetchParams) => {
    let url = "";
    if (query.length > 0) {
      url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        query
      )}&page=${page}`;
      console.log(url);
    } else {
      url = `${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=release_date.desc&page=${page}`;
    }

    const response = await axios.get(url);

    await new Promise((resolve) => setTimeout(resolve, 3000));
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
