import React, {useState} from "react";
import {Route, Link} from 'react-router-dom'
import Form from './components/form/form'
import HomePage from './components/homepage/homepage'
import Orders from './components/orders/orders'
import axios from 'axios'



const App = () => {
  let [orders, setOrders] = useState([])
  const postNewOrder = (value) => {
    axios.post('https://reqres.in/api/users', value)
    .then((res) => res.data.data)
    .then((val) => {
      setOrders([...val, orders])
    })
  }
  return (
    <div>
      <Route exact path='/' render={(props) => <HomePage></HomePage>}></Route>
      <Route path='/pizza' render={(props) => <Form></Form>}></Route>
      <Route path='/orders' render={(props) => <Orders></Orders>}></Route>
    </div>
  );
};
export default App;
