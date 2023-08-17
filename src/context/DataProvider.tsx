import { useEffect, useState } from 'react';
import DataContext from './dataContext';
import { StarWarsData } from '../type';
import { fetchPlanetsSW } from '../service/functions';
import { sortOptions } from '../service/create';

function DataProvider({ children }: { children: React.ReactNode }) {
  const [dataList, setDataList] = useState<StarWarsData[]>([]);
  const [list, setList] = useState<StarWarsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [sort, setSort] = useState(sortOptions);

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
        sort,
        setSort,
      } }
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
