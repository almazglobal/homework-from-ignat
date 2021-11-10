import React, {ChangeEvent, DetailedHTMLProps, FormEvent, InputHTMLAttributes, useState} from 'react'
import styles from './SuperDoubleRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    // onChangeRange?: (value: number) => void
    // value?: [number, number]
    value1: number
    value2: number
    onInput1: (value1: number) => void
    onInput2: (value2: number) => void
    disable: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        // onChangeRange, value,
        // min, max, step, disable, ...
        value1, value2,
        onInput1, onInput2,
        disable,
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
    let minGap = 0;
    let minActiveRange = 5
    let sliderMaxValue = 100;
    let sliderTrackStyleBackground = '';

    const [activeRange, setActiveRange] = useState(1)

    function slideOne(e: FormEvent<HTMLInputElement>) {
        onInput1(parseInt(e.currentTarget.value))
        if (value2 - parseInt(e.currentTarget.value) <= minGap) {
            onInput1(value2 - minGap);
        }
        if (value2 - parseInt(e.currentTarget.value) <= minGap + minActiveRange) {
            setActiveRange(1)
        }
    }

    function slideTwo(e: FormEvent<HTMLInputElement>) {
        onInput2(parseInt(e.currentTarget.value))
        if (parseInt(e.currentTarget.value) - value1 <= minGap) {
            onInput2(value1 + minGap);
        }
        if (parseInt(e.currentTarget.value) - value1 <= minGap + minActiveRange) {
            setActiveRange(2)
        }
    }

    function fillColor() {
        const percent1 = (value1 / sliderMaxValue) * 100;
        const percent2 = (value2 / sliderMaxValue) * 100;
        sliderTrackStyleBackground = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`
    }

    fillColor();

    return (
        <div className={`${styles.container} ${disable ? styles.disabled : ''}`}>
            <div className={styles.sliderTrack}
                 style={{background: sliderTrackStyleBackground}}></div>
            <input type="range"
                   value={value1}
                   style={{zIndex: activeRange == 1 ? 1 : 0}}
                   onInput={slideOne}
                   disabled={disable}
                   {...restProps}
            />
            <input type="range"
                   value={value2}
                   style={{zIndex: activeRange == 2 ? 1 : 0}}
                   onInput={slideTwo}
                   disabled={disable}
                   {...restProps}
            />
        </div>
    )
}

export default SuperDoubleRange
