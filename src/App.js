import React, {useState} from "react";
import {Route, Link} from 'react-router-dom'
import Form from './components/form/form'
import HomePage from './components/homepage/homepage'
import Orders from './components/orders/orders'
import axios from 'axios'



const App = () => {
  let [orders, setOrders] = useState([{name: 'pizza supreme', size: 'large', special: 'Leave beside door', toppings:['Chicken','salami', 'pepperoni']}])
  const postNewOrder = (value) => {
    axios.post('https://reqres.in/api/users', value)
    .then((res) => res.data)
    .then(val => {
      console.log(val)
      setOrders([...orders, val])
    })
    .catch(() => {
      alert('Something went terribly wrong')
    })
  
  }
  return (
    <div>
      <Route exact path='/' render={(props) => <HomePage></HomePage>}></Route>
      <Route path='/pizza' render={(props) => <Form orders={orders} setOrders={setOrders} postNewOrder={postNewOrder}></Form>}></Route>
      <Route path='/orders' render={(props) => <Orders orders={orders}></Orders>}></Route>
    </div>
  );
};
export default App;
