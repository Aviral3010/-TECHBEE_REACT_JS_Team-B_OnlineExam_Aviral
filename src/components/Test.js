import React from 'react'
import axios from 'axios';

function Test() {

    async function makeRequest() {

        const config = {
            method: 'post',
            url: 'http://localhost:5000/auth/login',
            headers: { 'User-Agent': 'Axios - console app',
            'Content-Type':' application/json'
         },
         data:{
            "email":"aviralsri30@gmai.com",
            "password":"ASDqwe!@#123"
        }
        }

        let res = await axios(config)

        console.log(res);
    }

  makeRequest();

    return (
        <div>
            
        </div>
    )
}

export default Test
