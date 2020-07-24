import React from 'react'
import { Route, Link } from 'react-router-dom'
import './homepage.styles.css'


const HomePage = () => {
    return (
        <div className='container'>
            <Link to='/pizza'>Go to pizza</Link>
        </div>
    )
}

export default HomePage