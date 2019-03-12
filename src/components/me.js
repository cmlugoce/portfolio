import React from 'react';
import styled from 'styled-components';
import ParticlesBG from './particlejs'
import Skills from '../components/skills'
import CrisImage from '../components/cris-image'
const Wrapper = styled.div`
  background: transparent;
  overflow: hidden;
  
  height: auto;
  position: relative;
  
  margin: 1rem auto;
  
`;

const Column = styled.div`
  float: left;
  margin-left:auto;
  margin-right:auto;
  display:block;
 
  position: relative;
  width: 50%;
  @media only screen and (max-width: 1024px) {
    float: none;
    width: 100%;
  }
`;

const IC = styled.div`
  float: right;
  margin-left:1.2rem;
  margin-right:3rem;
  
  display:flex;
  justify-content: center;
 
  position: relative;
  width: 45%;
  @media only screen and (max-width: 1024px) {
    float: none;
    width: 90%;
    display:  flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

const Img = styled.img`
  margin-top: 3%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  width: 250px;
  
  margin-left:auto;
   margin-right:auto;
   display:block;
  
`;

const Me =()=>
(
    
      <Wrapper>

 <Column>
 <h1 id='name' style={{marginTop: `3%`, fontWeight: `bold`, color: `#003366`, paddingLeft: `1.5rem`}}>Cristina Lugo</h1> 
 
 <p class='desc'>

     I'm a <b>web developer</b> with a background in Geology. 
     I'm passionate about science, coding, security, education
      and data analysis. I fell in love with web development after learning Ruby.
 </p>
</Column>
 <IC>
<CrisImage/>
</IC> 
 
<Skills />

</Wrapper>

)

export default Me;