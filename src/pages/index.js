import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import Me from '../components/me'
import Layout from "../components/layout"
import Image from '../components/image'
import SEO from "../components/seo"
import universe from '../images/universe.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBG from '../components/particlejs'
import styled from 'styled-components';

const Wrapper = styled.div`
  background: transparent;
  overflow: hidden;
  margin-top: -1.5em;
  position: relative;
  z-index: 1;
 
  @media (max-width: 380px){
    margin-top: -7%;
  }
  @media (max-width: 450px){
    margin-top: -5.6%;
  }
  @media (max-width: 900px){
    margin-top: -1.5em;
  }
 @media(max-width: 1280px){
   margin-top: -1.5em;
 }
 
  }
  
  
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh; // or whatever
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }

  
`

const Cap = styled.h1`
 
 background: transparent;
 z-index: 1;
 position: absolute;
  top: 20%;
  left: 20%;
  transform: translate(-50%,-50%);


`

const Info = styled.h2`
z-index: 1;
 position: absolute;
  top: 35%;
  left: 10%;
  


`
const IndexPage = () => (
  <Layout>
    <SEO title="Cristina Lugo" keywords={[`gatsby`, `application`, `react`]} 
    />
    
    
    <Wrapper>
    <ParticlesBG  />
    <Cap id='hello'>Hola!</Cap>
    <Info id='cap'>I’m Cristina, a web developer, 
      geologist and nature lover</Info>
    <BgImage />

    
    {/* <div className='bg'>  
    
   
    <h1 id='hello' style ={{  fontWeight: `bold`,  marginLeft: `6%`}}>Hola!</h1>
     
    <h2 id='cap' style={{marginLeft: `10%`}}> I’m Cristina, a web developer, geologist and nature lover</h2>
    
    </div> */}
    <ParticlesBG />
    </Wrapper>
    <>
    
    <Me />
   
    </>
    
  </Layout>
  
)

export default IndexPage