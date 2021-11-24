
export type ThemesType = 'dark' | 'red' | 'some'

const initState = {
    theme: 'some' as ThemesType
};

export type StateType = typeof initState

type ActionsType = ChangeThemeActionType

export const themeReducer = (state = initState, action: ChangeThemeActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export type ChangeThemeActionType = {
    type: 'CHANGE_THEME'
    theme: ThemesType
}

export const changeThemeAC = (theme: ThemesType): ChangeThemeActionType => (
    {
        type: 'CHANGE_THEME',
        theme,
    }
)
