import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql, Link } from "gatsby";

const year = new Date().getFullYear();
const rootPath = `${__PATH_PREFIX__}/`;

function Layout({ location, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            author
          }
        }
      }
    `
  );

  const titleTemplate =
    location.pathname === rootPath
      ? site.siteMetadata.title
      : `%s | ${site.siteMetadata.title}`;

  return (
    <div className="page">
      <Helmet
        title={title}
        titleTemplate={titleTemplate}
        htmlAttributes={{
          lang: "en",
        }}
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:700|Crimson+Text:400,700"
        />
        <link rel="stylesheet" href="/styles.css" />
      </Helmet>
      <div className="layout">
        <div className="info">
          <Link to="/" className="blog-name heading" aria-label="belwerks blog">
            <span aria-hidden="true">
              <span className="red">bel</span>
              <span className="black">werks blog</span>
            </span>
          </Link>
        </div>
        <main className="main">{children}</main>
        <div className="feed">
          <p>Feed links</p>
        </div>
      </div>
      <footer>
        <p className="text-centre">
          &copy;{year}{" "}
          <a href="http://belwerks.com" className="bold" aria-label="belwerks">
            <span aria-hidden="true">
              <span className="red">bel</span>
              <span className="black">werks</span>
            </span>
          </a>{" "}
          | {site.siteMetadata.author}
        </p>
      </footer>
    </div>
  );
}

export default Layout;
