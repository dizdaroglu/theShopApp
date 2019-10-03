import React from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import { removeFromCart } from '../../actions/cart';
import { addOrder } from '../../actions/orders';


const CartScreen = props => {
    const carTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum

            });
        }
        return transformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );
    })
    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total:  <Text style={styles.amount}>${carTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button
                    color={Colors.accent}
                    title="Order Now"
                    disabled={cartItems.length === 0}
                    onPress={() => {
                        dispatch(addOrder(cartItems, carTotalAmount))
                    }}
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData =>
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.title}
                        amount={itemData.item.sum}
                        onRemove={() => {
                            dispatch(removeFromCart(itemData.item.productId))
                        }}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10
    },
    summaryText: {
        fontFamily: Fonts.bold,
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    }
});
export default CartScreen;
