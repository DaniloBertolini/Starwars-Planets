import { render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';
import { mockData } from './helpers/mockData';

afterEach(() => {
  vi.clearAllMocks();
});

beforeEach(async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (mockData),
  });
  render(<App />)
  expect(global.fetch).toBeCalledTimes(1);

});

test('I am your test', () => {

  const linkElement = screen.getByText(/Star Wars/i);
  expect(linkElement).toBeInTheDocument();
});
