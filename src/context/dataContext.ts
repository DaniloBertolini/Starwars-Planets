import { createContext } from 'react';
import { StarWarsData } from '../type';

type TypeContext = {
  planets: StarWarsData[];
  loading: boolean;
  filterName: string;
  setFilterName: (value: string) => void;
};

const DataContext = createContext({} as TypeContext);

export default DataContext;
