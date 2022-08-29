import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { dateStringToYear } from './utils/functionsDateTime'

export const ModalInfoMovie = ({modalInfoMovie, setModalInfoMovie, dataMovie}) => {
    console.log("peliselect",dataMovie)
  return (
    <Modal
      animationType="slide"
      visible={modalInfoMovie}
      onRequestClose={() => {
        setModalInfoMovie(!modalInfoMovie);
      }}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <View style={styles.marginPaddingContainer}>
            <View style={styles.containerHeader}>
              <View>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  <Text style={{ fontSize: 20 }}>{dataMovie.title}</Text>
                  <Text style={{ fontSize: 13, fontStyle: "italic" }}>
                    {" "}
                    ({dataMovie.release_date ? dateStringToYear(dataMovie.release_date): "Awaiting"}){" "}
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setModalInfoMovie(!modalInfoMovie)}
              >
                <Ionicons name="ios-close" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.hr}></View>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <View
                style={{
                  width: 250,
                  height: 350,
                }}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${dataMovie.poster_path}`,
                  }}
                  style={{
                    margin: 2,
                    borderRadius: 10,
                    flex: 1,
                  }}
                />
              </View>
              <View style={{ justifyContent: "space-between" }}>
                <Text
                  style={{ color: "white", width: 150, textAlign: "center" }}
                >
                  {dataMovie.overview}
                </Text>
                <Button title="play" />
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                justifyContent: "center",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <View style={{ marginHorizontal: 10, alignItems: "center" }}>
                <Ionicons name="heart-outline" size={24} color="white" />
                <Text style={{color: "white"}}>{dataMovie.vote_count}</Text>
              </View>
              <View style={{ marginHorizontal: 10, alignItems: "center" }}>
                <Ionicons name="ios-star" size={24} color="white" />
                <Text style={{color: "white"}}>{dataMovie.vote_average}/10</Text> 
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    containerModal: {
      backgroundColor: "black",
      height: "auto",
      width: "100%",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      elevation: 10,
    },
    marginPaddingContainer: {
      flex: 0,
      paddingVertical: "5%",
      marginHorizontal: "5%",
    },
    containerHeader: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },

    containerHeaderTextStyle: {
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: "sans-serif-medium",
      color: "rgba(3, 152, 158, 0.8)",
    },
    hr: {
      borderBottomColor: "white",
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignSelf: "stretch",
      marginVertical: 20,
      width: "100%",
    },

  });
  