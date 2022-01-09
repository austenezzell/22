import * as React from "react"
import { Link } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
// import Sun from "../images/sun.inline.svg";
import Layout from "../components/layout"
// import Carousel from "../components/carousel"

const IndexPage = ({ data }) => {
  
  const page = 'homepage';

  return(
  <Layout page={ page }>
    <Seo title="Austen Ezzell — Creative Direction &amp; Design." />
    
        <div>
            <section>
                <div className="container full-vh gallery-container grid-margins">
                    <h1 className="xl-type">Austen Ezzell (<Link to='/info'>Info</Link>) <br className="br-at-xl" /> Creative Direction <br /> &amp; Design </h1>
                    <div className="container gallery twelve-col">
                        <div className="gallery-img portrait">
                            <img src="/ev.jpg" alt="" />
                        </div>                        
                    </div>
                    <div className="container gallery twelve-col">
                        <div className="gallery-img landscape">
                            <img className="landscape" src="/wb.gif" alt="" />
                        </div>                       
                    </div>                    
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
                    <div className="col hp-box-1">
                        <div className="journal container">
                            <div className="three-col">
                                <h4 className="t-right sm-type journal-link"><Link to="/journal">Journal</Link></h4>
                            </div>
                            <div className="container twelve-col">
                                <div className="journal-content"></div>
                            </div>
                            <div className="container three-col description">
                                <div className="col journal-entry sm-type">Name</div> 
                                <div className="col journal-entry t-center sm-type">Name</div> 
                                <div className="col journal-entry t-right sm-type">Name</div> 
                            </div>
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
