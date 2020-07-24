import React, {useState} from "react";
import {Route, Link} from 'react-router-dom'
import Form from './components/form/form'
import HomePage from './components/homepage/homepage'
import Orders from './components/orders/orders'




const App = () => {
  let [orders, setOrders] = useState([])
  return (
    <div>
      <Route exact path='/' render={(props) => <HomePage></HomePage>}></Route>
      <Route path='/pizza' render={(props) => <Form></Form>}></Route>
      <Route path='/orders' render={(props) => <Orders></Orders>}></Route>
    </div>
  );
};
export default App;
