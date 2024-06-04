import { useEffect, useState } from "react";

function StudentLifeCycleMethod() {
    const [data,setData] = useState(0);
    console.log("StudentLifeCycleMethod is working....");
    
    // mounting phase
    /*useEffect(() => {
        console.log("useEffect is working....");
    },[]);*/

    // updating phase
    // useEffect(() => {
    //     console.log("useEffect is working....");
    // });
    /*useEffect(() => {
        console.log("useEffect is working....");
    },[data]);*/
    
    //unmounting
    useEffect(() => {
        console.log("useEffect is working....");
        //anything is fired on the component mount
        /*return{
            //anything is fired on the component unmount

        }*/
    },[data]);


    return(
        <>
            <h3>Example for the useEffect</h3>
            {
                console.log("render is working....")
            }
            <p>State Data : {data}</p>
            {/* <button onClick={() => setData(data+1)}>Submit</button> */}
            <button onClick={() => setData(data+1)}>Add</button>
            <button onClick={() => setData(data-1)}>Subtract</button>
        </>
    )
}

export default StudentLifeCycleMethod;