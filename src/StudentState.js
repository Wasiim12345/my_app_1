function StudentState (){
    var a = 2;

    function myFunc(){
        // alert(a)
        var a = 4;
        alert(a)
    }
    return(
        <>
            <h3>Example of State in function component</h3>
            <p>var count: {a}</p>
            {/* <button onClick= {myFunc}>Submit</button> */}
            <button onClick={()=> myFunc()}>Submit</button>
        </>
    )
}

export default StudentState;