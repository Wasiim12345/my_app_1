import { useState } from "react";
import StudentMemoChild from "./StudentMemoChild";

function StudentMemoComponent() {

    const [add, setAdd] = useState(0);
    const [item, setItem] =useState(["item 1", "item 2"]);

    function addFunc(){
        console.log("addFunc is working...");
        setAdd(add+1)
    }
    return(
        <>
            <h1>Memo component example</h1>
            <p>data : {add}</p>
            <StudentMemoChild passItem={item}/>
            <button onClick={()=> addFunc()}>Add</button>
        </>
    )
}

export default StudentMemoComponent;