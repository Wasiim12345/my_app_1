import React from "react"

    class StudentFunctionEventClass extends React.Component{
        myFunc() {
            console.log('myFunc in class component working');
        }
        // myFunc()
        
    render(){
        return (
            <>
                <h2>Example of class events</h2>
                <p>example of paragraph class events.</p>
                <button onClick={this.myFunc()}>ClickMe</button>
                <button onClick={this.myFunc()}>ClickMe</button>
                <button onClick={()=> this.myFunc()}>ClickMe</button>
            </>
        )
    }
}
export default StudentFunctionEventClass;