import React from 'react'
import {useDispatch} from 'react-redux'
import {selectTab} from '../store/actions/navbar'


export default props => {
    const dispatch = useDispatch()
    return (
        <li onMouseOver={props.mouseOver} 
        onMouseOut={props.mouseOut} 
        className={props.target === props.location ? 'selected tab' : 'tab'}
        onClick={() => dispatch(selectTab(props.target))}>
            {props.children}
        </li>
    )
}