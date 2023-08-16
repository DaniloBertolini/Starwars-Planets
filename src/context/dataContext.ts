import { Dispatch, SetStateAction, createContext } from 'react';
import { StarWarsData } from '../type';

type TypeContext = {
  planets: StarWarsData[];
  setDataList: Dispatch<SetStateAction<StarWarsData[]>>;
  loading: boolean;
  filterName: string;
  setFilterName: (value: string) => void;
  filterNumeric: any;
  setFilterNumeric: any;
  // setFilterNumeric: Dispatch<SetStateAction<{
  //   column: string;
  //   comparison: string;
  //   value: number;
  // }>>;
  list: StarWarsData[];
  // dataFetch: StarWarsData[];
  // setDataFetch: Dispatch<SetStateAction<StarWarsData[]>>;
};

const DataContext = createContext({} as TypeContext);

export default DataContext;
