import { FETCH_PRODUCTS, FILTER, SORT_BY } from './types';

const reducer = (initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...initialState,
        products: action.payload,
      };
    }
    case FILTER: {
      return {
        ...initialState,
        products: initialState.products.filter((product) => {
          return product[action.payload.filterProperty].includes(
            action.payload.filterValue,
          );
        }),
      };
    }
    case SORT_BY: {
      return {
        ...initialState,
        products: initialState.sort((productA, productB) =>
          action.payload.order === 'ASC'
            ? productA[action.payload.sortOption] <
              productB[action.payload.sortOption]
            : productA[action.payload.sortOption] >
              productB[action.payload.sortOption],
        ),
      };
    }
    default: {
      return initialState;
    }
  }
};
export default reducer;
