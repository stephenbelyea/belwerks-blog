import React from "react";
import { Link, graphql } from "gatsby";
import { Layout } from "../components";

function BlogIndex({ location, data }) {
  const posts = data.allMarkdownRemark.edges || [];

  return (
    <Layout title="Welcome" location={location}>
      <h1>Hello there!</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article className="post-feed" key={node.fields.slug}>
            <header>
              <h2>
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
              <p className="small dark-red">{node.frontmatter.date}</p>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
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
