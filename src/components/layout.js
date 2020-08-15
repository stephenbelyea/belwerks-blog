import React from "react";
import Social from "./social";
import Footer from "./footer";
import LogoLink from "./logo-link";
import HomeLink from "./home-link";
import { ROUTES } from "../constants";

function Layout({ children, location }) {
  return (
    <div className="page">
      <div className="layout">
        <div className="info">
          <LogoLink />
          {location.pathname !== ROUTES.HOME && <HomeLink />}
          <Social />
        </div>
        <main className="main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
