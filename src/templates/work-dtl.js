import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"

export default function workDtls({ data }) {
    // const { html } = data.markdownRemark
    // const { title } = data.markdownRemark.frontmatter
    const { date, description, keyArtAspectRatio, keyArtVideo, slug, title, assets } = data.projectsJson

    console.log(assets);
    return (
        <Layout>
            <h1>{ title }</h1>
            <p>{ date }</p>
            <p> TEST </p>
            
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
            slug
            keyArtVideo
            keyArtAspectRatio
            descriiption
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