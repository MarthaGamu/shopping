import {
  ADD_TO_CART,
  BUY_NOW,
  ERROR,
  CLEAR_CART,
  REMOVE_FROM_CART,
  LOADING,
  SHOW_PRODUCTS,
} from "../types";
export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const buyNow = () => {
  return {
    type: BUY_NOW,
  };
};

export const error = (payload) => {
  return {
    type: ERROR,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removefromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const loading = (message = "please...") => {
  return {
    type: LOADING,
    payload: message,
  };
};

export const showProducts = () => {
  return {
    type: SHOW_PRODUCTS,
  };
};
