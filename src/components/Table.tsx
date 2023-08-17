import { useContext, useEffect } from 'react';
import DataContext from '../context/dataContext';
import { tableKeys } from '../service/create';

function Table() {
  const {
    planets,
    loading,
    filterName,
    filterNumeric,
    setDataList,
    list,
    sort,
  } = useContext(DataContext);

  useEffect(() => {
    const filterNumericFunction = async () => {
      const planetsFiltered = filterNumeric.reduce((acc: any, curr: any) => {
        return acc.filter((planet: any) => {
          const { column, comparison, value } = curr;
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
      }, list).filter((planet: any) => (
        planet.name.toLowerCase().includes(filterName.toLowerCase())
      )).sort((planetA: any, planetB: any) => {
        const { column, sort: sortValue } = sort;
        const planetAValue = Number(planetA[column]);
        const planetBValue = Number(planetB[column]);

        if (!planetAValue) return 1;
        if (!planetBValue) return -1;

        return (sortValue === 'ASC'
          ? planetAValue - planetBValue
          : planetBValue - planetAValue
        );
      });

      setDataList(planetsFiltered);
    };

    filterNumericFunction();
  }, [filterNumeric, filterName, sort]);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <main>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
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
                  <td data-testid="planet-name">{ data.name }</td>
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
      )}
    </main>
  );
}

export default Table;
