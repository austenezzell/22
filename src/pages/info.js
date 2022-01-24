import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Seo from "../components/seo"
import InfoGallery from "../components/info-gallery"



const IndexPage = ({ data }) => {
  const page = 'info-page';
  
  return(
    <Layout page={page}>
      <Seo title="Austen Ezzell — Information" />
      
      <div>
        <div className="info-main-content grid-margins">
          <h1 className="header xl-type">(<Link to="/">&larr;</Link>) AUSTEN EZZELL CREATIVE DIRECTION <br /> &amp; DESIGN</h1>
          <div className="about-me">
            <p className="lg-type">I'm a creative director and designer based in Laguna Beach CA. I currently lead global brand design at Dialpad where I'm lucky to work with talented, driven, and friendly humans. I believe in the power of design thinking, diversity, data and collaboration. My focus at Dialpad is on building a design practice at scale and I'm happiest when uncomfortable design decisions are reinforced by user data.</p>
          </div>
        </div>
        <div className="grid-margins container two-col info-dets">
          <div className="box-1 container info-gallery three-col">
            <div className="gallery-imgs">
              <InfoGallery />
            </div>
          </div>
          <div className="box-2">
            <div className="block">
              <h4 className="sm-type">Personal</h4>
              <p className="sm-type">Design found me. I set out to become an artist or an athelete and eventually realized that the design process was the magic that helped me connect the things I love. I have a degree in Marketing & Art History. I’m a self taught front-end developer and I'm obsessed with the possibilities of design + technology. I live with my wife, two boys and Newfoundland in Laguan Beach CA. Hit me up for a coffee if your in the neighborhood.</p>              
            </div>
            <div className="block">              
              <h4 className="sm-type">Design</h4>
              <p className="sm-type">This site is always in beta. I make it an annual ritual to re-design, lern new technologies and push myself in new directions. I'm a big fan of figma and designing in the browser. The font is Everett (not named after my son but partially selected for this reason) by Nolan Paparelli.</p>
            </div>
            <div className="block">
              <h4 className="sm-type">Technology</h4>
              <p className="sm-type">This site is built on the Jamstack with Gatsby. Most of the sketches in the journal are done with P5.js.</p>
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


