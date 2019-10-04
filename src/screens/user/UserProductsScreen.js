import React from 'react';
import { Text, View, Button, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import { deleteProduct } from '../../actions/products';

import HeaderButton from '../../components/UI/HeaderButton';

const UserProductsScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct', { productId: id })
    }

    const deleteHandler = (id) => {
        Alert.alert('Are you sure ?', 'Do you really want to delete this item?', [
            { text: 'No', style: 'default' },
            {
                text: 'Yes', style: 'destructive', onPress: () => {
                    dispatch(deleteProduct(id))
                }
            }
        ])
    };
    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => { }}

                >
                    <Button
                        color={Colors.primary}
                        title="Edit"
                        onPress={() => {
                            editProductHandler(itemData.item.id);
                        }} />
                    <Button
                        color={Colors.primary}
                        title="Delete"
                        onPress={deleteHandler.bind(this, itemData.item.id)} />
                </ProductItem>
            }
        />
    )
}
UserProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
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
        headerRight: <HeaderButton
            style={{ marginRight: 20, }}
            Ionicons="md-create"
            onPress={() => {
                navData.navigation.navigate('EditProduct')
            }}
        />
    }
}
export default UserProductsScreen;