import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="pt-br">
        <Head>
        <title>Inácio Sites</title>
        <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Desenvolvedor web freelancer"
          />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta name="keywords"  content="site, freelancer, blog, portfolio, desenvolvimento web, html, css, react js, javascript, next js"/>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />

          {/* <!-- Open Graph  --> */}
          <meta property="og:site_name" content="inacio sites"/>
          <meta property="og:title" content="inacio sites" />
          <meta property="og:description" content="Desenvolvedor Web Freelancer"/>
          <meta property="og:image" content="/inaciosites.png"/>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://inaciosites.com.br" />
          <meta property="fb:app_id" content="100677955001722" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: "Roboto", sans-serif;
          }
        `}</style>
      </html>
    );
  }
}
