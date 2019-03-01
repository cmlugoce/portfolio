import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectPreview from '../components/project';


 const ProjectPage = ({ data: { projectsJson: project } }) => (
    //const ProjectPage = ({ data: { sanityProject: project } }) => (
        // <Layout>
          <ProjectPreview
            title={project.title}
             imageData={project.image.childImageSharp.fluid}
           // imageData={project.image.asset.fluid}
            description={project.description}
            info={project.info}
            url={project.url}
          />
        // </Layout>
      );
      
     // export default ProjectPage;



export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      info
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default ProjectPage;
