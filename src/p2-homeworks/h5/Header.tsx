import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.gedsamugimKanagemen}>

            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className={style.gemenonTandem}>
                <li className={style.nameMenu}><NavLink className={style.nameMenu} activeClassName={style.activeMenu} to={'/pre-junior'}>Pre junior</NavLink></li>
                <li><NavLink className={style.nameMenu} activeClassName={style.activeMenu} to={'/junior'}>Junior</NavLink></li>
                <li><NavLink className={style.nameMenu} activeClassName={style.activeMenu} to={'/junior-super'}>Super junior</NavLink></li>
            </ul>
        </div>

    )
}

export default Header
