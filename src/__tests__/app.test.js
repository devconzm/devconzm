import React from 'react';
import { render } from 'react-testing-library';
import App from '../App';

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('some lots of text here')).toBeInTheDocument();
});
