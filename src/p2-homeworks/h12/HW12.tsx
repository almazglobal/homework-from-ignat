import React, {useCallback, useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./bll/store";
import {changeThemeAC, StateType, ThemesType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const dispatch = useDispatch()
    const {theme} = useSelector<AppRootState, StateType>(state => state.theme)

    // const [theme, onChangeOption] = useState(themes[2])

    const onChangeOption = useCallback((theme: ThemesType) => {
        dispatch(changeThemeAC(theme))
    }, [dispatch]);

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
