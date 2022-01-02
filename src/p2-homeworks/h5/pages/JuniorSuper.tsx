import React from 'react'
import HW12 from "../../h12/HW12";
import {Provider} from "react-redux";
import {store} from "../../h12/bll/store";
import HW13 from "../../h13/HW13";

function JuniorSuper() {
    return (
        <div>
            <Provider store={store}>
                <HW12/>
                <HW13/>
            </Provider>
        </div>
    )
}

export default JuniorSuper