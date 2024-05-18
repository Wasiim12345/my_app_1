import React from "react";

class StudentGetPropsChildComponentClass extends React.Component {

    render() {
        console.log(this.props);    //it will bring the date which is sendProps
        console.log(typeof (this.props));  //it will show the type of getProps.
        console.log(this.props.sendProps);   //it will get the date from sendProps object
        console.log(this.props.courseName); //it will give the date from courseName object

        return (
            <>
                <h3>Example StudentGetPropsChildComponentClass</h3>
            </>
        )
    }
}
export default StudentGetPropsChildComponentClass;