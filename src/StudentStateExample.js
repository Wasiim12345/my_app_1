import { useState } from "react";

function StudentExample() {
    const [data, setData] = useState(0)
    function addFunc() {
        setData(data+1)
    }
    function subtractFunc() {
        setData(data-1)
    }

    return(
        <>
            <h3>Add & Subract Butto Example</h3>
            <p>Data Value: {data}</p>
            <button onClick={() => addFunc()}>Add</button>
            <button onClick={() => subtractFunc()}>Subtract</button>
        </>
    )
}

export default StudentExample;