import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { TITLE } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import Link from 'next/link';
import styled from '@emotion/styled';
import copy from 'copy-to-clipboard';
import { BASE_PATH } from '../../constants/idex';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Meta from '../../components/meta';
import { useLocation } from 'react-router-dom';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const URL = `${BASE_PATH}${router.asPath}`;

  const handleShareClick = () => {
    toast.success('복사되었습니다.', {
      position: toast.POSITION.BOTTOM_RIGHT,
      icon: false,
    });
    copy(`${post.author.role} ${post.author.name}님의 이야기\n"${post.title}"\n${URL}`);
  };

  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>

          <div className="max-w-2xl mx-auto mb-28">
            <Button>
              <Link href="/#stories">돌아가기</Link>
            </Button>
            <Button onClick={handleShareClick}>공유하기</Button>
            <StyledContainer hideProgressBar={true} autoClose={1500} limit={2} draggablePercent={60} />
          </div>
        </>
      )}
    </Container>
  );
};

export default Post;

const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
    width: 250px;

    @media (max-width: 480px) {
      padding: 24px;
      width: 100%;
    }
  }
  .Toastify__toast {
    color: black;
    font-weight: bold;
    border-radius: 0.5rem;
    border: 1px solid black;
    box-shadow: 5px 5px 0 0 black;
  }
  .Toastify__toast-body {
  }
`;

const Button = styled.button`
  display: inline;
  font-weight: bold;
  border-radius: 0.5rem;
  border: 1px solid black;
  box-shadow: 3px 3px 0 0 black;
  padding: 5px 10px;

  &:nth-child(1) {
    margin-right: 10px;
  }

  &:hover {
    box-shadow: 4px 4px 0 0 black;
  }
`;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
      seo: {
        title: post.title,
        description: post.excerpt,
        image: post.coverImage,
        url: `${BASE_PATH}/${post.slug}`,
      }
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
