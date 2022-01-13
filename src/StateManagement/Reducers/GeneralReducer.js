import actionTypes from '../Actions/actionTypes';
import initialStates from './initialStates';
const initialState = initialStates.GeneralReducer;

export default GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      return {
        ...state,
        cart: [
          ...state.cart,
          {...action.payload, quantity: 1}
        ]
      };
    }

    case actionTypes.UPDATE_CART: {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const __cart = [...state.cart];
        __cart[index].quantity = action.payload.quantity;

        return {
          ...state,
          cart: [
            ...__cart,
          ]
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
        ]
      };
    }

    case actionTypes.REMOVE: {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const __cart = [...state.cart];
        __cart.splice(index, 1);

        return {
          ...state,
          cart: [
            ...__cart,
          ]
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
        ]
      };
    }

    case "CLEAR": {
      return {
        ...state,
        cart: []
      };
    }

    default: {
      return state;
    }
  }
};