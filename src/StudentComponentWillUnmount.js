import React  from "react";

class StudentComponentWillUnmount extends React.Component{
    constructor() {
        console.log("constructor is working....");
        super();
    }
    componentWillUnmount() {
        console.log("componentWillUnmount is working...");
    }

    render() {
        return(
            <>
                <h3>Example for the Unmounting...</h3>
            </>
        )
    }
}

export default StudentComponentWillUnmount;