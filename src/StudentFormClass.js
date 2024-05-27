import React, { Component } from "react";

class StudentFormClass extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            number: "",
            password: "",
            Country: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.registerFunc = this.registerFunc.bind(this);    
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    registerFunc(e) {
        e.preventDefault();
        const { name, email, mobile, password, country } = this.state;
        // alert('Register function is working....');
        const getObjData = {
            Name: name,
            Email: email,
            Number: mobile,
            Password: password,
            Country: country,
        };
        console.log(getObjData);
    }

    render(){
        const { name, email, mobile, password, country } = this.state;

        return(
            <>
                <h3>Student Form example using class Component</h3>
                <form onSubmit={this.registerFunc}>
                    <p>{name} - {email} - {mobile} - {password} - {country}</p>
                    <input type="text" placeholder="Name" name="name"onChange={this.handleChange}/><br />
                    <input type="email" placeholder="Email" name="email" onChange={this.handleChange}/> <br />
                    <input type="number" placeholder="Mobile Number" name="mobile" onChange={this.handleChange}/><br />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/><br />
                    <select name="country" onChange={this.handleChange}>
                        <option>--Select Country--</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>China</option>
                        <option>Nepal</option>
                    </select><br />
                    <button type="submit">Register</button>
                </form>
                {/* <button onClick={() => this.registerFunc()}>Register</button> */}
            </>
        )
    }
}

export default StudentFormClass;