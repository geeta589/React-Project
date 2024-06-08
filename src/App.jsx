import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import ProductTable from './components/ProductTable/ProductTable';

import data from './data/data'
import './App.css'

function App() {
 console.log(data);

  return (
    <>
      <FilterableProductTable products={data}/>
    </>
  )
}

export default App
