import { combineReducers } from "redux";
import cartReducer from "./cart";
export default () => {
  return combineReducers({
    cart: cartReducer,
  });
};
