import { useContext, useState } from 'react';
import DataContext from '../context/dataContext';
import { newObj, optionsValuesArray, sortOptions } from '../service/create';

function Form() {
  const { filterNumeric, setFilterNumeric, setSort } = useContext(DataContext);
  const [optionsValues, setOptionsValues] = useState<string[]>(optionsValuesArray);
  const [filters, setFilters] = useState(newObj);
  const [arrayFilters, setArrayFilters] = useState<string[]>([]);
  const [sortLocal, setSortLocal] = useState(sortOptions);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFilters({ ...filters, [id]: value });
  };

  const handleSort = (e: any) => {
    const { name, value } = e.target;
    setSortLocal({ ...sortLocal, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFilterNumeric([
      ...filterNumeric,
      filters,
    ]);
    const newOptionsValues = optionsValues.filter((value) => value !== filters.column);
    setOptionsValues(newOptionsValues);
    setFilters({
      ...filters,
      column: newOptionsValues[0],
    });

    setArrayFilters([
      ...arrayFilters,
      `${filters.column} ${filters.comparison} ${filters.value}`,
    ]);
  };

  const handleRemoveFilter = (e: string) => {
    setOptionsValues([
      ...optionsValues,
      e.split(' ')[0],
    ]);
    setArrayFilters(arrayFilters.filter((filter) => filter !== e));
    setFilterNumeric([
      ...filterNumeric.filter((filter: any) => filter.column !== e.split(' ')[0]),
    ]);
  };

  const handleRemoveAllFilters = () => {
    setFilters(newObj);
    setOptionsValues(optionsValuesArray);
    setArrayFilters([]);
    setFilterNumeric([]);
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

        <button
          type="submit"
          data-testid="button-filter"
          disabled={ optionsValues.length === 0 }
        >
          Filtrar
        </button>
        <button
          type="button"
          onClick={ handleRemoveAllFilters }
          data-testid="button-remove-filters"
        >
          Remover Filtros
        </button>
      </form>

      <form>
        <select
          id="column"
          onChange={ (e) => handleSort(e) }
          data-testid="column-sort"
          value={ sortLocal.column }
          name="column"
        >
          {optionsValues.map((value) => (
            <option key={ `${value}-sort` } value={ value }>{value}</option>
          ))}
        </select>

        <label htmlFor="asc">
          Ascendente
          <input
            type="radio"
            name="sort"
            id="asc"
            data-testid="column-sort-input-asc"
            value="ASC"
            onClick={ (e) => handleSort(e) }
          />
        </label>

        <label htmlFor="desc">
          Descendente
          <input
            type="radio"
            name="sort"
            id="desc"
            data-testid="column-sort-input-desc"
            value="DESC"
            onClick={ (e) => handleSort(e) }
          />

        </label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ () => setSort(sortLocal) }
        >
          Ordenar

        </button>
      </form>

      <h2>Filtros</h2>
      <section>
        {arrayFilters.map((filter) => (
          <div data-testid="filter" key={ filter }>
            <p>{ filter }</p>
            <button
              onClick={ () => handleRemoveFilter(filter) }
            >
              X

            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Form;
