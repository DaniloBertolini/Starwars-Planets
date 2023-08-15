import { useContext, useState } from 'react';
import DataContext from '../context/dataContext';

const newObj = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

const optionsValues = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Form() {
  const { setFilterNumeric, setDataList } = useContext(DataContext);
  const [filters, setFilters] = useState(newObj);
  const [arrayFilters, setArrayFilters] = useState<string[]>([]);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFilters({ ...filters, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilterNumeric(filters);
    setArrayFilters([
      ...arrayFilters,
      `${filters.column} ${filters.comparison} ${filters.value}`,
    ]);
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <select
          id="column"
          onChange={ (e) => handleChange(e) }
          data-testid="column-filter"
          value={ filters.column }
        >
          {optionsValues.map((value) => (
            <option key={ value } value={ value }>{value}</option>
          ))}
        </select>

        <select
          id="comparison"
          onChange={ (e) => handleChange(e) }
          data-testid="comparison-filter"
          value={ filters.comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          id="value"
          onChange={ (e) => handleChange(e) }
          type="number"
          data-testid="value-filter"
          value={ filters.value }
        />

        <button type="submit" data-testid="button-filter">Filtrar</button>
        <button
          type="button"
          onClick={ () => {
            setFilters(newObj);
            // setDataList();
          } }
        >
          Limpar
        </button>
      </form>
      <section>
        {/* {arrayFilters.map((filter) => (
          <div key={ filter }>
            <p>{ filter }</p>
          </div>
        ))} */}
      </section>
    </>
  );
}

export default Form;
