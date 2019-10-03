import { createStackNavigator, createAppContainer } from 'react-navigation';

import ProductOverviewScreen from '../src/screens/shop/ProductOverviewScreen';

import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(ProductsNavigator);