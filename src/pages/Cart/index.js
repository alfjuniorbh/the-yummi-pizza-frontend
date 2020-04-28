import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://api.supermacs.ie//uploads/products/228/double%20deal%201.png"
                alt="Yummi Pizza"
              />
            </td>
            <td>
              <strong>The Yummi Pizza</strong>
              <span>$100.00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#e11400" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#e11400" />
                </button>
              </div>
            </td>
            <td>
              <strong>$200.00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#e11400" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finish Order</button>

        <Total>
          <span>Total</span>
          <strong>$100.00</strong>
        </Total>
      </footer>
    </Container>
  );
}
