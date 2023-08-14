import { Dispatch, SetStateAction, createContext } from 'react';
import { StarWarsData } from '../type';

type TypeContext = {
  planets: StarWarsData[];
  loading: boolean;
  filterName: string;
  setFilterName: (value: string) => void;
  filterNumeric: {
    column: string;
    comparison: string;
    value: number;
  };
  setFilterNumeric: Dispatch<SetStateAction<{
    column: string;
    comparison: string;
    value: number;
  }>>;
};

const DataContext = createContext({} as TypeContext);

export default DataContext;
