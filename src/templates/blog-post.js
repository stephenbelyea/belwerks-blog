import React from "react";
import { Link, graphql } from "gatsby";
import { Layout, SEO } from "../components";
import { ROUTES } from "../constants";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <SEO
          location={this.props.location}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <article className="post">
          <header>
            <h1>{post.frontmatter.title}</h1>
            <div className="post-meta heading small dark-grey">
              <p className="post-author">Stephen Belyea</p>
              <p className="post-date">{post.frontmatter.date}</p>
            </div>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <nav className="post-nav heading">
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <span className="visually-hidden">previous post </span>
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <span className="visually-hidden">next post </span>
                  {next.frontmatter.title}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
