import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    // latest: [],
    // now_playing: [],
    // popular: [],
    // top_rated: [],
    // upcoming: [],
  },

  reducers: {
    setMoviesList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;

export const fetchMovieList =
  (category: string) =>
  (dispatch: (arg0: { payload: any; type: string }) => void) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=0fa312df5dd2f644b4e8b8b49a949852&language=en-US&page=1`
      )
      .then((response) => {
        console.log(
          `https://api.themoviedb.org/3/movie/${category}?api_key=0fa312df5dd2f644b4e8b8b49a949852&language=en-US&page=1`
        );
        dispatch(setMoviesList(response.data.results));
      })
      .catch((error) => console.log(error));
  };

//
