import './App.css';
import Header from './components/Header';
import products from "./product.json"
import { useState,useEffect } from 'react'
import Product from './components/Product';


function App() {
  const [money, setMoney] = useState(100)  


  useEffect(() => {
  
  }, [])
  

  return (
    <>
      <Header money ={money}/>
      {products.map((product) => (
        <Product key={product.id} product={product} money={money} setMoney={setMoney}/>))
      }
    </>
  );
}

export default App;
