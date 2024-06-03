import React, { Component } from "react"
import StudentComponentWillUnmount from "./StudentComponentWillUnmount";

class ReactLifeCycleMethodClass extends Component{

    constructor(){
        super();
        console.log("constructor is working....");
        // this.state = {
        //     count: 0
        // }
        this.state = {
            showData: false
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
    /*
    shouldComponentUpdate(){
        if(this.state.count>5){
            // return false;    //componentDidUpdate will won't work...
            return true;       //componentDidUpdate will work here...
        }
    }*/

    /*componentDidUpdate(){
        console.log("componentDidUpdate is working....");
    }*/

    /*getSnapshotBeforeUpdate(preProps, preState) {
        console.log("getSnapShotBeforeUpdate...", preState);
        return preState;
    }*/

    /*componentDidUpdate(preProps, preState, snapShot){
        console.log("componentDidUpdate is working....");
        console.log("prePros is :", preProps);
        console.log("preState is :", preState);
        console.log("snapShot is :", snapShot);

    }*/
    
    updateFunc(){
        // console.log("myFunc is working....");
        // this.setState({count:1})  //we can either use line 36 or 37
        // this.setState({count:this.state.count+1})
        // this.setState({showData: true })
        this.setState({showData: !this.state.showData}) //dynamically calling here
    }
    render(){
        // console.log("Original props :", this.props.passData);
        // console.log("render is working....");
        return(
            <>
                {/* <h3>Example of React.js Life Cycle</h3>
                <p>State Data: {this.state.count}</p> */}
                {/* <p>Original Props : {this.props.passData}</p> */}
                {/* <button onClick={() => this.updateFunc()}>Update</button> */}
                {/* <button onClick={() => this.updateFunc()}>Update</button> */}
                {this.state.showData?
                    <StudentComponentWillUnmount /> : ""
                }
                <button onClick={() => this.updateFunc()}>Update</button>
            </>
        )
    }
    
}

export default ReactLifeCycleMethodClass;