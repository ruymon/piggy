import Head from 'next/head';


import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
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

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://piggy.gq' />
        <meta name='twitter:title' content='Piggy' />
        <meta name='twitter:description' content='Seu porquinho digital. A ferramenta de código aberto que facilita a organização de suas finanças enquanto aprende!' />
        <meta name='twitter:creator' content='@ruymon' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Piggy' />
        <meta property='og:description' content='Best PWA App in the world' />
        <meta property='og:site_name' content='Piggy' />
        <meta property='og:url' content='https://piggy.gq' />

        <title>Piggy</title>

        <link rel="manifest" href="/manifest.json" />

        <link rel='shortcut icon' href='/favicon.ico' />
        <link href="/icons/icon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/icon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

      </Head>
      <>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    </>
  );
}
