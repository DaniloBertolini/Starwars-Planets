import { useContext } from 'react';
import DataContext from '../context/dataContext';

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
  const { planets } = useContext(DataContext);

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