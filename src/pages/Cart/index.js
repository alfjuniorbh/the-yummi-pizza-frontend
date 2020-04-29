import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const total_eur = useSelector((state) =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price_eur * product.amount;
    }, 0),
  );

  const total_dol = useSelector((state) =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price_dol * product.amount;
    }, 0),
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal_eur: product.price_eur * product.amount,
      subtotal_dol: product.price_dol * product.amount,
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
          {total_eur === 0 && (
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
                <span>€{product.price_eur.toFixed(2)}</span>
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
                <strong>€{product.subtotal_eur.toFixed(2)}</strong>
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
        <button type="button">Finish Order</button>

        <Total>
          <span>Total</span>
          <strong>
            €{total_eur.toFixed(2)} | ${total_dol.toFixed(2)}
          </strong>
        </Total>
      </footer>
    </Container>
  );
}
