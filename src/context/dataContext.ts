import { Dispatch, SetStateAction, createContext } from 'react';
import { SortOptionsType, StarWarsData } from '../type';

type TypeContext = {
  planets: StarWarsData[];
  setDataList: Dispatch<SetStateAction<StarWarsData[]>>;
  loading: boolean;
  filterName: string;
  setFilterName: (value: string) => void;
  filterNumeric: any;
  setFilterNumeric: any;
  list: StarWarsData[];
  sort: SortOptionsType;
  setSort: Dispatch<SetStateAction<SortOptionsType>>;
};

const DataContext = createContext({} as TypeContext);

export default DataContext;
