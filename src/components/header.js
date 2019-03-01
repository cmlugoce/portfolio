import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from './navBar'
const Header = ({ siteTitle }) => (
  
    <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        marginLeft: `0 `,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
     <NavBar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
