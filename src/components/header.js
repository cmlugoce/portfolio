import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from './navBar'
const Header = ({ siteTitle }) => (
  
    <header
    style={{
      background: `#003366`, 
      opacity: 0.95,
      marginBottom: `1.45rem`,
      
     
    }}
  >
    
      
     <NavBar />
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
