import React from 'react'
import { Route, Link } from 'react-router-dom'
import Order from './order/order'


const Orders = ({orders}) => {
    return (
        <div>
            {orders.map((el) => {
                let {name, size, special, toppings} = el
                return <Order name={name} size={size} special={special} toppings={toppings}></Order>
            })}
        </div>
    )
}

export default Orders