import React from 'react';
import { Layout } from '../components';
import '../styles.css';

function BlogIndex({ location, data }) {
  console.log('data', data)

  const { siteMetadata } = data.site;
  return (
    <Layout title="Blog" location={location}>
      <p>hello there</p>
    </Layout>
  )
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`