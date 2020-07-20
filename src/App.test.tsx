import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom'

test('renders learn react link', () => {
  const { getByText } = render(<BrowserRouter><Header /></BrowserRouter>);
  const linkElement = getByText(/WC/i);
  expect(linkElement).toBeInTheDocument();
});
