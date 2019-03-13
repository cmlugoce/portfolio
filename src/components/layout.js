import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from './footer'
import Header from "./header"
import "./layout.css"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

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
      
        
       <>
        
        <Header />
        
          <main>
         
          {children}
          <ScrollUpButton 
          EasingType="easeInCubic"
          ShowAtPosition={10}
          style={{marginBottom: `1.3rem`, marginRight: `-1rem`}}
        />
        
          </main>
          <Footer />
         
       
     </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
