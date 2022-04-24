import React, { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useScroll } from '../../lib/hooks/use-scroll';

const HeroSection = () => {
  const { scrollY } = useScroll();

  return (
    <HeroSectionContainer>
      <YellowStar>
        <Image
          src="/assets/illustration/yellow-star.png"
          alt="yellow star"
          width="150px"
          height="150px"
        />
      </YellowStar>

      <Rocket animate={scrollY}>
        <Image src="/assets/illustration/rocket.png" alt="rocket" width="400px" height="400px" />
      </Rocket>

      <BlueStar>
        <Image
          src="/assets/illustration/blue-star.png"
          alt="blue star"
          width="150px"
          height="150px"
        />
      </BlueStar>
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

const YellowStar = styled.div`
  position: absolute;
  top: 0px;
  left: 300px;

  animation: pulse infinite;
  animation-duration: 0.7s;

  @keyframes pulse
	0%
		transform: scale(1)

	50%
		transform: scale(1.5)

	100%
		transform: scale(1);
`;

const BlueStar = styled.div`
  position: absolute;
  bottom: 400px;
  right: 300px;

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
  top: ${({ animate }) => (animate ? animate * 1.05 : 0)}px;
`;

export default HeroSection;
