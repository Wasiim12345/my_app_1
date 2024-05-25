import { useState } from "react"

function StudentGetInputBoxDataButton () {
    const [data, setData] = useState()

    function getInputFunc(getEvent){
        // console.log("getInputFunc : ", getEvent)
        console.log(getEvent.target.value);
        setData(getEvent.target.value)
    }
    function myFunc() {
        console.log(data);
    }
    return(
        <>
            <h2>StudentGetInputBoxDataButton example</h2>
            <input type="text" placeholder="enter details" 
                onChange={(e) => {
                    getInputFunc(e)
                }}
            />
            <button type="submit" 
                onClick={() => {
                    myFunc()
                }}
            >Submit</button>
        </>
    )
}

export default StudentGetInputBoxDataButton;