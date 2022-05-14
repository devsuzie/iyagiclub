import React, { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useScroll } from '../../lib/hooks/use-scroll';

const HeroSection = () => {
  const { scrollY } = useScroll();

  return (
    <HeroSectionContainer>
      <Stars>
        <Image
          src="/assets/illustration/stars.png"
          alt="yellow star"
          layout="fill"
          objectFit="cover"
        />
      </Stars>

      <Rocket animate={scrollY}>
        <Image src="/assets/illustration/rocket.png" alt="rocket" layout="fill" objectFit='contain' />
      </Rocket>
    </HeroSectionContainer>
  );
};

const HeroSectionContainer = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-around;
  transition-duration: 500ms;
  overflow: hidden;
  height: 100vh;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #041138, transparent);
    z-index: 1;
  }
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: pulse infinite;
  animation-duration: 1.5s;

  @keyframes pulse
	0%
		transform: scale(1)

	50%
		transform: scale(1.5)

	100%
		transform: scale(1);
`;

const Rocket = styled.div<{ animate: number }>`
  position: absolute;
  top: ${({ animate }) => (animate ? animate * 1.05 + 300 : 300)}px;
  width: 400px;
  height: 400px;

  @media (max-width: 640px) {
    width: 300px;
    height: 300px;
  }
`;

export default HeroSection;
