import React from "react";
import { fetchMovieList } from "./store/slices/movies";
import { fetchNowPlaying } from "./store/slices/nowPlaying";
import { fetchPopular } from "./store/slices/popular";

import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import { setMoviesList } from "./store/slices/movies";
import { setNowPlaying } from "./store/slices/nowPlaying";
import { ModalInfoMovie } from "./ModalInfoMovie";

const Board = (props) => {

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(fetchMovieList("upcoming"));
  //   dispatch(fetchNowPlaying("now_playing"));
  //   dispatch(fetchPopular("top_rated"));
  // }, []);

  React.useEffect(() => {
    dispatch(fetchMovieList("upcoming"));
    dispatch(fetchNowPlaying("now_playing"));
    dispatch(fetchPopular("top_rated"));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { list: movies } = useSelector((state) => state.movies);
  const { list: nowPlaying } = useSelector((state) => state.nowPlaying);
  const { list: popular } = useSelector((state) => state.popular);

  const [modalInfoMovie, setModalInfoMovie] = React.useState(false);
  const [dataMovie, setDataMovie] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);
  const [masterDataSource, setMasterDataSource] = React.useState([]);



  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemMovies = ({ item }) => (
    <>
    <TouchableOpacity 
      style={styles.container}
      onPress={() => {setModalInfoMovie(true); setDataMovie(item)}}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
        }}
        style={styles.tinyLogo}
      />
    </TouchableOpacity>
    </>
  )

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  return (

    <View>
      <ModalInfoMovie 
        modalInfoMovie={modalInfoMovie} 
        setModalInfoMovie={setModalInfoMovie} 
        dataMovie={dataMovie}
      />

      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      <Text style={{color:"white"}}  > Upcoming</Text>
      <FlatList
        data={movies}
        renderItem={ItemMovies}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
      <Text> Top Rated</Text>

      <FlatList
        data={nowPlaying}
        renderItem={ItemMovies}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
      <Text> Now Playing</Text>

      <FlatList
        data={popular}
        renderItem={ItemMovies}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
    </View>
  );
};
export default Board;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 150,
    margin: 4,
    borderRadius: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});
