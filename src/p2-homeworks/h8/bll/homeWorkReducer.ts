import {UserType} from "../HW8";

type SortType = 'up' | 'down'

export type SortActionType = {
    type: string
    payload: SortType
}

export type CheckAgeActionType = {
    type: string
    payload: number
}

type ActionsType = SortActionType | CheckAgeActionType

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            // need to fix
            const copyState = [...state]
            copyState.sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            if (action.payload === 'down') {
                return copyState.reverse()
            }

            return copyState
        }
        case 'CHECK-AGE': {
            // need to fix
            return state.filter(item => item.age > action.payload)
        }
        default:
            return state
    }
}

export const sortAC = (payload: SortType): SortActionType => {
    return {type: 'SORT', payload}
}

export const checkAgeAC = (payload: number): CheckAgeActionType => {
    return {type: 'CHECK-AGE', payload}
}