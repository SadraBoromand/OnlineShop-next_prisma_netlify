import Head from "next/head";
import React from "react";
import Script from "next/script";

const Layout = ({title, children}) => {
    return (
        <>
            <Head>
                <title>فروشگاه گل - {title}</title>
                <link rel="icon" type="image/png" href="/assets/flower.png"/>
            </Head>

            {children}

            <Script src='/assets/bootstrap/bootstrap.min.js'></Script>
        </>
    );
};

export default Layout;
