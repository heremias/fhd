import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'

const PageDefault = ({ data }) => {
  const node = data.nodePage
  return (
    <Layout>
      <h2>{node.title}</h2>
    </Layout>
  )
}

export const query = graphql`
  query($nodeId: Int!){
    nodePage(drupal_internal__nid: {eq: $nodeId}) {
      drupal_internal__nid
      title
    }
  }
`

export default PageDefault

