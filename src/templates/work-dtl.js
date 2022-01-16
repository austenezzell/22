import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"

export default function workDtls({ data }) {
    const { date, description, title, assets } = data.projectsJson
    const page = 'work-dtl-page';
    return (
        <Layout page={ page }>
            <header>
                <ul>
                    <li><Link to="/">&larr; Austen Ezzell</Link></li>
                    <li><Link to="/info">Info</Link></li>
                </ul>
                
            </header>
            <h1>{ title }</h1>
            <p>{ description } { date } </p>
            {assets.map((value, index) => {
                return <div key={ index } className={ value.class }>{ value.video ? <video autoPlay loop muted><source src={ value.video } type="video/mp4" /></video> : <Img fluid={value.asset.childrenImageSharp[0].fluid}/> }</div>
            })}
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
            date
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