import React from "react";
import { Link } from "gatsby";
import { ROUTES } from "../constants";

function HomeLink() {
  return (
    <div className="home-link">
      <Link to={ROUTES.HOME} className="heading">
        Home
      </Link>
    </div>
  );
}

export default HomeLink;
