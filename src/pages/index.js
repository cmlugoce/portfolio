import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import Me from '../components/me'
import Layout from "../components/layout"

import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBG from '../components/particlejs'
import styled from 'styled-components';

const Wrapper = styled.div`
  background: transparent;
  overflow: hidden;
 
  position: relative;
  z-index: 4;
  
 

 
  }
  
  
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Cristina Lugo" keywords={[`gatsby`, `application`, `react`]} 
    />
    <Wrapper>
   
    <div className='bg'>
    <ParticlesBG />
     
    <h1 id='hello' style ={{  fontWeight: `bold`,  marginLeft: `6%`, zIndex: 1}}>Hola!</h1>
    <h2 id='cap' style={{marginLeft: `10%`}}> I’m Cristina, a web developer, geologist and nature lover</h2>
    
    </div>
   
    </Wrapper>
    <Me />
   
    
    
  </Layout>
  
)

export default IndexPage
