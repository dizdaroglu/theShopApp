
import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import OrderReducer from './OrderReducer';

export default combineReducers({
    products: ProductReducer,
    cart: CartReducer,
    order: OrderReducer
});