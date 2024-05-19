import React from 'react'
// import { useState } from "react";

// identifying the react hooks:---->     useState
function StudentUseState() {

    const [data,setData] = React.useState(2);
    // const [a,b] = useState()    //we can anyone from above line for React Hook (useState)
    console.log(data)

    function myFunc(){
        var data = 4;
        alert(data); 
        setData(data);   
    }
    return (
        <>
            <h3>Example for the useState 'React Hooks'</h3>
            <p>var data {data}</p>
            {/* <button onClick={myFunc}>Click Me</button> */}
            <button onClick={() => myFunc()}>Click Me</button>
        </>
    )
}

export default StudentUseState;