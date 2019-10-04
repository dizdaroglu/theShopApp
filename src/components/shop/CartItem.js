import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fonts from '../../../constants/Fonts';

const CartItem = props => {
    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity}</Text>
                <Text style={styles.mainText}>{props.title}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
                {props.deletable && (
                    <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                        <Ionicons
                            name="md-trash"
                            size={23}
                            color="red"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontFamily: Fonts.regular,
        color: '#888',
        fontSize: 16,
    },
    mainText: {
        fontFamily: Fonts.bold,
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 20,
    }
});
export default CartItem;
