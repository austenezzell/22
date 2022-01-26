import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import MySketch from "../components/mysketch"
import useMouse from '@react-hook/mouse-position'


const IndexPage = ({ data }) => {
  
    const page = 'homepage';

    const ref = React.useRef(null)
    const mouse = useMouse(ref, {
      enterDelay: 100,
      leaveDelay: 100,
    })
    
    return(
        <Layout page={ page }>
            <Seo title="Austen Ezzell — Creative Direction &amp; Design." />
            <div ref={ref}>
                <section>
                    <div className="container hp-hero-vh gallery-container grid-margins">
                        <h1 className="xl-type">Austen Ezzell (<Link to='/info'>Info</Link>) <br className="br-at-xl" /> Creative Direction <br /> &amp; Design </h1>
                        <Carousel mouseX = {mouse.x} mouseY = {mouse.y} />
                        <nav className="hp-navigation">
                            <ul>
                                <li><Link to="/work" className="sm-type">Archive</Link></li>
                                <li><Link to="/info" className="sm-type">Information</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="m-l-r">
                        <hr />
                    </div>
                </section>
    
                <section>
                    <div className="hp-bottom container two-col grid-margin-bottom">
                        <div className="col hp-box-1 container">
                            
                            <div className="journal-content" id='journalContent'>
                                <MySketch />
                            </div>
                                
                            
                            <div className="m-l-r sm-screen-only p-top">
                                <hr />
                            </div>
                        </div>
                        <div className="col footer-container hp-box-2">
                            <Footer />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default IndexPage

// export const query = graphql`
//   query featuredWork {
//     allProjectsJson(sort: {fields: date, order: DESC}) {
//       nodes {
//         id
//         keyArtVideo
//         keyArt {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         keyArtAspectRatio
//         slug
//         title
//       }
//     }    
//   }
// `