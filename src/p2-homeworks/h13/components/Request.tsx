import React, {useCallback, useEffect, useState} from 'react'
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {RequestAPI} from "../api/RequestAPI";

export const Request = () => {
    const [value, setValue] = useState(false)
    const [data, setData] = useState('')

    const onRequest = useCallback((value: boolean) => {
        RequestAPI.setCheckBox(value)
            .then(res => setData(res.data.errorText))
            .catch(err=> setData(err.response ? err.response.data.errorText : err.message))
    }, []);

    return (
        <div>
            <SuperCheckbox checked={value} onChangeChecked={setValue}/>
            <SuperButton onClick={() => onRequest(value)}>request</SuperButton>
            <span>{data}</span>
        </div>
    )
}