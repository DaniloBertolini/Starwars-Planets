import { useEffect, useState } from 'react';
import DataContext from './dataContext';
import { StarWarsData } from '../type';
import { fetchPlanetsSW } from '../service/functions';

function DataProvider({ children }: { children: React.ReactNode }) {
  const [dataList, setDataList] = useState<StarWarsData[]>([]);

  useEffect(() => {
    const functionAwait = async () => {
      const fetchData = await fetchPlanetsSW();
      setDataList(fetchData);
    };
    functionAwait();
  }, []);

  return (
    <DataContext.Provider value={ { planets: dataList } }>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
