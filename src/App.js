import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'Pdf Reader', price:'$5.99'},
    {name:'Adobe premier', price:'$250.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            products.map(product=><li> {product.name} {product.price} </li>)
          }
        </ul>

        {
          products.map(pd=><Product product={pd}></Product>)
        }

      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product> */}
    
      </header>
    </div>
  );
}

function Users(){

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        users.map(user=> <li>{user.email}</li>)
      }
    </div>
  )
}

function Counter(){

  const [count, setCount] = useState(10);

  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props){

  const productStyle={
    border:'1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height:'200px',
    width:'400px',
    float:'left',
    margin:'20px',
    color:'black'
  }

  const {name, price} = props.product;

  return(

    <div style={productStyle}>
      <h2> {name} </h2>
      <h3> {price} </h3>
      <button>Buy Now</button>
      
    </div>

  )
}



export default App;
