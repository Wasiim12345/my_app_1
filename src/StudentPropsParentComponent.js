import StudentGetPropsChildComponent from "./StudentGetPropsChildCompnent";

function StudentPropsParentComponent (){
    // we need to declare the variables while calling the data dynamically
    var a = 'Hello world.....';
    var b = 'React.js course....';
    return(
        <>
            <h3>Example for StudentPropsParentComponent</h3>
            {/* Props with the static date */}
            {/* <StudentGetPropsChildComponent sendProps='Hello World....'
            courseName='React.js Course'/> */}

            {/* Props with dynamic date */}
            <StudentGetPropsChildComponent sendProps={a} courseName={b}/>
        </>
    )
}

export default StudentPropsParentComponent;