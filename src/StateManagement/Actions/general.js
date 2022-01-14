import { Alert } from 'react-native';
import actionTypes from './actionTypes';

const addToCart = (data, successCB) => {
    return async (dispatch, getState) => {
        const cartState = getState().GeneralReducer.cart;
    //    if (cartState.find(item => item.id === data.id)) {
    //         Alert.alert("Cart", "Already In Cart");
    //         return;
    //    }

       dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
       successCB();
    };
};

const updateCartItem =  data => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.UPDATE_CART, payload: data });
    };
};

const removeCartItem =  data => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.REMOVE, payload: data });
    };
};

const clearCart =  () => {
    return async (dispatch) => {
        dispatch({ type: "CLEAR" });
    };
};

const GeneralActions = {
    addToCart: addToCart,
    updateCartItem: updateCartItem,
    removeCartItem: removeCartItem,
    clearCart
};

export default GeneralActions;