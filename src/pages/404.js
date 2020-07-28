import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components";

function NotFoundPage({ location }) {
  return (
    <Layout location={location} title="Not Found">
      <h1>Not found</h1>
      <p>
        Looks like you're trying to reach a page or post that does not exist.
      </p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Layout>
  );
}

export default NotFoundPage;
