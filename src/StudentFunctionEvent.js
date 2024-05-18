function StudnetFunctionEvent() {
    function myFunc(){
        console.log("myFunc is working here");
    }
    // myFunc();  if this will be uncomment then console will be executed here and on click console will execute again
    return (
        <>
            <h2>Example of function events</h2>
            <p>example of paragraph function events.</p>
            {/* <button onClick={myFunc}>ClickMe</button> */}
            {/* <button onClick={myFunc()}>ClickMe</button> */}
            <button onClick={()=> myFunc()}>ClickMe</button>
        </>
    )
}

export default StudnetFunctionEvent;