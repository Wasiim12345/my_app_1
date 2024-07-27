import React, { memo, useMemo, useState } from "react";

function StudentUseCallbackMemo() {
    
    const [add, setAdd] = useState(5);
    const [sub, setSub] = useState(10);

    function myFunc() {
        console.log("myFunc is working...");
        return add*2;
    }

    return(
        <>
            <h3>useCallback Memo example:</h3>
            <p>myFunc : {myFunc()}</p>
            {console.log("render is working...")}
            <p>Add : {add}</p>
            <button onClick={() => setAdd(add+1)}>Add</button>
            <p>Sub : {sub}</p>
            <button onClick={() => setSub(sub-1)}>Subtract</button>
        </>
    )
}

export default memo(StudentUseCallbackMemo);