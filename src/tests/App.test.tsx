import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import DataProvider from '../context/DataProvider';

test('I am your test', () => {
  render(
    <DataProvider>
      <App />
    </DataProvider>
  );
  const linkElement = screen.getByText(/Star Wars/i);
  expect(linkElement).toBeInTheDocument();
});
