import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import styled from '@emotion/styled';

import logoImage from '../public/assets/logo/logo-string.svg';
import Post from '../types/post';
import MoreStories from '../components/more-stories';
import { getAllPosts } from '../lib/api';

type Props = {
  allPosts: Post[];
};

const About = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Container className="flex mx-auto flex-col mt-10 mb-20 max-w-lg lg:mt-0 lg:flex-row lg:mb-0 px-6 lg:px-0 lg:max-w-5xl">
        <MoreStories posts={allPosts} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  align-items: center;
  height: calc(100vh - 92px);
  justify-content: center;

  @media (max-width: 1024px) {
    height: auto;
  }
`;

export default About;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'quote']);

  return {
    props: { allPosts },
  };
};
