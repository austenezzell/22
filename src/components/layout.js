import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
// import Footer from "./footer"
import "./layout.scss"

const Layout = (props) => {

  const { children, page } = props;
  
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className={`site-content ${ page }` }>
        <main>{children}</main>
    </div>
  )
}


export default Layout
