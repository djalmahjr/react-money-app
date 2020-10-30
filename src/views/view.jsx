import React from 'react'
import Routes from '../routes'
import Navbar from '../components/Navbar'

export default props => {
    return (
        <>
            <Navbar/>
            <div className='body-site'>
                <Routes/>
            </div>
        </>
    )
}