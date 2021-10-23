import {AppStoreType} from "./store";

type LoadingActionType = {
    type: string
    isLoading: boolean
}

export const loadingReducer = (state = false, action: LoadingActionType): boolean => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return action.isLoading
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {type: 'LOADING', isLoading}
} // fix any