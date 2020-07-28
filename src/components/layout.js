import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby'

function Layout({ location, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const rootPath = `${__PATH_PREFIX__}/`;
  const titleTemplate = location.pathname === rootPath
    ? site.siteMetadata.title
    : `%s | ${site.siteMetadata.title}`;

  return (
    <div className="page">
      <Helmet
        title={title}
        titleTemplate={titleTemplate}
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
      </Helmet>
      <div className="layout">
        <div className="info">
          <p>Site info</p>
        </div>
        <main className="main">
          <p>Page content</p>
        </main>
        <div className="feed">
          <p>Feed links</p>
        </div>
        {/* <header>
          <h1>{title}</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>&copy;</p>
        </footer> */}
      </div>
    </div>
  )
}

export default Layout;
