import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type intialState = {
  movie: Record<string, any>;
  loading: boolean;
  error?: string;
};

const intialState: intialState = {
  movie: {},
  loading: false,
  error: undefined,
};

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

export const EachMovie = createAsyncThunk(
  "movie/eachmovies",
  async (id: Number) => {
    const response = await axios.get(
      `${baseUrl}/movie/${id}?api_key=${apiKey}&append_to_response=credits,videos,images`
    );
    return response.data;
  }
);

const EachMovieSlice = createSlice({
  name: "eachMovie",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(EachMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(EachMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(EachMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default EachMovieSlice.reducer;
