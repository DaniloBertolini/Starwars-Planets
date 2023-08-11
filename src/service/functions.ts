import { StarWarsDataFetch } from '../type';

export const fetchPlanetsSW = async () => {
  const response = await fetch('https://swapi.dev/api/planets');
  const { results } = await response.json();

  if (results) {
    return results.map((planet: StarWarsDataFetch) => {
      const { residents, ...dataPlanet } = planet;
      return dataPlanet;
    });
  }
};
