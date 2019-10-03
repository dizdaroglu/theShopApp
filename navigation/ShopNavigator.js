import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ProductOverviewScreen from '../src/screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../src/screens/shop/ProductDetailScreen';
import CartScreen from '../src/screens/shop/CartScreen';


import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
}, {
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Colors.primary
        },

        headerTintColor: 'white'
    }
});

export default createAppContainer(ProductsNavigator);