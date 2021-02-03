import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ManA from "../screen/ManA";

export default App = () => {
    const dispatch = useDispatch()
    const password = useSelector(state => state.password)
    const onUp = () => {
        // password == 'Hello' ? Alert.alert('Thong bao', 'Dung roi') : Alert.alert('Thong bao', 'Sai roi')
        dispatch({ type: 'ADD_TODO', superUp: 10, array: [{ id: 1, value: 'alo' }] })
    }

    const onDown = () => {
        // dispatch({ type: 'register' })
        dispatch({ type: 'DOWN' })
    }
    const color = useSelector(state => state.highlight) ? 'black' : 'red';
    return (
        <View style={styles.controller}>
            <ManA />
            <Text style={[styles.controllerName, { color: color }]}>CONTROLLER COMPONENT</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => onUp()}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => onDown()}>
                    {/* <Text style={styles.buttonText}>{password ? password : 'ASDFJASF'}</Text> */}
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    controllerName: {
        fontSize: 20,
        marginBottom: 10
    },
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    },
})