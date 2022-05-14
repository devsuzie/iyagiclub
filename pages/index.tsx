import 'aos/dist/aos.css';
import AOS from 'aos';
import MoreStories from '../components/more-stories';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroSection from '../components/sections/hero-section';
import styled from '@emotion/styled';
import DescriptionSection from '../components/sections/description-section';
import Link from 'next/link';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  // todo: Add english later
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
                <Image src="/logo.svg" alt="logo" width="110px" height="110px" />
              </Link>
            </H1>
            <StyledNav>
              <Link href="#stories">
                <Menu>STORIES</Menu>
              </Link>
            </StyledNav>
          </StyledHeader>
          {typeof window !== 'undefined' && <HeroSection />}
        </HeroSectionContainer>

        <DescriptionContainer className="w-full">
          <DescriptionSection isKorean={isKorean} />
        </DescriptionContainer>

        <div id="stories" className="pt-10 pb-25 w-full mx-auto px-5 sm:w-4/6">
          <MoreStories posts={allPosts} />
        </div>

        {/* todo: Generate Footer component */}
        <footer className="bg-black text-white py-12 sm:py-24">
          <p className="w-full mx-auto font-futura font-bold text-4xl px-5 sm:w-4/6">iyagiclub</p>
          <p className="w-full mx-auto mt-8 flex items-center px-5 sm:w-4/6">
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
  z-index: 100;
  padding: 20px;
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  top: 0;
  padding-left: 35px;

  @media (min-width: 840px) {
    flex-direction: row-reverse;
  }
`;

const H1 = styled.h1`
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 840px) {
    position: absolute;
    left: calc(50% - 55px);
  }
`;

const StyledNav = styled.nav`
  padding-top: 15px;
`;

const Menu = styled.a`
  font-family: 'Futura';
  font-weight: bold;
  color: #ffffff;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 0.25em;
  }
`;

const HeroSectionContainer = styled.section`
  background-color: #041138;
`;

const DescriptionContainer = styled.section`
  background-color: #b4d8fa;
  display: flex;
  flex-direction: column;

  font-family: 'Avenir Next';
  font-weight: bold;
  font-size: 40px;

  padding-bottom: 100px;
  padding: 0 20px;
  padding-bottom: 50px;

  @media (min-width: 640px) {
    font-size: 48px;
  }
`;

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
