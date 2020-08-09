import {
  ADD_TO_CART,
  BUY_NOW,
  ERROR,
  CLEAR_CART,
  REMOVE_FROM_CART,
  LOADING,
  SHOW_PRODUCTS,
} from "./types";
const reducer = (initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...initialState,
        products: [...initialState.products, action.payload],
      };
    }

    case REMOVE_FROM_CART: {
      return {
        ...initialState,
        products: initialState.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    }

    case CLEAR_CART: {
      return {
        ...initialState,
        products: [],
      };
    }

    case BUY_NOW: {
      return {
        ...initialState,
        products: [],
      };
    }

    case ERROR: {
      return {
        ...initialState,
        error: {
          isError: action.payload.isError,
          errorMessage: action.payload.errorMessage,
        },
      };
    }

    case LOADING: {
      return {
        ...initialState,
        loading: {
          isLoading: action.payload.isLoading,
          loadingMessage: action.payload.loadingMessage,
        },
      };
    }
    case SHOW_PRODUCTS: {
      return initialState;
    }
    default: {
      return initialState;
    }
  }
};

export default reducer;
/**
    initialState = {
    products: [],
    loading: {
    isLoading: false,
    loadingMessage: ""
    },
    error: {
    isError: false,
    errorMessage: ""
    },
    }
    
    
   */
