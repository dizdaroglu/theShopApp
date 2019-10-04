import React from 'react';
import { FlatList, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import HeaderButton from '../../components/UI/HeaderButton';

import * as cartActions from '../../actions/cart';


const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title
        })
    }

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {
                        selectItemHandler(itemData.item.id, itemData.item.title)
                    }}

                >
                    <Button
                        color={Colors.primary}
                        title="View Details"
                        onPress={() => {
                            selectItemHandler(itemData.item.id, itemData.item.title)

                        }} />
                    <Button
                        color={Colors.primary}
                        title="To Cart"
                        onPress={() => {
                            dispatch(cartActions.addToCart(itemData.item))
                        }} />

                </ProductItem>
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
        headerLeft: <HeaderButton
            style={{ marginLeft: 20 }}
            Ionicons="md-menu"
            onPress={() => {
                navData.navigation.toggleDrawer()
            }} />,
        headerRight: <HeaderButton
            style={{ marginRight: 20, }}
            Ionicons="md-cart"
            onPress={() => navData.navigation.navigate('Cart')} />
    }
}

export default ProductOverviewScreen;