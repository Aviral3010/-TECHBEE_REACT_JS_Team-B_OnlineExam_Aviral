import React from 'react'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function Initial() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/Signup" element={<Signup />} />

                </Routes>

            </Router>
        </div>
    )
}

export default Initial
