import React, { useContext } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import userContext from '../../context/user/usercontext'
import Quiz from './Quiz'
import Footer from './Footer'




function AfterLoginHome() {
  const a = useContext(userContext)

  return (
    <>
      <div className='container-100'>
        <Navbar />
        <Sidebar />
        <Quiz />
      <Footer />
      </div>
      <Router>
        {/* <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/Signup" element={<Signup />} /> */}

        {/* </Routes> */}

      </Router>

    </>
  )
}

export default AfterLoginHome
