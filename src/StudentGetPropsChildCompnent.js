
function StudentGetPropsChildComponent(getProps){
    
    console.log(getProps);    //it will bring the date which is isendProps
    console.log(typeof(getProps));  //it will show the type of getProps.
    console.log(getProps.sendProps);   //it will get the date from sendProps object
    console.log(getProps.courseName); //it will give the date from courseName object

    return(
        <>
            <h3>Example StudentGetPropsChildComponent</h3>
        </>
    )
}
export default StudentGetPropsChildComponent;