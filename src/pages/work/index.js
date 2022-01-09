import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Img from "gatsby-image"

export default function Work({ data }) {
    
    const work = data.allMarkdownRemark.nodes;
    console.log(work);
    

    return (
        <Layout>
            <div>
                <h1>WORK</h1>
                <div>
                    {work.map(project => (
                        <Link to={"/work/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                {project.frontmatter.keyArtVideo !== null ?  <h1>{ project.frontmatter.keyArtVideo }</h1> : null}
                                {project.frontmatter.keyArt !== null ? <Img fluid={ project.frontmatter.keyArt.childImageSharp.fluid }/> : null}
                            {/* {project.frontmatter.keyArt? <h1>data</h1>: null } */}
                                {/* <Img fluid={ project.frontmatter.keyArt.childImageSharp.fluid }/> */}
                                <h3>{ project.frontmatter.title }</h3>
                                <p>{ project.frontmatter.date }</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            

        </Layout>
    )
}

export const query = graphql`
query Work {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          title
          keyArtVideo
          keyArt {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
  
  
`