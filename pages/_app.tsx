import Head from "next/head";
import { AppProps } from "next/app";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "../styles/index.css";
import { TITLE } from "../lib/constants";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <title>{TITLE}</title>
        <script src="https://developers.kakao.com/sdk/js/kakao.js" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
