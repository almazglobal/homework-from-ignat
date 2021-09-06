import React, {ChangeEvent, useState, KeyboardEvent, FocusEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (nameUser: string) => void // need to fix any
}
const ERROR_MESSAGE = 'Enter user name correct!'
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const nameUser = e.currentTarget.value.trim()
        setName(nameUser) // need to fix
        if (!nameUser) {
            setError(ERROR_MESSAGE)
            return
        }
        setError('')
    }

    const setNameCallbackEnterKey = (e: KeyboardEvent<HTMLInputElement>) => { // need to fix any
        if (e.key !== 'Enter') {
            return
        }
        addUser()
    }

    const lostFocus = (e: FocusEvent<HTMLInputElement>) => { // need to fix any
        const nameUser = e.currentTarget.value.trim()
        if (!nameUser) setError(ERROR_MESSAGE)
    }

    const addUser = () => {
        if (!name) return
        addUserCallback(name)
        alert(`Hello ${name} !`) // need to fix
        setName('')
        setError(ERROR_MESSAGE)
    }

    const totalUsers = users.length // need to fix
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setNameCallbackEnterKey={setNameCallbackEnterKey}
            lostFocus={lostFocus}
        />
    )
}

export default GreetingContainer
