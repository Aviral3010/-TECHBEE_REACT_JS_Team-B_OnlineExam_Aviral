import React from 'react'
import Logo from "../../image/logo.png"
function Footer() {
    return (
        <div className='footer'>
            <footer style={{
                padding: "20px",

                background: "#212529",

                color: "rgb(255, 255, 255)",

                borderRadius: "20px",

                marginTop: "410px"
            }}>
                <h1>Copyright &copy; <img src={Logo} alt="" width="60" height="60" className="d-inline-block " /></h1>
            </footer>
        </div>
    )
}

export default Footer
