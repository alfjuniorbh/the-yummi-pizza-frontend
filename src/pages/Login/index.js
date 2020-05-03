import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, FormControl, Row, Col } from './styles';

import Input from '../../components/Input';

import * as LoginActions from '../../store/modules/login/actions';
import showToast from '../../components/Toast';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async (data) => {
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

      //dispatch(LoginActions.addCheckoutRequest(data));
      showToast({
        type: 'success',
        message: 'Successfull(To do) ;)',
        timer: 3000,
      });
    } catch (error) {
      showToast({
        type: 'error',
        message: 'All fields are required!',
        timer: 3000,
      });
    }
  }, []);

  const handleSubmitLogin = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string().required().email('Email is required'),
          password: Yup.string().required('Passowrd is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password } = data;
        dispatch(LoginActions.signInRequest(email, password));
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
          <h1>Don't Have an Account?</h1>
          <Form onSubmit={handleSubmit}>
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
              <button type="submit">Create new account</button>
            </FormControl>
          </Form>
        </Col>

        <Col>
          <h1>I have an Account</h1>
          <Form onSubmit={handleSubmitLogin}>
            <FormControl>
              <Input name="email" type="email" label="E-mail address" />
            </FormControl>
            <FormControl>
              <Input name="password" type="password" label="Password" />
            </FormControl>
            <FormControl>
              <button type="submit">Login in</button>
            </FormControl>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
