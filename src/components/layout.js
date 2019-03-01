import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import NavBar from './navBar'
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      
        
        <div
          // style={{
          //   //margin: `0 auto`,
          //   maxWidth: 960,
          //   padding: `0px 0rem 0rem`,
          //   paddingTop: 0,
          // }}
        >
        
        <Header />
        
          <main>
         
          {children}
        
          </main>
          <footer >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
     
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
