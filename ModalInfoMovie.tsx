import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'

export const ModalInfoMovie = ({modalInfoMovie, setModalInfoMovie, dataMovie}) => {

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
<Text style={{color: 'white'}} >{dataMovie.original_title}</Text>
            </View>
            </View>
            </View>
      </Modal>
  )
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
    },
    containerHeaderTextStyle: {
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: "sans-serif-medium",
      color: "rgba(3, 152, 158, 0.8)",
    },
    containerTotalPay: {
      marginVertical: "5%",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    hr: {
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignSelf: "stretch",
      width: "100%",
    },
    textStytle: {
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: "sans-serif-medium",
    },
    textBold:{
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "sans-serif-medium",                
    },
    textNormal:{
        fontSize: 15,
        fontWeight: "normal",
        fontFamily: "sans-serif-medium",                
    }, 
    textMultiLine: {
        minHeight: 64 
    },
    errorMessages: {
        fontSize: 12,
        fontWeight: "bold",
        fontFamily: "sans-serif-light",
        color: "#f94169"
      }  
  });
  