import React, { Component } from "react"

class ReactLifeCycleMethodClass extends React.Component{

    constructor(){
        super();
        console.log("constructor is working....");
        this.state = {
            count: 0
        }
    }
    /*componentDidMount(){
        console.log("componentDidMount is working....");
    } */
    /*componentDidUpdate() {
        console.log("componentDidUpdate is working....");
    }*/
    /*componentDidUpdate() {
        if(this.state.count>5){
            console.log("componentDidUpdate is working....");
        }
    }*/
    shouldComponentUpdate(){
        if(this.state.count>5){
            // return false;    //componentDidUpdate will won't work...
            return true;       //componentDidUpdate will work here...
        }
    }

    componentDidUpdate(){
        console.log("componentDidUpdate is working....");
    }
    
    updateFunc(){
        console.log("myFunc is working....");
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log("render is working....");
        return(
            <>
                <h3>Example of React.js Life Cycle</h3>
                <p>State Data: {this.state.count}</p>
                <button onClick={() => this.updateFunc()}>Update</button>
            </>
        )
    }
    
}

export default ReactLifeCycleMethodClass;