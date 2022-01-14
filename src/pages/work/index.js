import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Img from "gatsby-image"
import Seo from "../../components/seo"

export default function Work({ data }) {
    
    const page = 'archive-page';
    const work = data.allMarkdownRemark.nodes;

    
    return (
        
        <Layout page={ page }>
            <Seo title="Work Archive" />
            
            <div className="grid-margins">
                <h1 className="header xl-type">(<Link to="/">&larr;</Link>) Work Archive</h1>
                
                <div className="main-content ">
                    {work.map(project => (
                        <Link to={"/work/" + project.frontmatter.slug} key={project.id} className="container work-grid" >
                            <div className="image">
                                { project.frontmatter.keyArtVideo ? <video autoPlay loop muted><source src={ project.frontmatter.keyArtVideo } type="video/mp4" /></video> : null }
                                { !project.frontmatter.keyArtVideo ? <Img fluid={ project.frontmatter.keyArt.childImageSharp.fluid }/> : null }
                            </div>
                            <div className="description">
                                <h3>{ project.frontmatter.title }</h3>
                                <p>{ project.frontmatter.date }</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="container two-col">
                    <div></div>
                    <div>
                        <div className="block say-hi">
                            <p className="sm-type">Feel free to reach out about collaborations</p>
                        </div>
                        <Footer />
                    </div>
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
          keyArtAspectRatio
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