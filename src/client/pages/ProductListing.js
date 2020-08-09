import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProduct,
  filter,
  sorting,
} from '../store/reducers/products/actionCreators';
import Product from '../../components/Product';
import axios from 'axios';
const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const req = await axios.get('http://localhost:8000/api/products');
        const { products } = await req.data;
        dispatch(fetchProduct(products));
      } catch ({ msg }) {
        console.log('[Error] FETCHING PRODUCTS', msg);
      }
    };
    fetchProducts();
  }, [dispatch]);

  const products = useSelector((state) => state.product);
  console.log('products client =>', products);
  return (
    <div>
      {products &&
        products.map((product) => (
          <div key={product._id}>
            <Product product={product} />
          </div>
        ))}
    </div>
  );
};

export default ProductListing;
