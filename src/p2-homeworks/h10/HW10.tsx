import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import styles from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    // const loading = false
    const dispatch = useDispatch()
    let loading = useSelector<AppStoreType, boolean>((state) => state.loading)

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
        // console.log('loading...')
    };

    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            <div className={styles.wrapper}>
                {loading
                    ? (
                        <div className={styles.loader}>
                            <div className={`${styles.inner} ${styles.one}`}></div>
                            <div className={`${styles.inner} ${styles.two}`}></div>
                            <div className={`${styles.inner} ${styles.three}`}></div>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
