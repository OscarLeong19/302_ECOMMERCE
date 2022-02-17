import { combineReducers } from 'redux';
import { cartReducer } from './cart/CartReducer';
import { userReducer } from './user/userReducer';
import orderReducer from './order/orderReducer';
export const reducer = combineReducers({
    cartReducer: cartReducer,
    userReducer: userReducer,
    orderReducer: orderReducer,
});
