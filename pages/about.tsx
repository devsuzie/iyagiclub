import React from 'react'
import Image from 'next/image'
import Layout from "../components/layout";
import styled from "@emotion/styled";

import logoImage from '../public/assets/logo/logo-string.svg';

const About = () => {
  return (
    <Layout>
      <Container className="flex mx-auto flex-col mt-10 xl:mt-0 xl:flex-row mb-20 xl:mb-0 px-6 xl:px-0 max-w-lg xl:max-w-5xl">
        <section className="max-w-sm mb-20 xl:w-2/5 xl:mb-0">
          <Image src={logoImage} alt="logo" />
        </section>
        <section className="font-futura font-semibold w-full xl:w-3/5 xl:pl-28">
          <h3 className="pb-5 font-extrabold">
            이야기가 펼쳐지는 곳: 이야기 클럽
          </h3>
          <p className="pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </section>
      </Container>
    </Layout>
  );
}

export default About

const Container = styled.div`
  align-items: center;
  height: calc(100vh - 92px);
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;
