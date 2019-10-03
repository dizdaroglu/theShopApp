import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';


const ProductItem = props => {
    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableNativeFeedback onPress={props.onViewDetail} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.image }} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
                            <Button color={Colors.primary} title="To Cart" onPress={props.onAddToCart} />
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 18,
        marginVertical: 2,
        fontFamily: Fonts.bold
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: Fonts.regular
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        marginHorizontal: 10
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10

    }
});

export default ProductItem;