import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"
import Footer from "../components/footer"

export default function workDtls({ data }) {
    const { description, title, assets } = data.projectsJson
    const page = 'work-dtl-page';
    let asset;

    let assetType = (value) => {
        { value.video ? asset = <video autoPlay loop muted><source src={ value.video } type="video/mp4" /></video> : asset = <Img fluid={value.asset.childrenImageSharp[0].fluid}/> }
        return asset;
    }
    
    return (
        <Layout page={ page }>
            <header className='work-dtl-nav'>
                <ul>
                    <li><Link to="/" className='sm-text'>&larr; Austen Ezzell</Link></li>
                    <li><Link to="/info"  className='sm-text'>Info</Link></li>
                </ul> 
            </header>
            <section>
                <div className="work-content">
                    {assets.map((value, index) => {
                        return <div key={ index } className={ value.class + " asset"}>
                            { value.class === "repeat" ? <div className='container'><div className='repeat-1'>{ assetType(value) }</div><div className='repeat-2'>{ assetType(value) }</div><div className='repeat-3'>{ assetType(value) }</div></div>
                            : value.class === "centered" ? <div className='container twelve-col'><div className='centered-asset'>{ assetType(value) }</div></div>
                            : assetType(value) }
                            
                            </div>
                    })}
                    <div className="info-bar">
                        <h1>{ title } — { description }</h1>
                    </div>
                </div>
            </section>
            <div className="grid-margins container two-col info-dets">
                <div className="box-1 container info-gallery three-col"></div>
                <div>
                    <div className="block double-m">
                        <p className="sm-type">Feel free to reach out about collaborations</p>
                    </div>
                    <Footer />
                </div>
                
            </div>
            
            
            


        </Layout>
    )
}

// export const query = graphql`
//     query WorkDtlPage($slug: String) {
//         markdownRemark(frontmatter: {slug: {eq: $slug}}) {
//             html
//             frontmatter {
//                 title
//             }
//         }
//     }
// `

export const query = graphql`
    query WorkDtlPage($slug: String) {       
        projectsJson(slug: {eq: $slug}) {
            keyArtVideo
            keyArtAspectRatio
            description
            title
            assets {
              class
              video
              asset {
                childrenImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }        
        }
    }
`