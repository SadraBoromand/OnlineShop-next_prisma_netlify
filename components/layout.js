import Head from "next/head";
import React from "react";
import Script from "next/script";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      {/* main body */}
      <div className="container-sm mb-5">{children}</div>
      {/* end main body */}

      <Footer />

      <script src="/assets/js/jquery-2.1.0.min.js"></script>
      <Script src="/assets/js/popper.js"></Script>
      <Script src="/assets/js/bootstrap.min.js"></Script>
      <script src="/assets/js/owl-carousel.js"></script>
      <Script src="/assets/js/accordions.js"></Script>
      <Script src="/assets/js/datepicker.js"></Script>
      <Script src="/assets/js/scrollreveal.min.js"></Script>
      <Script src="/assets/js/waypoints.min.js"></Script>
      <Script src="/assets/js/jquery.counterup.min.js"></Script>
      <Script src="/assets/js/imgfix.min.js"></Script>
      <Script src="/assets/js/slick.js"></Script>
      <Script src="/assets/js/lightbox.js"></Script>
      <Script src="/assets/js/isotope.js"></Script>
      <Script src="/assets/js/custom.js"></Script>
      <Script src="/assets/js/costum.js"></Script>
    </>
  );
};

export default Layout;
