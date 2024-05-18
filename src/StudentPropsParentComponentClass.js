import { Component } from "react";
import StudentGetPropsChildComponentClass from "./StudentGetPropsChildComponentClass";

class StudentPropsParentComponentClass extends Component{
    // we need to declare the variables while calling the data dynamically
    a = 'Hello world.....';
    b = 'React.js course....';
    render(){
        return(
            <>
                <h3>Example for StudentPropsParentComponentClass</h3>

                {/* Props with the static data */}
                {/* <StudentGetPropsChildComponentClass sendProps='Hello World....'
                courseName='React.js Course'/> */}
    
                {/* Props with dynamic data */}
                <StudentGetPropsChildComponentClass sendProps={this.a} courseName={this.b}/>
            </>
        )
    }
    
}

export default StudentPropsParentComponentClass;