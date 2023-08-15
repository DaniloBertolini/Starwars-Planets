import { useContext, useEffect } from 'react';
import DataContext from '../context/dataContext';
// import { StarWarsData } from '../type';

const tableKeys = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'Url',
];

function Table() {
  const {
    planets,
    loading,
    filterName,
    filterNumeric,
    setDataList,
    list,
  } = useContext(DataContext);

  // useEffect(() => {

  // }, [planets]);

  useEffect(() => {
    const planetsFiltered = list.filter((planet) => (
      planet.name.toLowerCase().includes(filterName.toLowerCase())
    ));

    setDataList(planetsFiltered);
  }, [filterName]);

  useEffect(() => {
    if (filterNumeric.column === '') return;

    const planetsFiltered = planets.filter((planet: any) => {
      const { column, comparison, value } = filterNumeric;
      const planetValue = Number(planet[column]);

      switch (comparison) {
        case 'maior que':
          return planetValue > value;
        case 'menor que':
          return planetValue < value;
        case 'igual a':
          return planetValue === Number(value);
        default:
          break;
      }
      return false;
    });

    setDataList(planetsFiltered);
  }, [filterNumeric]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <table>
      <thead>
        <tr>
          {tableKeys.map((tableKey) => {
            return <th key={ tableKey }>{tableKey}</th>;
          })}
        </tr>
      </thead>
      {planets.map((data) => {
        return (
          <tbody key={ data.name }>
            <tr>
              <td>{ data.name }</td>
              <td>{ data.rotation_period }</td>
              <td>{ data.orbital_period }</td>
              <td>{ data.diameter }</td>
              <td>{ data.climate }</td>
              <td>{ data.gravity }</td>
              <td>{ data.terrain }</td>
              <td>{ data.surface_water }</td>
              <td>{ data.population }</td>
              <td>{ data.films }</td>
              <td>{ data.created }</td>
              <td>{ data.edited }</td>
              <td>{ data.url }</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default Table;
