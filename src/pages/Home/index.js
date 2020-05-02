import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sunAmount, product) => {
      sunAmount[product.id] = product.amount;
      return sunAmount;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      setProducts(response.data.data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <small>{product.description}</small>
          <p>
            {product['prices'].map((price) => (
              <span key={price.id}>
                {price.symbol}
                {price.price}
              </span>
            ))}
          </p>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <FiPlus size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>

            <span>Add to cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
