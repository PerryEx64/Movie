import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const popularSlice = createSlice({
  name: "popular",
  initialState: {
    list: [],
    // now_playing: [],
    // popular: [],
    // top_rated: [],
    // upcoming: [],
  },

  reducers: {
    setPopular: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setPopular } = popularSlice.actions;

export default popularSlice.reducer;

export const fetchPopular =
  (category: string) =>
  (dispatch: (arg0: { payload: any; type: string }) => void) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=0fa312df5dd2f644b4e8b8b49a949852&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response.data.results);
        dispatch(setPopular(response.data.results));
      })
      .catch((error) => console.log(error));
  };

//
