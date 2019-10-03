import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import Fonts from '../../../constants/Fonts';
import HeaderButton from '../../components/UI/HeaderButton';

import * as cartActions from '../../actions/cart';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item))
                    }}
                />
            }
        />
    )
}

ProductOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Products',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontFamily: Fonts.bold
        },
        headerLeft: <Text></Text>,
        headerRight: <HeaderButton
            style={{ marginRight: 20, }}
            Ionicons="md-cart"
            onPress={() => navData.navigation.navigate('Cart')} />
    }
}

export default ProductOverviewScreen;