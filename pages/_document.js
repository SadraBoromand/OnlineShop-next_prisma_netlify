import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="fa" dir='rtl'>
            <Head>
                <link rel="stylesheet" href="/assets/bootstrap/bootstrap.min.css"/>
                <link rel="stylesheet" href="/assets/bootstrap/bootstrap-icons.min.css"/>
                <link rel="stylesheet" href="/assets/fonts/font.css"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
