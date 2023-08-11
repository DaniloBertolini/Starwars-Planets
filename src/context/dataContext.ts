import { createContext } from 'react';
import { StarWarsData } from '../type';

type TypeContext = {
  planets: StarWarsData[];
};

const DataContext = createContext({} as TypeContext);

export default DataContext;
