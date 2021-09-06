import React, {ChangeEvent, KeyboardEvent, FocusEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    setNameCallbackEnterKey: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lostFocus: (e: FocusEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setNameCallbackEnterKey, lostFocus} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.container}>
            <div className={s.dialogForm}>
                <input value={name}
                       onChange={setNameCallback}
                       onKeyPress={setNameCallbackEnterKey}
                       onBlur={lostFocus}
                       className="inputClass" />
                <button onClick={addUser} disabled={!name}>add</button>
                <span>{totalUsers}</span>
            </div>

            <span className={s.errorMessage}>{error}</span>

        </div>
    )
}

export default Greeting
