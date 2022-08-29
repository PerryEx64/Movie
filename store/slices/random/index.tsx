import { createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
export const dogSlice = createSlice({
  name: "random",
  initialState: {
    list: [],
  },
  reducers: {
    setDogRandom: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setDogRandom } = dogSlice.actions;
export default dogSlice.reducer;

export const fetchDogRandom =
  () => (dispatch: (arg0: { payload: any; type: string }) => void) => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response);
        let wikiDog: any[] | AxiosResponse<any, any> = [];
        let breed = response.data.message
          .substr(30)
          .split("/")[0]
          .replace("-", " ");
        let breedSearch = breed;
        if (breed.includes(" ")) {
          breedSearch =
            breedSearch.split(" ")[1] + " " + breedSearch.split(" ")[0];
        }
        axios
          .get("https://api.thedogapi.com/v1/breeds/search?name=" + breedSearch)
          .then((resp) => {
            wikiDog = resp;
            console.log("wikiDog", wikiDog);
            let dat = {
              breed: breed,
              wiki: wikiDog.data[0],
              url: response.data.message,
            };
            console.log();
            //dispatch(setDogRandom(response.data.message));
            dispatch(setDogRandom(dat));
          });
      })
      .catch((error) => console.log(error));
  };
