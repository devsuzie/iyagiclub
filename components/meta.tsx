import Head from 'next/head';
import { TITLE, HOME_OG_IMAGE_URL } from '../lib/constants';

interface Props {
  description?: string;
  url?: string;
}

const Meta = ({description, url}: Props) => {
  return (
    <Head>
      <meta name="description" content={`이야기가 펼쳐지는 곳, ${TITLE}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:creator" content="@iyagiclub" />
      <meta name="twitter:title" content="이야기가 펼쳐지는 곳, 이야기 클럽" />
      <meta name="twitter:description" content={description ? description : ''} />
      <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
};

export default Meta;
