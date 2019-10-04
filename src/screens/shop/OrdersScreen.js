import React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../../components/UI/HeaderButton';
import Fonts from '../../../constants/Fonts';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);

    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <OrderItem
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                />}
        />
    )
}

OrdersScreen.navigationOptions = navData => {

    return {
        headerTitle: 'Your Orders',
        headerLeft: <HeaderButton
            style={{ marginLeft: 20 }}
            Ionicons="md-menu"
            onPress={() => {
                navData.navigation.toggleDrawer()
            }} />,
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: Fonts.bold
        },
        headerRight: <Text></Text>
    }
}
const styles = StyleSheet.create({

});
export default OrdersScreen;
