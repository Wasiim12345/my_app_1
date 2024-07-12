import { useMemo, useState } from "react";

function StudentUseMemo() {
    const [add, setAdd] = useState(3);
    const [sub, setSub] = useState(5);

    // function myFunc(){
    //     console.log("my function is working...");
    //     return add*2;
    // }

    const myFuncValue = useMemo(() => {
        console.log("myFunc is working...");
        return add * 2;
    }, [add])
    return (
        <>
            <h1>Example for UseMemo</h1>
            {/* <p>myFunc : {myFunc()}</p> */}
            <p>myFunc : {myFuncValue}</p>
            {console.log("render is working...")}
            <p>Add : {add}</p>
            <button onClick={() => setAdd(add + 2)}>Add</button>
            <p>Subtract : {sub}</p>
            <button onClick={() => setSub(sub - 1)}>Subtract</button>
        </>
    )
}

export default StudentUseMemo;