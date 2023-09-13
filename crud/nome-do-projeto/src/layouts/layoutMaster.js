import React from "react";
import Footer from "../includes/Footer";
import Header from "../includes/Header";

function layoutMaster({ children }) {
  return (
    <>
    <Header/>
      <main id="content" class="main-content-wrapper">
        {children}
      </main>
      <div className="wrapper bg--zircon-light color-scheme-1">
        <Footer />
      </div>
    </>
  );
}

export default layoutMaster;
