import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Provider } from 'react-redux'
import { createStore } from "redux";
import Home from "./src/Home";
import reducer from "./src/reducer/reducer";
const App = () => {

  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
export default App;