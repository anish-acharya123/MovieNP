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

const apiKey = "d315b6608d6c57f8ac20bbcb9164bdcc";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchLatestSeries = createAsyncThunk(
  "series/fetchLatestSeries",
  async () => {
    const response = await axios.get(
      `${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=release_date.desc&page=1`
    );
    return response.data.results;
  }
);

const seriesSlice = createSlice({
  name: "series",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestSeries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLatestSeries.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchLatestSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default seriesSlice.reducer;
