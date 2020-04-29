import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <h1>
        <Link to="/">
          <img src={logo} alt="The Yummi Pizza" /> <span>The Yummi Pizza</span>
        </Link>
      </h1>

      <Cart to="/cart">
        <div>
          <strong>My Shopping cart</strong>
          <span>{cartSize} itens</span>
        </div>

        <MdShoppingBasket size={30} />
      </Cart>
    </Container>
  );
}
