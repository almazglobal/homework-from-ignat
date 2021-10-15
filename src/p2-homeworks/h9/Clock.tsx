import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const clock = (date: Date): string => {

    let hoursStr: string = "", minutesStr: string = "", secondsStr: string = ""

    // let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10)
        hoursStr = "0" + String(hours);
    else hoursStr = String(hours)
    if (minutes < 10)
        minutesStr = "0" + String(minutes);
    else minutesStr = String(minutes)
    if (seconds < 10)
        secondsStr = "0" + String(seconds);
    else secondsStr = String(seconds)

    return hoursStr + ":" + minutesStr + ":" + secondsStr;

};

const formatDate = (date: Date): string => {

    let ddStr: string = "", mmStr: string = "", yyStr: string = ""

    let dd = date.getDate();
    if (dd < 10) ddStr = '0' + String(dd)
    else ddStr = String(dd)

    let mm = date.getMonth() + 1;
    if (mm < 10) mmStr = '0' + String(mm)
    else mmStr = String(mm)

    let yy = date.getFullYear() % 100;
    if (yy < 10) yyStr = '0' + String(yy)
    else yyStr = String(yy)

    return ddStr + '.' + mmStr + '.' + yyStr;
}


function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = clock(date) // fix with date
    const stringDate = formatDate(date) // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
