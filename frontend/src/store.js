
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { productDeleteReducer, productCreateReducer, productDetailsReducer, productListReducer, productUpdateReducer, } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import { userdetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer } from './reducers/orderReducers';

const initialState= {
    cart: {

        cartItems: localStorage.getItem ('cartItems') 
        ?  JSON.parse (localStorage.getItem ('cartItems')) 
        :[],
        
        shippingAddress: localStorage.getItem ('shippingAddress')
        ? JSON.parse (localStorage.getItem('shippingAddress'))
        :{},

        paymentMethod:'PayPal',
    },

    userSignin: {
        userInfo: localStorage.getItem ('userInfo')
        ? JSON.parse (localStorage.getItem('userInfo'))
        :null,
    },
};

const reducer = combineReducers ({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userSignin : userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails : userdetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    productUpdate:productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,


})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;