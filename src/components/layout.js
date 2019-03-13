import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from './footer'
import Header from "./header"
import "./layout.css"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Helmet from 'react-helmet'
import icon from '../images/icon.png';

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
      <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: "Cristina Lugo - Web Developer",
        },
        {
          name: "keywords",
          content:
            "frontend, developer, react, gatsby, javascript, ruby",
        },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', href: `${icon}` }
    ]}
    />
        
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
