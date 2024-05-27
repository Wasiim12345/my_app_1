import { useState } from "react";

function StudentShowHide() {

    const [state, setState] = useState(true);
    function showHide() {
        // alert('working.....')
        setState(!state);
    }
    return(
        <>
            <h3>Example to show and hide button</h3>
            {
                state?<p>This paragraph will show/hide on button click</p>:""
            }
            {/* <button onClick={() => showHide()}>Show/Hide</button> */}
            {
                state?<button onClick={() => showHide()}>Hide</button>:
                <button onClick={() => showHide()}>Show</button>
            }
        </>
    )
}

export default StudentShowHide;