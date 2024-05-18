// import { Component } from "react";
import React  from "react"; 

// class StudentComponentClass extends Component    //if we use Component without React. then we use {Component} while importing
class StudentComponentClass extends React.Component{
    render() { 
        return <div>
               <h2>Example for class Component</h2>
               <p>example paragraph for class Component</p>
        </div>
        // another way of writing this content
        // return (
        //        <>
        //               <h2>Example for class Component</h2>
        //               <p>example paragraph for class Component</p>
        //        </>
        // )
    }
}
export default StudentComponentClass;