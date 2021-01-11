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
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
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