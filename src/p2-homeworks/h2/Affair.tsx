import React from 'react'
import {AffairType} from "./HW2";
import style from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }// need to fix

    let priorityClass = '';
    if (props.affair.priority === 'high') priorityClass = style.status_high
    else if (props.affair.priority === 'middle') priorityClass = style.status_middle
    else if (props.affair.priority === 'low') priorityClass = style.status_low

    return (
        <div className={style.container}>
            <span className={style.title}>{props.affair.name}</span>
            <span className={`${style.status} ${priorityClass}`}> [{props.affair.priority}]</span>
            <button className={style.buttonDelete} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
