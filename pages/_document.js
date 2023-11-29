import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/font-awesome.css"
        />
        <link rel="stylesheet" href="/assets/css/templatemo-hexashop.css" />
        <link rel="stylesheet" href="/assets/css/owl-carousel.css" />
        <link rel="stylesheet" href="/assets/css/lightbox.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
