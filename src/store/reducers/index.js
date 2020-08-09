import { combineReducers } from 'redux';
import cartReducer from './cart';
import productReducer from './products';
export default () => {
  return combineReducers({
    cart: cartReducer,
    products: productReducer,
  });
};
