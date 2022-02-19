import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../index.css';




export default function Signup() {
    const navigate = useNavigate();
    const [gender, setgender] = useState("other");
    const [warning, setwarning] = useState('')
    const [credentials, setCredentials] = useState({
        name: "",
        dob: "",
        email: "",
        address: "",
        mobile: "",
        password: "",
        gender: "",
        password_confirm: "",

    })
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    function namech() {
        if (credentials.name) {
            return true
        } else {
            setwarning("name can not empty")
            return false

        }
    }
    function validateDOB() {
        if (credentials.dob) {
            return true
        } else {
            setwarning("date of birth can not empty")
            return false

        }
    }
    function ValidateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.email)) {
            return (true)

        } else {
            setwarning("enter valid email")
            return false

        }
    }
    function ValidateAddress() {
        if (credentials.address) {
            return true
        } else {
            setwarning("enter valid address")
            return false

        }
    }
    function ValidMobile() {
        if (credentials.mobile == '' || !(credentials.mobile.length == 10) || isNaN(credentials.mobile)) {
            setwarning("invalid mobile number")
            return false

        } else {
            return true
        }
    }
    function validPas() {

        if (credentials.password.match(/[a-z]/g) && credentials.password.match(
            /[A-Z]/g) && credentials.password.match(
                /[0-9]/g) && credentials.password.match(
                    /[^a-zA-Z\d]/g) && credentials.password.length >= 8) {
            return true

        } else {
            setwarning("must contain upper case, lower case, special character and must be more then 8 character")
            return false

        }
    }
    function validConfirmPass() {
        if (credentials.password == credentials.password_confirm) {
            return true
        } else {
            setwarning('password should match')
            return false
        }
    }

    async function handleSubmit(e) {
        if (namech() && validateDOB() && ValidateEmail() && ValidateAddress() && ValidMobile() && validPas() && validConfirmPass()) {
        
        try {
            
            const config = {
                method: 'post',
                url: 'http://localhost:5000/auth/signup',
                headers: {
                'User-Agent': 'Axios - console app',
                'Content-Type': ' application/json'
            },
            data: {
                name: credentials.name,
                DOB: credentials.dob,
                email: credentials.email,
                address: credentials.address,
                mobile: credentials.mobile,
                password: credentials.password,
                gender:gender,
            }
        }

        let res = await axios(config)

        console.log(res);
        // if ()
        if(res.data.message){
            navigate('/')
        }
        
        if(res.data.error){
            setwarning(res.data.error)
        }
    } catch (error) {
        console.log(error);
        console.log(error.response.data)
        {alert(error.response.data.error)}
       
    }

        

    }}







    return (


        <div className="register ">
            <h2 className="actives">
                Registration form
            </h2>
            <h3>{warning}</h3>
            <form id="ragistration"  >
                <span>name</span>
                <input type="text" name="name" className="in" onChange={onchange} required value={credentials.name} />
                <span className="mass"></span>
                <br />
                <br />
                <span>date of birth</span>
                <input type="date" name="dob" className="in" value={credentials.dob} onChange={onchange} required />
                <span className="mass"></span>
                <br /><br />
                <span>email</span>
                <input type="text" name="email" className="in" required value={credentials.email} onChange={onchange} />
                <span id="email" className="mass"></span>
                <br />
                <br />

                <span>address</span>
                <input type="text" name="address" className="in" required value={credentials.address} onChange={onchange} />
                <span id="address" className="mass"></span>
                <br /><br />

                <span>mobile number</span>
                <input type="number" name="mobile" className="in" required value={credentials.mobile} onChange={onchange} />
                <span id="mobi" className="mass"></span>
                <br /><br />

                <span>gender</span>
                <br />
                {/* <input type="radio" name="gender" id="gender" onChange={onchange} value={credentials.gender} />
                <span>male</span> */}
                <div
                    className="radio-btn"
                    onClick={() => {
                        setgender("male");
                    }}
                >
                    <input
                        type="radio"
                        value={gender}
                        name="gender"
                        checked={gender === "male"}
                    />
                    <span>Male</span>
                </div>
              
                <div
                    className="radio-btn"
                    onClick={() => {
                        setgender("female");
                    }}
                >
                    <input
                        type="radio"
                        value={gender}
                        name="gender"
                        checked={gender === "female"}
                    />
                    <span>female</span>

                </div>
                {/* <br />
                <input type="radio" name="gender" id="gender" value="other" onChange={onchange} checked value={credentials.gender} />
                <span>other</span>
                <br />
                <span id="gen" className="mass"></span>*/}
                <br /> 

                <span>create password</span>
                <input type="password" name="password" className="in" required value={credentials.password} onChange={onchange} />
                <span id="pass" className="mass"></span>

                <br />
                <br />

                <span>confirm password</span>
                <input type="password" name="password_confirm" className="in" required onChange={onchange} value={credentials.password_confirm} />
                <span id="passcon" className="mass"></span>
                <br /><br />

                <input type="checkbox" name="agree" id="ok" required value="ok" />
                <span>Agree to terms and conditions</span>



                <br />
                <span id="agree" className="mass"></span>
                <br />


                {/* <button className="btn" type='submit'>dont</button> */}
             <div className='cont'>
                <div className="ss mx-10" onClick={handleSubmit}>Submit</div>
                <button type="reset" className="btn">Reset</button>
                </div>






            </form>
        </div>

    )
}
