import React from "react";
import { graphql } from "gatsby";
import { FeedPost, Layout, SEO, Bio } from "../components";

function BlogIndex({ location, data }) {
  const posts = data.allMarkdownRemark.edges || [];

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} location={location} />
      <h1>
        <span className="red">Hello!</span>
        <small className="block">
          You've reached <span className="red">bel</span>werks.
        </small>
      </h1>
      <Bio />
      {posts.map(({ node }) => (
        <FeedPost post={node} />
      ))}
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
