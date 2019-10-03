import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/Colors';


const HeaderButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Ionicons
                {...props}
                name={props.Ionicons}
                size={23}
                color="white"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

});
export default HeaderButton;
