import { useEffect, useState } from 'react';
import DataContext from './dataContext';
import { StarWarsData } from '../type';
import { fetchPlanetsSW } from '../service/functions';

function DataProvider({ children }: { children: React.ReactNode }) {
  const [dataList, setDataList] = useState<StarWarsData[]>([]);
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
      setLoading(false);
    };
    functionAwait();
  }, []);

  return (
    <DataContext.Provider
      value={ {
        planets: dataList,
        loading,
        filterName,
        setFilterName,
        filterNumeric,
        setFilterNumeric,
      } }
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
