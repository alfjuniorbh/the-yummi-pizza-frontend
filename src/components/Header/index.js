import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiUserSettingsLine, RiShoppingBasket2Line } from 'react-icons/ri';

import { Container, Toolbar, Cart } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <h1>
        <Link to="/" data-testid="brand">
          <img src={logo} alt="The Yummi Pizza" />
          <span>The Yummi Pizza</span>
        </Link>
      </h1>

      <Toolbar>
        <Cart to="/dashboard">
          <div>
            <strong>My Orders</strong>
            <span>dashboard</span>
          </div>
          <RiUserSettingsLine size={30} />
        </Cart>

        <Cart to="/cart" data-testid="total-cart">
          <div>
            <strong>My Shopping Cart</strong>
            <span>{cartSize} itens</span>
          </div>

          <RiShoppingBasket2Line size={30} />
        </Cart>
      </Toolbar>
    </Container>
  );
}
