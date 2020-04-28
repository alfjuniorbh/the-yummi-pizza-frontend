import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/logo.svg';

function Header({ cartSize, cart }) {
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

export default connect((state) => ({
  cartSize: state.cart.length,
  cart: state.cart,
}))(Header);
