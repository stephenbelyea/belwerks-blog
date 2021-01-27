import React from "react";
import { Link, graphql } from "gatsby";
import { Layout, SEO } from "../components";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;
    const { location } = this.props;

    return (
      <Layout location={location}>
        <SEO
          location={location}
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

        <div className="discuss">
          <h2>Keep the discussion going</h2>
          <p>
            Like anything you've read? Have something to add? Let's move the conversation over to a forum where others can join in.
          </p>
          <p>
            <a href="https://twitter.com/intent/tweet?text=@belwerks%20" target="_blank" rel="noreferrer" className="bold">
              Reply to @belwerks on Twitter
            </a>.
          </p>
        </div>

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
