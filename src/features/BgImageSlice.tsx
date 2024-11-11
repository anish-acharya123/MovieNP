import { createSlice } from "@reduxjs/toolkit";
import img from "../assets/homeimg.png";

type ImageState = {
  src: string;
};
const initalState: ImageState = {
  src: img,
};

const imageSlice = createSlice({
  name: "image",
  initialState: initalState,
  reducers: {
    changeImage: (state, action) => {
      state.src = action.payload;
    },
  },
});

export const { changeImage } = imageSlice.actions;
export default imageSlice.reducer;
