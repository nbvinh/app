import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ManB from "./ManB";
import { useDispatch, useSelector } from "react-redux";
const ManA = () => {
    const dispatch = useDispatch();
    const onColor =()=>{
        dispatch({type:'Color'})
    }
    const color = useSelector (state => state.highlight ) 
    
    return (
            <TouchableOpacity onPress={()=>onColor()}>
                <Text style={{color: color ? 'black' : 'red'}} >Color</Text>
            </TouchableOpacity>

    )
}
export default ManA;