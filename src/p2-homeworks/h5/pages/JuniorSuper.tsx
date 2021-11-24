import React from 'react'
import HW12 from "../../h12/HW12";
import {Provider} from "react-redux";
import {store} from "../../h12/bll/store";

function JuniorSuper() {
    return (
        <div>
            <Provider store={store}>
                <HW12/>
            </Provider>
        </div>
    )
}

export default JuniorSuper