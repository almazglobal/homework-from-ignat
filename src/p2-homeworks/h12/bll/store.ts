import {combineReducers, createStore} from "redux";
import {themeReducer} from "./themeReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)