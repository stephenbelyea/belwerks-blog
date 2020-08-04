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
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,700&family=Montserrat:wght@600&display=swap"
        />
        <link rel="stylesheet" href="/styles.css" />
      </Helmet>
      <div className="layout">
        <div className="info">
          <Link to="/" className="blog-name heading" aria-label="belwerks blog">
            <span className="logo" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 91" width="110">
                <circle cx="42" cy="14" r="12" stroke="#353434" stroke-width="3" fill="none"></circle>
                <circle cx="70" cy="28" r="12" stroke="#353434" stroke-width="3" fill="none"></circle>
                <circle cx="14" cy="63" r="8" fill="#cf1020"></circle>
                <circle cx="14" cy="63" r="12" stroke="#353434" stroke-width="3" fill="none"></circle>
                <circle cx="42" cy="77" r="12" stroke="#353434" stroke-width="3" fill="none"></circle>
                <circle cx="70" cy="63" r="12" stroke="#353434" stroke-width="3" fill="none"></circle>
                <line x1="14" x2="70" y1="45.5" y2="45.5" stroke="#353434" stroke-width="3"></line>
                <line x1="42" x2="42" y1="26" y2="64" stroke="#353434" stroke-width="3"></line>
                <line x1="14" x2="14" y1="44" y2="50" stroke="#353434" stroke-width="3"></line>
                <line x1="70" x2="70" y1="40" y2="50" stroke="#353434" stroke-width="3"></line>
              </svg>
            </span>
            <span aria-hidden="true">
              <span className="red">bel</span>
              <span className="black">werks blog</span>
            </span>
          </Link>
        </div>
        <main className="main">
          {children}
        </main>
        <footer>
          <p className="text-centre no-margin small">
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
    </div>
  );
}

export default Layout;
