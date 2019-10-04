import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductOverviewScreen from '../src/screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../src/screens/shop/ProductDetailScreen';
import UserProductsScreen from '../src/screens/user/UserProductsScreen';
import EditProductScreen from '../src/screens/user/EditProductScreen';

import CartScreen from '../src/screens/shop/CartScreen';
import OrdersScreen from '../src/screens/shop/OrdersScreen';



import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const defaultNavOptions = {

    headerStyle: {
        backgroundColor: Colors.primary
    },

    headerTintColor: 'white'
}
const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig =>
            <Ionicons
                name="md-cart"
                size={23}
                color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig =>
            <Ionicons
                name="md-create"
                size={23}
                color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
});

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig =>
            <Ionicons
                name="md-create"
                size={23}
                color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})

export default createAppContainer(ShopNavigator);