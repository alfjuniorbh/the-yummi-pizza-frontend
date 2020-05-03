import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, FormControl, Row, Col } from './styles';

import Products from '../../components/Products';
import Input from '../../components/Input';

import * as CkecoutActions from '../../store/modules/checkout/actions';
import showToast from '../../components/Toast';

import history from '../../services/history';

export default function Checkout() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const cartSize = useSelector((state) => state.cart.length);

  if (cartSize === 0) {
    history.push('/');
  }

  const handleSubmit = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string().required().email('Email is required'),
          phonenumber: Yup.string().required('Phone number is required'),
          zipcode: Yup.string().required('Zip/Post Code is required'),
          city: Yup.string().required('City is required'),
          address: Yup.string().required('Address is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(CkecoutActions.addCheckoutRequest(data));
      } catch (error) {
        showToast({
          type: 'error',
          message: 'All fields are required!',
          timer: 3000,
        });
      }
    },
    [dispatch],
  );
  return (
    <Container>
      <Row>
        <Col>
          <Form initialData={user} onSubmit={handleSubmit}>
            <FormControl>
              <Input name="name" type="text" label="First & last name" />
            </FormControl>
            <FormControl>
              <Input name="email" type="email" label="E-mail address" />
            </FormControl>
            <Row>
              <Col>
                <FormControl>
                  <Input name="phonenumber" type="text" label="Phone number" />
                </FormControl>
              </Col>
              <Col>
                <FormControl>
                  <Input name="zipcode" type="text" label="Zip/Post Code" />
                </FormControl>
              </Col>
            </Row>
            <FormControl>
              <Input name="city" type="text" label="City" />
            </FormControl>
            <FormControl>
              <Input name="address" type="text" label="Address" />
            </FormControl>
            <FormControl>
              <button type="submit">Confirm Order</button>
            </FormControl>
          </Form>
        </Col>

        <Col>
          <Products />
        </Col>
      </Row>
    </Container>
  );
}
