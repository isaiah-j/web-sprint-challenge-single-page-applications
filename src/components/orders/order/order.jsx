import React from 'react'

const Order = ({name, size, special}) => {
    return(
        <div>
            <h1>{name || "Name"}</h1>
            <h1>{size || 'Size'}</h1>
            <h1>{special || 'Special'}</h1>
        </div>
    )
}

export default Order