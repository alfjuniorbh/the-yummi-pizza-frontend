import React from 'react';
import { useSelector } from 'react-redux';

import { Container, ProductTable, Total } from './styles';

export default function Products() {
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

  return (
    <Container>
      <ProductTable>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <strong>
                  {product.amount} x {product.title}
                </strong>
                <small>{product.description}</small>
              </td>
              <td className="align-right">
                <strong>€{product.subtotal}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
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
