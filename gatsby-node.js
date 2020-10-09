const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allMarkdownRemark(filter: { frontmatter: { slug: { ne: null } } }) {
          edges {
            node {
              id
              frontmatter {
                date
                slug
                title
              }
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      // Resolve the paths to our template
      const blogPostTemplate = path.resolve("./src/templates/blogpost.js")
      // Then for each result we create a page.
      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          path: `/blogpost/${edge.node.frontmatter.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.frontmatter.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
