import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import Me from '../components/me'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Skills from '../components/skills'
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => (
  <Layout>
    <SEO title="Cristina Lugo" keywords={[`gatsby`, `application`, `react`]} />
    <div className='bg'>
    
    <h1 id='hello' style ={{color: `white`, fontSize: `6em`, fontWeight: `bold`,  marginLeft: `10%`}}>Hello<span style={{color: `#fd5e53`}}>.</span></h1>
    <h2 id='cap' style={{marginLeft: `10%`}}> I’m Cristina, a web developer, geologist and nature lover</h2>
    
    </div>
    
    <Me />
   
    
    
  </Layout>
  
)

export default IndexPage
