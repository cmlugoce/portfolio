import React from 'react';
import styled from 'styled-components';
import ParticlesBG from './particlejs'
import Skills from '../components/skills'
const Wrapper = styled.div`
  background: transparent;
  overflow: hidden;
  width: 95vw;
  height: auto;
  position: relative;
  
  margin: 1rem auto;
  
`;

const Column = styled.div`
  float: left;
  margin-left:auto;
  margin-right:auto;
  display:block;
  padding: 0 5rem;
  position: relative;
  width: 50%;
  @media only screen and (max-width: 768px) {
    float: none;
    width: 100%;
  }
`;

const Img = styled.img`
  margin-top: 3%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  width: 250px;
  height: 300px;
  margin-left:auto;
   margin-right:auto;
   display:block;
   z-index: 1;
`;

const Me =()=>
(
    
      <Wrapper>

 <Column>
 <h1 id='name' style={{marginTop: `3%`, fontWeight: `bold`, color: `#003366`, textAlign: `center`}}>Cristina Lugo</h1> 
 {/* <h3 class='desc'>Web Developer</h3> */}
 <p class='desc'>

     I'm a <b>web developer</b> with a background in Geology. 
     I'm passionate about science, coding, security, education
      and data analysis. I fell in love with web development after learning Ruby.
 </p>
</Column>
<Column>
  <Img src='https://imgur.com/pZrqHfF.jpg' className='me-img' />
</Column>

 
<h2 id='skills' style={{padding: `1rem 5rem 1rem`, color: `#3498db`}}><u>My skills</u></h2>
<Skills />

</Wrapper>

)

export default Me;