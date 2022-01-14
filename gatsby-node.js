const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  // DATA FROM MARKDOWN
  //
  // const { data } = await graphql(`
  //   query workDtl {
  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)

  // data.allMarkdownRemark.nodes.forEach(node => {
  //   actions.createPage({
  //     path: '/work/' + node.frontmatter.slug,
  //     component: path.resolve('./src/templates/work-dtl.js'),
  //     context: { slug: node.frontmatter.slug }
  //   })
  // }) 

  // DATA FROM JSON
  const { data } = await graphql(`
    query workDtl {
      allProjectsJson {
        nodes {
          slug
        }
      }
    }
  `)

  data.allProjectsJson.nodes.forEach(node => {
    actions.createPage({
      path: '/work/' + node.slug,
      component: path.resolve('./src/templates/work-dtl.js'),
      context: { slug: node.slug }
    })
  }) 


 

}
