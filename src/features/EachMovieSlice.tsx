import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "./AllMoviesSlice";

type intialState = {
  movie: object;
  loading: boolean;
  error: string | undefined;
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
      `${baseUrl}/discover/movie/${id}?api_key=${apiKey}&append_to_response=credits,videos,images`
    );
    return response.data;
  }
);

const EachMovieSlice = createSlice({
  name: "eachMovie",
  initialState: intialState,
  reducers: {},
});
