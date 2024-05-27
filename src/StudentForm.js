import { useState } from "react";

function StudentForm() {

    const [name, setName] =useState()
    const [email, setEmail] =useState()
    const [mobile, setMobile] =useState()
    const [password, setPassword] =useState()
    const [country, setCountry] =useState()

    function registerFunc(e) {
        // e.preventDefault();
        // alert('Function is working.....')
        const getObjData = {
            Name: name,
            Email: email,
            Mobile: mobile,
            Password: password,
            Country: country
        }
        console.log(getObjData);
    }
    return(
        <>
            <h3>Student Form example</h3>
            <form onSubmit={registerFunc}>
                <p>{name} - {email} - {mobile} - {password} - {country}</p>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/><br />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br />
                <input type="number" placeholder="Mobile" onChange={(e) => setMobile(e.target.value)}/><br />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br />
                <select onChange={(e) => setCountry(e.target.value)}>
                    <option>--Select Country--</option>
                    <option>India</option>
                    <option>Nepal</option>
                    <option>USA</option>
                    <option>China</option>
                    <option>Pakistan</option>
                </select><br />
                {/* <input type="submit" value="Registration" /> */} {/*if we use this input then we will have to uncomment e.preventDefault() */}
            </form>
            <button onClick={() => registerFunc()}>Registration</button>  {/*if we use button then we will have to comment e.preventDefault() */}
        </>
    )
}

export default StudentForm;