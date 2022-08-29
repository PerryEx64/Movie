import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import Board from "./Board";
import Search from "./Search";

export default function App() {
  const [breedSelection, setbreedSelection] = React.useState("");

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Board />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
