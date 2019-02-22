import { Link } from "gatsby"

import React from "react"

function NavBar() {
    return (
      <nav id='n'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <a href="http://cmlugoce.com/">Blog</a>
        <Link to="/#contact">Contact</Link>
      </nav>
    );
  }
  
  export default NavBar;