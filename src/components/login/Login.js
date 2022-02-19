import React, { useState,useContext } from 'react';
import axios from 'axios';
import userContext from '../../context/user/usercontext'; 
import '../../App2.css';
import { Link , useNavigate } from 'react-router-dom'

export default function Login() {
    const {setauth}=useContext(userContext)
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    async function handleSubmit(e) {
       
        
        try {
            
            const config = {
                method: 'post',
                url: 'http://localhost:5000/auth/login',
                headers: {
                'User-Agent': 'Axios - console app',
                'Content-Type': ' application/json'
            },
            data: {
               
                email: credentials.email,
               
                password: credentials.password,
                
            }
            }

        let res = await axios(config)

        console.log(res);
        // if ()
        if(res.status===200){
            localStorage.setItem('token', res.data.authToken)
            setauth(res.data.authToken)
            navigate('/')
        }
        
      
    } catch (error) {
        console.log(error);
        console.log(error.response.data)
        {alert(error.response.data.error)}
       
    }

        

    }


    return (

        <div className="login my-3">
            <h2 className="actives2"> sign in </h2>


            <form onSubmit={handleSubmit}>



                <input type="email" className="text" name="email" onChange={onchange} value={credentials.email} />
                <span className="inp">username</span>

                <br />

                <br />

                <input type="password" className="text" name="password" onChange={onchange} value={credentials.password} />
                <span className="inp">password</span>
                <br />

                <center>
                <div className="btn mx-2 my-4" onClick={handleSubmit}>Submit</div>
                </center>


               

            </form>
            



        </div>
    );
}