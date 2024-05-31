function StudentChildSendData({passFunc}) {
    // console.log("gettingProps....", getProps.passFunc);
    console.log(passFunc);
    const course = "React JS";
    // const branch = "IT Background"
    return(
        <>
            <h3>Example of StudentChildSendData</h3>
            <button onClick={() => passFunc(course)}>Send Data</button>
        </>
    )
}

export default StudentChildSendData;