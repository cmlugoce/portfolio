import React from 'react';
import styled from 'styled-components';
//import Mee from '../images/me.JPG'
import ParticlesBG from './particlejs'
import Skills from '../components/skills'
const Wrapper = styled.div`
  background: transparent;
  overflow: hidden;
  width: 95vw;
  height: auto;
  position: relative;
  
`;

const Column = styled.div`
  float: left;
  margin-left:auto;
  margin-right:auto;
  display:block;
  padding: 0 15px;
  position: relative;
  width: 50%;
  @media only screen and (max-width: 768px) {
    float: none;
    width: 100%;
  }
`;

const Img = styled.img`
  margin-top: 3%;
  border: 2px solid black;
  width: 250px;
  height: 300px;
  margin-left:auto;
   margin-right:auto;
   display:block;
`;

const Me =()=>
(
    <Wrapper>
<ParticlesBG/>
 <Column>
 <h1 style={{marginTop: `3%`}}>Cristina Lugo</h1> 
 <h2>Web Developer</h2>
 <p>

     I'm a web developer with a background in Geology. 
     I'm passionate about science, coding, security, education
      and data analysis. I fell in love with web development after learning Ruby.
 </p>
</Column>
<Column>
  <Img src='https://imgur.com/pZrqHfF.jpg' className='me-img' />
</Column>
<h2>My skills</h2>
<Skills />
</Wrapper>
)

export default Me;