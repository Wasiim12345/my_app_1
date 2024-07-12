import React, { useRef} from "react";

function StudentUseRef() {
    
    const inputRef = useRef()
    
    function myFunc(){
        console.log("entered detail is : ", inputRef.current.value);
        inputRef.current.style.color = 'red';
        inputRef.current.style.backgroundColor = 'cyan';
        inputRef.current.focus();
    }
    return (
        <>
            <h1>Example for react ref class</h1>
            <input type="text" placeholder="enter details" ref={inputRef} />
            <button onClick={() => myFunc()}>Submit</button>
        </>
    )
}

export default StudentUseRef;