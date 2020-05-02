import React, { useState, useEffect } from 'react';
import { Container, Order, ProductTable, Total } from './styles';
import api from '../../services/api';

import { store } from '../../store';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const token = store.getState().login.token;

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`orders?token=${token}`);
      setOrders(response.data.data);
    }
    loadData();
  }, [token]);

  const total = (order, index) => {
    const total = order.reduce(function (vl, item) {
      return vl + item.product.prices[index].price * item.amount;
    }, 0);

    return total.toFixed(2);
  };

  return (
    <Container>
      {orders.map((order) => (
        <Order key={order.id} type={order.status}>
          <li>
            <div>Order: #{order.id}</div>
            <span>
              <small>{order.status}</small>
            </span>
          </li>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>Description</th>
                <th>QTY</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <img src={item.product.image} alt={item.product.title} />
                  </td>
                  <td>
                    <strong>{item.product.title}</strong>
                    <small>{item.product.description}</small>
                    <span>€{item.product.prices[0].price}</span>
                  </td>
                  <td>
                    <div>{item.amount}</div>
                  </td>
                  <td>
                    <strong className="text-right">
                      €{item.product.prices[0].price * item.amount}
                    </strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <Total>
              <span>Total</span>
              <strong>
                €{total(order.items, 0)} | ${total(order.items, 1)}
              </strong>
            </Total>
          </footer>
        </Order>
      ))}
    </Container>
  );
}
