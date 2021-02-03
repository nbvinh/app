import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Controller from "./Controller";
const Home = () => {
  const value = useSelector(state => state.value)
  const state = useSelector(state => state)
  const [isShow,setIsshow] = useState()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Exam 1: {'\n'}APP COMPONENT </Text>
        {/* const temp = [...responseArray]
        temp[0].show =false
        dispatch({type:... ,array:temp }) */}
        <Text style={styles.value}>{value}</Text>
        {
          state?.responseArray ?
            <Text style={styles.value}>{state?.responseArray[0]?.id}</Text>
            : null
        }
      </View>
      <Controller />
    </View>
  )
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingTop: 30
  },
  header: {
    flex: 1,
  },
  appName: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 120,
  },
  value: {
    fontSize: 30,
    color: 'yellow',
    paddingTop: 20,
    textAlign: 'center'
  }

})