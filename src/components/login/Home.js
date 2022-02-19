import React from "react";
import '../../App.css';

import Logo from "../../image/logo.png";
import { Link } from 'react-router-dom'
const goto = () => { }

function Home() {
    return (
        <center>
            <div className="container logo">

                <img src={Logo} alt="logo" />
                <Link to='/login' className="lb">
                    <button className="signin2" onClick={goto}>Login to Use</button>
                </Link>
                <Link to='/Signup' className="lb">
                    <button className="signin2" >Signup</button>
                </Link>
            </div>
        </center>
    );
}

export default Home