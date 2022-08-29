import { configureStore } from "@reduxjs/toolkit";

//reducer
import random from "./slices/random";
import movies from "./slices/movies";
import nowPlaying from "./slices/nowPlaying";
import popular from "./slices/popular";
export default configureStore({
  reducer: {
    movies: movies,
    random: random,
    nowPlaying: nowPlaying,
    popular: popular,
  },
});
