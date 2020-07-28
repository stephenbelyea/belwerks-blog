import React from "react";
import { Layout } from "../components";

function BlogIndex({ location, data }) {
  return (
    <Layout title="Welcome" location={location}>
      <h1>Hello there!</h1>
    </Layout>
  );
}

export default BlogIndex;
