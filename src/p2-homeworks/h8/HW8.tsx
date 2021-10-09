import React, {useState} from 'react'
import {checkAgeAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople : UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div className={styles.userWrapper} key={p._id}>
            <span className={styles.user}>{p.name}</span>
            <span className={styles.user}>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('down')))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkAgeAC(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}
<div className={styles.buttonWrapper}>
    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
    <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
    <div><SuperButton onClick={checkAge}>check age</SuperButton></div>
</div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
