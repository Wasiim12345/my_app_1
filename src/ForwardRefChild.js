import { forwardRef } from "react";

function ForwardRefChild(props, ref) {

    console.log("props : ", props);
    console.log("ref :", ref);
    return(
        <>
            <h2>Example Forward Ref Child</h2>
            <input type="text" placeholder="enter data" ref={ref}/>
        </>
    )
}

export default forwardRef(ForwardRefChild);