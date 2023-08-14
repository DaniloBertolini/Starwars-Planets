import { useContext, useState } from 'react';
import DataContext from '../context/dataContext';

function Form() {
  const { setFilterNumeric } = useContext(DataContext);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const handleSUbmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilterNumeric(filters);
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFilters({ ...filters, [id]: value });
  };

  return (
    <form onSubmit={ handleSUbmit }>
      <select
        id="column"
        onChange={ (e) => handleChange(e) }
        data-testid="column-filter"
        value={ filters.column }
      >
        <option value="population">population</option>
        <option value="orbital period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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

      <button type="submit" data-testid="button-filter">FILTRAR</button>
    </form>
  );
}

export default Form;
