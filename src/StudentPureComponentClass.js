import React, { PureComponent } from 'react';

// class StudentPureComponentClass extends React.Component{
class StudentPureComponentClass extends PureComponent{
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    updateFunc(){
        console.log("updateFunc is working....");
        this.setState({count:this.state.count+1});
    }

    render(){
        return(
            <>
                <h3>Example of pure component</h3>
                <p>State: {this.state.count}</p>
                {console.log("render is loading....")}
                <button onClick={() => this.updateFunc()}>Update</button>
            </>
        )
    }
}

export default StudentPureComponentClass;