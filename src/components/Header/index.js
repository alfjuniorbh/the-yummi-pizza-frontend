import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  RiUserSettingsLine,
  RiShoppingBasket2Line,
  RiLogoutCircleRLine,
} from 'react-icons/ri';

import { Container, Toolbar, Cart } from './styles';
import logo from '../../assets/logo.svg';
import { signOut } from '../../store/modules/login/actions';

export default function Header() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }
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

        <button type="button" onClick={handleSignOut}>
          <RiLogoutCircleRLine size={30} color="#e11400" />
        </button>
      </Toolbar>
    </Container>
  );
}
