import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <NavLink to={'/pre-junior'}>pre-junior</NavLink>
            <NavLink to={'/junior'}>junior</NavLink>
            <NavLink to={'/junior-super'}>junior-super</NavLink>

        </div>
    )
}

export default Header
