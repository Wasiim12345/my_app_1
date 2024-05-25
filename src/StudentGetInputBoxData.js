function StudentGetInputBoxData () {

    function getInputFunc(getEvent){
        // console.log("getInputFunc : ", getEvent)
        console.log(getEvent.target.value);
    }
    return(
        <>
            <h2>StudentGetInputBoxData example</h2>
            <input type="text" placeholder="enter details" 
                onChange={(e) => {
                    getInputFunc(e)
                }}
            />
        </>
    )
}

export default StudentGetInputBoxData;