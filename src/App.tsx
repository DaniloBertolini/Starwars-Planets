import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import DataContext from './context/dataContext';
import Form from './components/Form';

function App() {
  const { setFilterName } = useContext(DataContext);

  return (
    <div>
      <Header />
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target }) => setFilterName(target.value) }
      />
      <Form />
      <Table />
    </div>
  );
}

export default App;
