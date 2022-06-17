import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import Card from '../templates/Card'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {
        data.allNodeArticle.nodes.map(( node ) => (
          <Card
            id={node.drupal_internal__nid}
            key={node.drupal_internal__nid}
            title={node.title}
            body={node.body.summary}
          />
        ))
      },
      {
        data.allNodePage.nodes.map(( node2 ) => (
          <Card
            id={node2.drupal_internal__nid}
            key={node2.drupal_internal__nid}
            title={node2.title}
            body={node2.body.summary}
          />
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  {
    allNodeArticle(sort: {fields: [created], order: DESC}) {
      nodes {
        drupal_internal__nid
        title
        body {
          value
          summary
        }
      }
    }
    allNodePage(sort: {fields: [created], order: DESC}) {
      nodes {
        drupal_internal__nid
        title
        body {
          value
          summary
        }
      }
    }
  }
`

export default IndexPage
