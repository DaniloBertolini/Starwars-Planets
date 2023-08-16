import { useEffect } from 'react';
import { fetchPlanetsSW } from '../service/functions';

// const data = fetchPlanetsSW()

// function Asd() {
//   useEffect(() => {
//     const fun = async () => {
//       const response = await fetchPlanetsSW();
//       const filters = [{
//         column: 'population',
//         comparison: 'maior que',
//         value: 0,
//       }, {
//         column: 'rotation_period',
//         comparison: 'maior que',
//         value: 23,
//       }];

//       const planetsFiltered = filters.reduce((acc, curr) => {
//         return acc.filter((planet: any) => {
//           const { column, comparison, value } = curr;
//           const planetValue = Number(planet[column]);

//           switch (comparison) {
//             case 'maior que':
//               return planetValue > value;
//             case 'menor que':
//               return planetValue < value;
//             case 'igual a':
//               return planetValue === Number(value);
//             default:
//               break;
//           }
//           return false;
//         });
//       }, response);
//       console.log(planetsFiltered);
//     };

//     fun();
//   }, []);

//   return (
//     <div>asd</div>
//   );
// }

// export default asd;
