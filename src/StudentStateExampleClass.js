import React, { useState } from 'react';

class StudentExampleClass extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            data: 0,
        };
    }
    addFunc(){
        this.setState((prevState) => ({
            data: prevState.data +1,
        }));
    }
    subtractFunc(){
        this.setState((prevState) => ({
            data: prevState.data - 1,
        }));
    }

    render() {
        return(
            <>
                <h3>StudentStateExampleClass Example</h3>
                <p>Current Data : {this.state.data}</p>
                <button onClick={() => this.addFunc()}>Add</button>
                <button onClick={() => this.subtractFunc()}>Subtract</button>
            </>
        )
    }
}

export default StudentExampleClass;