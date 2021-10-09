import React from 'react'
import {checkAgeAC, homeWorkReducer, sortAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {

    const sortUp: UserType[] = [
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 0, name: 'Кот', age: 3},
    ]
    const newState = homeWorkReducer(initialState, sortAC('up'))
    expect(newState.length).toBe(6)
    expect(newState).toStrictEqual(sortUp)

})
test('sort name down', () => {

    const sortDown: UserType[] = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 1, name: 'Александр', age: 66},
    ]

    const newState = homeWorkReducer(initialState, sortAC('down'))
    expect(newState.length).toBe(4)
    expect(newState).toStrictEqual(sortDown)

})
test('check age 18', () => {

    const newState = homeWorkReducer(initialState, checkAgeAC(18))
    expect(newState.length).toBe(4)
    expect(newState.some(item  => item.age <= 18)).toBeFalsy()

})
