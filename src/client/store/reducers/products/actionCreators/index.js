import { FETCH_PRODUCTS, FILTER, SORT_BY } from '../types';

export const fetchProduct = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};
export const filter = ({ filterValue, filterProperty }) => {
  return {
    type: FILTER,
    payload: { filterValue, filterProperty },
  };
};

export const sorting = (order, sortOption) => {
  return {
    type: SORT_BY,
    payload: { order, sortOption },
  };
};
