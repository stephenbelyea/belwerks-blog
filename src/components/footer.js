import React from "react";
import { LINKS } from "../constants";

const year = new Date().getFullYear();

function LinkGatsby() {
  return (
    <a href={LINKS.GATSBY} target="_blank" rel="noreferrer">
      in React with Gatsby
    </a>
  );
}

function LinkTheme() {
  return (
    <a href={LINKS.THEME} target="_blank" rel="noreferrer">
      Gatsby Starter Blog theme
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <p className="text-centre no-margin small">
        &copy;{year}
        <strong><span className="red">bel</span>werks</strong> | Stephen Belyea
      </p>
      <p className="text-centre no-margin small">
        <em>Built <LinkGatsby /> on top of the <LinkTheme /></em>.
      </p>
    </footer>
  );
}

export default Footer
