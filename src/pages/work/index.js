import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Img from "gatsby-image"

export default function Work({ data }) {
    
    const work = data.allMarkdownRemark.nodes;

    
    return (
        <Layout>
            <div>
                <h1>WORK</h1>
                <div>
                    {work.map(project => (
                        <Link to={"/work" + project.frontmatter.slug} key={project.id}>
                            <div>
                                { project.frontmatter.keyArtVideo ? <video autoPlay loop muted><source src={ project.frontmatter.keyArtVideo } type="video/mp4" /></video> : null }
                                
                                { !project.frontmatter.keyArtVideo ? <Img fluid={ project.frontmatter.keyArt.childImageSharp.fluid }/> : null }
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
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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