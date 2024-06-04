import { useEffect } from "react";

function StudentUseEffect() {
    console.log("StudentUseEffect is working....");
    
    useEffect(() => {
        console.log("useEffect is working....");
    },[]);

    return(
        <>
            <h3>Example for the useEffect</h3>
            {
                console.log("render is working....")
            }
        </>
    )
}

export default StudentUseEffect;