import Head from 'next/head';
import { TITLE, HOME_OG_IMAGE_URL } from '../lib/constants';

interface Props {
  description?: string;
}

const Meta = ({description}: Props) => {
  return (
    <Head>
      <meta name="description" content={`이야기가 펼쳐지는 곳, ${TITLE}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@iyagiclub" />
      <meta name="twitter:creator" content="@iyagiclub" />
      <meta name="twitter:title" content="이야기가 펼쳐지는 곳, 이야기 클럽" />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Meta;
