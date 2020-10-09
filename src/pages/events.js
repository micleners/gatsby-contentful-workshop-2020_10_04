import { useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Events = () => {
  const data = useStaticQuery(graphql`
    {
      events: allContentfulEvents {
        edges {
          node {
            description {
              childMarkdownRemark {
                html
              }
            }
            location
            slug
            title
            presenter {
              slug
              name
              bio {
                bio
              }
            }
            datetime(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)

  const events = data.events.edges.map(event => event.node)
  console.log(events)

  return (
    <Layout>
      <SEO title="Events" />
      <h1>Events</h1>
      {events &&
        events.map(event => {
          const { description, location, slug, title, presenter } = event
          console.log(description)
          console.log(location)
          console.log(slug)
          console.log(title)
          console.log(presenter)

          return (
            <div key={slug}>{title}</div>
          )
        })}
    </Layout>
  )
}

export default Events
