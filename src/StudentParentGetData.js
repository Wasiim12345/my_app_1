import StudentChildSendData from "./StudentChildSendData";

function StudentParentGetData() {
    function myFunc(getData) {
        console.log("getting data from child :", getData);
    }
    
    return(
        <>
            <h3>Example of StudentParentGetData</h3>
            <StudentChildSendData passFunc = {myFunc} />
        </>
    )
}

export default StudentParentGetData;