import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Dots from './Dots'
import Layout from './layout'


const Div = styled.div`
display: block;
margin-right: 0;
margin-left: 25%;
width: 100%;
text-align: center;
z-index: 1;
` 
const Wrapper = styled.section`
background: transparent;
  overflow: hidden;
  z-index: 4;
  margin-top: 20%;

`;

const ProjectPreview = ({ title, description, url, imageData, info }) => (
 <Layout>
   
      
      <Div className='project'>
    
    <Image fluid={imageData} alt={title} style={{borderRadius: `10px`, border: `2px solid purple`}}/>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>
      <a href={url}>View this project online &rarr;</a>
    </p>
    <h3>Description:</h3>
    <ul style={{listStyleType: `none`}}>
      {info.map(info => (
        <li key={`info-${info}`}>{info}</li>
      ))}
    </ul>
    <p>
      <Link to="/projects">&larr; back to all projects</Link>
    </p>
    
    </Div>
   
   </Layout> 
   
);

export default ProjectPreview;