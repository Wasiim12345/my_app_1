import React from "react";

class StudentStateClass extends React.Component{

    constructor(){
        super()
        this.state = {
            a:2,
            b:5
        }
    }
    myFunc(){
        this.setState({a:4, b:10})
    }

    render(){
        return(
            <>
                <h3>Example of useState in class component</h3>
                <p>Class State Data : {this.state.a} - {this.state.b}</p>
                <button onClick={() => this.myFunc()}>Click Me</button>
            </>
        )
    }

}

export default StudentStateClass;