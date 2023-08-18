import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';
import { mockData } from './helpers/mockData';
import DataProvider from '../context/DataProvider';
import { tableKeys, optionsValuesArray } from './helpers/array';
import userEvent from '@testing-library/user-event';

afterEach(() => {
  vi.clearAllMocks();
});

beforeEach(async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (mockData),
  });
  render(
    <DataProvider>
      <App />
    </DataProvider>
  )
  expect(global.fetch).toBeCalledTimes(1);

});

test('Verifica se existe um Titulo', () => {

  const linkElement = screen.getByText(/Star Wars/i);
  expect(linkElement).toBeInTheDocument();

});

test('Verifica se depois do loading, existe a tabela', async () => {
  const loading = await screen.findByText(/loading.../i);
  expect(loading).toBeInTheDocument();

  const table = await screen.findByRole('table')
  expect(table).toBeInTheDocument();
  expect(loading).not.toBeInTheDocument();  
  
  tableKeys.forEach((key) => {
    screen.findByRole('columnheader', {  name: key})
  })

  const input = screen.getByRole('textbox')
  userEvent.type(input, 'naboo')

  const rows = await screen.findAllByRole('row');
  expect(rows).toHaveLength(2)

  const column = screen.getByTestId('column-filter');
  const comparison = screen.getByTestId('comparison-filter');
  const value = screen.getByTestId('value-filter');
  const button = screen.getByTestId('button-filter');

  userEvent.selectOptions(column, 'population');
  userEvent.selectOptions(comparison, 'maior que');
  userEvent.clear(value)
  userEvent.type(value, '1000000');
  userEvent.click(button);

  userEvent.selectOptions(column, 'rotation_period');
  userEvent.selectOptions(comparison, 'maior que');
  userEvent.clear(value)
  userEvent.type(value, '24');
  userEvent.click(button);

  const filterPopulation = await screen.findByText(/population maior que 1000000/i)
  const filterRotation = await screen.findByText(/rotation_period maior que 24/i)

  expect(filterPopulation).toBeInTheDocument();
  expect(filterRotation).toBeInTheDocument();
})

