import { useEffect, useState } from 'react';
import DataContext from './dataContext';
import { StarWarsData } from '../type';
import { fetchPlanetsSW } from '../service/functions';

function DataProvider({ children }: { children: React.ReactNode }) {
  const [dataList, setDataList] = useState<StarWarsData[]>([]);
  const [list, setList] = useState<StarWarsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [filterNumeric, setFilterNumeric] = useState({
    column: '',
    comparison: '',
    value: 0,
  });

  useEffect(() => {
    setLoading(true);
    const functionAwait = async () => {
      const fetchData = await fetchPlanetsSW();
      setDataList(fetchData);
      setList(fetchData);
      setLoading(false);
    };
    functionAwait();
  }, []);

  // console.log(filterName);

  return (
    <DataContext.Provider
      value={ {
        setDataList,
        planets: dataList,
        loading,
        filterName,
        setFilterName,
        filterNumeric,
        setFilterNumeric,
        list,
      } }
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
