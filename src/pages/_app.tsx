import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
        <meta http-equiv="Content-Language" content="pt-br"/>
        <meta name='application-name' content='Piggy' />
        <meta name="description" content="Piggy é a ferramenta de código aberto mais fácil de organizar e gerenciar suas finanças enquanto aprende! Seu porquinho digital." />
        <meta name="keywords" content="piggy porquinho hub Piggy financas tracker expense dinheiro ruymon" />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Piggy' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name="theme-color" content="#4CA145" />




        <title>Piggy</title>

        <link rel="manifest" href="/manifest.json" />

        <link href="/icons/icon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/icon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}
