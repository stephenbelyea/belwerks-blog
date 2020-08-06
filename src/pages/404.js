import React from "react";
import { Link } from "gatsby";
import { Layout, SEO } from "../components";
import { ROUTES } from "../constants";

function NotFoundPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Not Found" />
      <h1>Not found</h1>
      <p>
        Looks like you're trying to reach a page or post that does not exist.
      </p>
      <p>
        <Link to={ROUTES.HOME}>Back to home</Link>
      </p>
    </Layout>
  );
}

export default NotFoundPage;
