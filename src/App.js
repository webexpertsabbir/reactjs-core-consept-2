import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const products = [
  {name: 'Lapto', price: '12400'},
  {name: 'Mobile', price: '14200'},
  {name: 'Ghori', price: '12400'},
  {name: 'Iphone', price: '1400'},
  {name: 't-shirt', price: '12040'}
]

function App() {
  return (
    <div className="App">



    <Persion></Persion>

      {/*       
      <Persion name="laptop"></Persion>
      {
        products.map(product => <Persion name={product.name} price={product.price}></Persion>) 
      } */}
    </div>
  );
}

function Persion(){
  // const [count, setCount] = useState(9955555);
  // const incriceCount = () => setCount(count + 1);
  // const deincriceCount = () => setCount(count - 1);

  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  }, [])
  

  return(
    <div className="product">
       <h1>User number: {users.length}</h1>
    {/* <h1>Count: {count}</h1>
    <button onClick={incriceCount}>Incrice</button>
    <button onClick={deincriceCount}>Incrice</button> */}


      {/* <h1>Name: {props.name}</h1>
      <h1>Price: {props.price}</h1> */}

       {
        users.map(user => <User name={user.name} email={user.email}></User>)
       }
    </div>
  )

       function User(porps){
        return(
          <div style={{border: '2px solid red', margin: "30px", backgroundColor: 'yellow'}}>
            <h1>User Name: {porps.name}</h1>
            <p>User Name: {porps.email}</p>
          </div>
        )
       }


}
export default App;
