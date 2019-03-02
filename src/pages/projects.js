import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Projects from '../components/projects';

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          description
          code
          url
          info
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

// export const query = graphql`
//   {
//     allSanityProject {
//       edges {
//         node {
//           title
//           description
//           slug {
//             current
//           }
//           url
//           image {
//             asset {
//               fluid {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default ({ data }) => (
  
  
  <Layout>
    <main className="content">
    {data.allProjectsJson.edges.map(({ node: project }) => (
    // {data.allSanityProject.edges.map(({ node: project }) => (
      <Projects
        // key={`preview-${project.slug}`}
        key={project.slug}
        title={project.title}
        description={project.description}
        // slug={project.slug}
         imageData={project.image.childImageSharp.fluid}
        slug={project.slug}
        url={project.url}
        info={project.info}
        code={project.code}
       // imageData={project.image.asset.fluid}
      />
    ))}
    </main>
    </Layout>
);