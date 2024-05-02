import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Assets/Footer'

const Error = () => {
  return (
    <div>
        {/* <img src="./Image/error.png" style={{  backgroundSize: "cover", */}
      <NavLink to="/" >   <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg.webp" style={{  backgroundSize: "cover",
    maxWidth: "100%",
    width: "100%" ,}} alt="error Page " /> </NavLink>
    <Footer />
    </div>

  )
}

export default Error