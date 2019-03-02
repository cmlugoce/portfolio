import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Layout from './layout'


const Div = styled.div`


width: 70%;
text-align: center;
z-index: 1;
` 
const Wrapper = styled.section`
background: transparent;
  overflow: hidden;
  z-index: 4;
  margin-top: 20%;

`;

const ProjectPreview = ({ title, description, url, imageData, info, code }) => (
 <Layout>
   
      
      <Div className='project'>
    <Div>
    <Image fluid={imageData} alt={title} style={{borderRadius: `10px`, border: `2px solid purple`}}/>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>
      <a href={url}>💻 View this project online &rarr;</a>
    </p>
    <p>
      <a href={code}>📔 View Code &rarr;</a>
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
    </Div>
   
   </Layout> 
   
);

export default ProjectPreview;