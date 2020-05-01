import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/The Yummi Pizza/i);
  expect(linkElement).toBeInTheDocument();
});
