import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Layout from './layout'


const Div = styled.div`

margin-top: 2rem;

text-align: center;
z-index: 1;
` 
const UL = styled.ul`
background: transparent;
  overflow: hidden;
  z-index: 4;
  margin-top: 20%;

`;

const ProjectPreview = ({ title, description, url, imageData, info, code }) => (
 <Layout>
   
      
      <Div className='project'>
    <Div>
    <Image fluid={imageData} alt={title} />
    <br />
    <h1>{title}</h1>
    <p>{description}</p>
    
      <a  id='url' href={url}>💻 View this project online</a>   
    <br />
      <a id='code' href={code}>📔 View Code</a>
    <br />
    <br />
    <h3>Description:</h3>
    <ul style={{textAlign: `start`}}>
      {info.map(info => (
        <li key={`info-${info}`}>{info}</li>
      ))}
    </ul>
    <p>
      <Link to="/projects">&larr; back to all projects</Link>
    </p>
    </Div>
    </Div>
   
   </Layout> 
   
);

export default ProjectPreview;