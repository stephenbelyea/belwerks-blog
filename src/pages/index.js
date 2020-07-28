import React from 'react';
import { Layout } from '../components';

function BlogIndex({ location, data }) {

  return (
    <Layout title="Belwerks Blog" location={location}>
      <p>Hello there</p>
    </Layout>
  )
}

export default BlogIndex;