import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { init } from '../store/actions/navbar'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoneyCheckAlt, faList } from '@fortawesome/free-solid-svg-icons'
import Tab from './Tab'
import { useLocation } from 'react-router-dom'

export default props => {

    const stateTab = useSelector(state => state.navbarReducers.navbar.selectTab)
    const dispatch = useDispatch()
    const location = useLocation().pathname

    useEffect(() => {
        dispatch(init(location))
    }, [])



    const [iconHome, setIconHome] = useState('2x')
    const [iconMoney, setIconMoney] = useState('2x')
    const [iconList, setIconList] = useState('2x')



    return (
        <nav className='navbar'>
            {/* {console.log(location,stateTab)} */}
            <ul>
                <Tab 
                    location={location}
                    target='/'
                    mouseOver={() => {
                        setIconHome('3x')
                    }}
                    mouseOut={() => {
                        setIconHome('2x')
                    }}
                    

                >
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHome} size={iconHome} />
                        <span>Home</span>
                    </Link>
                </Tab >
                <Tab 
                    location={location}
                    target='/form-balance'
                    mouseOver={() => {
                        setIconMoney('3x')
                    }}
                    mouseOut={() => {
                        setIconMoney('2x')
                    }}
                >
                    <Link to='/form-balance'>
                        <FontAwesomeIcon icon={faMoneyCheckAlt} size={iconMoney} />
                        <span>Balanço de Finanças</span>
                    </Link>
                </Tab>
                <Tab 
                    location={location}
                    target='/list-market'
                    mouseOver={() => {
                        setIconList('3x')
                    }}
                    mouseOut={() => {
                        setIconList('2x')
                    }}
                >
                    <Link to='/list-market'>
                        <FontAwesomeIcon icon={faList} size={iconList} />
                        <span>Lista Supermarcado</span>
                    </Link>
                </Tab>
            </ul>
        </nav>
    )
}

