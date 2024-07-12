import React, { createRef } from "react";

class StudentRefClass extends React.Component {

    constructor(){
        super();
        this.inputRef = createRef()
    }
    myFunc(){
        console.log("entered detail is : ", this.inputRef.current.value);
        this.inputRef.current.style.color = 'red';
        this.inputRef.current.style.backgroundColor = 'cyan';
        this.inputRef.current.focus();
    }
    render() {
        return (
            <>
                <h1>Example for react ref class</h1>
                <input type="text" placeholder="enter details" ref={this.inputRef}></input>
                <button onClick={() => this.myFunc()}>Submit</button>
            </>
        )
    }
}

export default StudentRefClass;