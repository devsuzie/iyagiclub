import Head from 'next/head';
import { TITLE, HOME_OG_IMAGE_URL } from '../lib/constants';

const Meta = () => {
  return (
    <Head>
      <meta name="description" content={`이야기가 펼쳐지는 곳, ${TITLE}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
};

export default Meta;
