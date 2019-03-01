import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  z-index: 2;
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  
 
  line-height: 2.2rem;
 
  
  a {
    color: white;
   
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    font-size: 1.2rem;
    margin: 0 1rem 0 2rem;
    
    text-align: center;
    &:hover{
      text-decoration: none;
      color: purple;
    }
   
  }
`

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  
  width: 100%;
  
  
  li {
    display: inline-block;
    
    align-items: center;
    
  }
`

const NavBar = () => {
  return (
    <Nav id="nav" role="navigation">
    {/* <Link to="/">Cristina Lugo</Link> */}
     
        
         
          <Link to="/" className="link--work">
            Home
          </Link>
          
       
          <Link to="/projects" className="link--about">
            Portfolio
          </Link>
        
        
          <Link to="/blog/" className="link--blog">
            Blog
          </Link>
          
          <Link to="/contact/" className="link--blog">
            Contact
          </Link>
        
        
      
    </Nav>
  )
}

export default NavBar;