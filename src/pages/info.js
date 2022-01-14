import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Seo from "../components/seo"



const IndexPage = ({ data }) => {
  const page = 'info-page';
  
  return(
    <Layout page={page}>
      <Seo title="Austen Ezzell — Information" />
      
      <div>
        <div className="info-main-content grid-margins">
          <h1 className="header xl-type">(<Link to="/">&larr;</Link>) AUSTEN EZZELL CREATIVE DIRECTION <br /> &amp; DESIGN</h1>
          <div className="about-me">
            <p className="lg-type">I'm a creative director and designer based in Laguna Beach CA. I currently lead a global brand design team at Dialpad where I'm lucky to work with talented creatives and marketers on Dialpad's brand communications. My focus at Dialpad is on building a design practice at scale and I'm happiest when uncomfortable design decisions are reinforced by user data.</p>
          </div>
        </div>
        <div className="grid-margins container two-col info-dets">
          <div className="box-1 container info-gallery three-col">
            <div className="gallery-imgs"></div>
          </div>
          <div className="box-2">
            <div className="block">
              <h4 className="sm-type">Design</h4>
              <p className="sm-type">This site was designed in Figma, developed gatsby, and the font is Everett (not named after my son but partially selected for this reason) by Nolan Paparelli.</p>
            </div>
            <div className="block">
              <h4 className="sm-type">Technology</h4>
              <p className="sm-type">Special thanks to my wife Lauren for user testing, design feedback, and putting up with me.</p>
            </div>
            <div className="block">
              <h4 className="sm-type">Portfolios past</h4>
              <p className="sm-type">2020, 2018, 2017, 2016, 2015, 2014, 2013 (older versions lost).</p>
            </div>
            <div className="block double-m">
              <p className="sm-type">Feel free to reach out about collaborations</p>
            </div>
            <Footer />
          </div>
    
        </div>
        
      </div>
    </Layout>
  )
}

export default IndexPage


