import React from "react";
import Social from "./social";
import Footer from "./footer";
import LogoLink from "./logo-link";

function Layout({ children }) {
  return (
    <div className="page">
      <div className="layout">
        <div className="info">
          <LogoLink />
          <Social />
        </div>
        <main className="main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
