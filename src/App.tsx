import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import DataContext from './context/dataContext';

function App() {
  const { setFilterName } = useContext(DataContext);

  return (
    <div>
      <Header />
      <input
        type="text"
        onChange={ ({ target }) => setFilterName(target.value) }
      />
      <Table />
    </div>
  );
}

export default App;
