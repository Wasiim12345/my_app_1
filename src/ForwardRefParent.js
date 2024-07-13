import { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

function ForwardRefParent() {

    // const inputRef = useRef(2);
    const inputRef = useRef(null);
    

    function myFunc(){
        console.log("obtained data is : ", inputRef);
        inputRef.current.value = 5;
        // inputRef.current = 5;
        inputRef.current.style.color = 'red';
        inputRef.current.style.backgroundColor = "lightcyan";
        inputRef.current.focus();
        
    }
    return(
        <>
            <h1>Example for Forward Ref Parent.</h1>
            <ForwardRefChild studentName="Wasim Akram" ref={inputRef}/> <br />
            {/* <input type="text" placeholder="enter details"/> */}
            <button onClick={()=> myFunc()}>Submit</button>
        </>
    )
}

export default ForwardRefParent;