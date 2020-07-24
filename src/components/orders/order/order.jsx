import React from 'react'

const Order = ({name, size, special, toppings}) => {
    return(
        <div>
            <h1>{name || "Name"}</h1>
            <h1>{size || 'Size'}</h1>
            <h1>{special || 'Special'}</h1>
            {toppings.map((el) => {
                return <p>{el}</p>
            })}
        </div>
    )
}

export default Order