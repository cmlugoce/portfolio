import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import './layout.css'

const Projects = ({ title, description, slug, imageData, url }) => (
    
  <div className="project-preview">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <a href={url}>View this project &rarr;</a>
    </p>
  </div>
 
);

export default Projects;