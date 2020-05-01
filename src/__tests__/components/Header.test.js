import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

jest.mock('react-redux');

test('should be have a logo', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img').prop('src')).toEqual('logo.svg');
});

test('should be have an label', () => {
  const { getByTestId, getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(getByTestId('brand')).toContainElement(getByText('The Yummi Pizza'));
});

test('should be have 1 item on total cart', () => {
  useSelector.mockImplementation((cb) => 1);

  const { getByTestId, getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(getByTestId('total-cart')).toContainElement(
    getByText('My Shopping Cart'),
  );
  expect(getByTestId('total-cart')).toContainElement(getByText('1 itens'));
});

test('should be have an icon svg on total cart', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('svg'));
});
