import Head from 'next/head';
import { AppProps } from 'next/app';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        {pageProps.seo && (
          <>
            <meta name="title" content={pageProps.seo.title} />
            <meta name="description" content={pageProps.seo.description} />
            <meta property="og:title" content={pageProps.seo.title} />
            <meta property="og:description" content={pageProps.seo.description} />
            <meta property="og:image" content={pageProps.seo.image} />
            <meta property="og:url" content={pageProps.seo.url} />
            <link rel="canonical" href={pageProps.seo.url} />
            <title>{pageProps.seo.title}</title>

            {/* twitter */}
            <meta name="twitter:card" content='summary_large_image' />
            <meta name="twitter:title" content={pageProps.seo.title} />
            <meta name="twitter:description" content={pageProps.seo.description} />
            <meta name="twitter:image:src" content={pageProps.seo.image} />
            <meta property="twitter:url" content={pageProps.seo.url} />
            </>
        )
        }
        <script src="https://developers.kakao.com/sdk/js/kakao.js" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
