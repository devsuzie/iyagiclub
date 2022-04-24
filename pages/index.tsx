import 'aos/dist/aos.css';
import AOS from 'aos';
import MoreStories from '../components/more-stories';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import Slider from '../components/slider';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '../components/container';
import Header from '../components/header';
import HeroSection from '../components/sections/hero-section';
import styled from '@emotion/styled';
import Link from 'next/link';
import Nav from '../components/nav';
import DescriptionSection from '../components/sections/description-section';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const [isKorean, setIsKorean] = useState(true);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'view',
      useClassNames: true,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      delay: 0,
      offset: 80,
      duration: 1200,
      easing: 'ease',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Layout>
        <HeroSectionContainer>
          <StyledHeader>
            <H1>
              <Link href="/">
                <a>
                  <Image src="/logo.svg" alt="logo" width="145px" height="145px" />
                </a>
              </Link>
            </H1>
            <StyledNav>
              <Link href="/about">
                <Menu>STORIES</Menu>
              </Link>
              {/* todo: refactor multi language with recoil */}
              <Menu onClick={() => setIsKorean(!isKorean)}>{isKorean ? 'KR' : 'EN'}</Menu>
            </StyledNav>
          </StyledHeader>
          {typeof window !== 'undefined' && <HeroSection />}
        </HeroSectionContainer>

        <DescriptionContainer>
          <DescriptionSection isKorean={isKorean} />
        </DescriptionContainer>

        <StoriesContainer>
          <MoreStories posts={allPosts} />
        </StoriesContainer>

        {/* todo: Generate Footer component */}
        <footer className="bg-black text-white py-24">
          <p className="w-4/6 mx-auto font-futura font-bold text-4xl">iyagiclub</p>
          <p className="w-4/6 mx-auto my-8 flex items-center">
            <span className="mr-4">
              <Image src="/assets/icon/github.png" alt="github" width={40} height={40} />
            </span>
            <span className="mr-4">
              <Image src="/assets/icon/twitter.png" alt="twitter" width={40} height={40} />
            </span>
            <Image src="/assets/icon/rss.png" alt="rss" width={30} height={30} />
          </p>
        </footer>
      </Layout>
    </>
  );
};

const StyledHeader = styled.header`
  padding: 0 35px;
  position: relative;
  height: 145px;
  margin-bottom: 200px;
`;

const H1 = styled.h1`
  position: absolute;
  top: 0;
  left: calc(50% - 72.5px);
`;

const StyledNav = styled.nav`
  font-family: 'Futura';
  font-weight: bold;
  color: #ffffff;
  float: right;
  height: 51px;
  line-height: 51px;
`;

const Menu = styled.a`
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 0.25em;
  }
`;

const HeroSectionContainer = styled.section`
  padding-top: 35px;
  background-color: #041138;
`;

const DescriptionContainer = styled.section`
  background-color: #b4d8fa;
  display: flex;
  flex-direction: column;

  font-family: 'Avenir Next';
  font-weight: bold;
  font-size: 48px;

  padding-bottom: 100px;
`;

const StoriesContainer = styled.section`
  width: 1100px;
  margin: 0 auto;
  padding: 100px 0;
`;

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
