import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import history from './../../services/history';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const total_euro = useSelector((state) =>
    state.cart.reduce((totalSum, product) => {
      const sumTotal = totalSum + product['prices'][0].price * product.amount;
      return parseFloat(sumTotal).toFixed(2);
    }, 0),
  );

  const total_dolar = useSelector((state) =>
    state.cart.reduce((totalSum, product) => {
      const sumTotal = totalSum + product['prices'][1].price * product.amount;
      return parseFloat(sumTotal).toFixed(2);
    }, 0),
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: product['prices'][0].price * product.amount,
    })),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Description</th>
            <th>QTY</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {total_euro === 0 && (
            <tr>
              <td colSpan={5}>
                <p>
                  <BsFillExclamationTriangleFill /> No products added to cart
                </p>
              </td>
            </tr>
          )}
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <small>{product.description}</small>
                <span>€{product['prices'][1].price}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#e11400" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#e11400" />
                  </button>
                </div>
              </td>
              <td>
                <strong>€{product.subtotal.toFixed(2)}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeRequest(product.id))
                  }
                >
                  <MdDelete size={20} color="#e11400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <div>
          <button
            type="button"
            onClick={() => {
              history.push('/');
            }}
          >
            Back to shop
          </button>
          {total_euro > 0 && (
            <button
              type="button"
              onClick={() => {
                history.push('/checkout');
              }}
            >
              Checkout
            </button>
          )}
        </div>

        <Total>
          <span>Total</span>
          <strong>
            €{total_euro} | ${total_dolar}
          </strong>
        </Total>
      </footer>
    </Container>
  );
}
