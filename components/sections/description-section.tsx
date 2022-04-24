import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

interface Props {
  isKorean: boolean;
}

interface DescriptionProps {
  text: React.ReactChild;
  image?: any;
}

const DescriptionSection = ({ isKorean }: Props) => {
  const EARTH_IMAGE = {
    src: '/assets/illustration/earth.png',
    alt: 'earth illustration',
    width: 200,
    height: 200,
  };

  const Description = ({ text, image }: DescriptionProps) => {
    return (
      <ParagraphContainer
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out-quad"
      >
        <p>{text}</p>

        {image && (
          <span>
            <Image
              src={image.src}
              alt={image.alt}
              width={`${image.width}px`}
              height={`${image.height}px`}
            />
          </span>
        )}
      </ParagraphContainer>
    );
  };

  return (
    <>
      <Description
        text={
          isKorean ? (
            <>
              <Highlight color="#52BE6A">지구</Highlight>에는 <br />
              흥미로운 이야기가
              <br />
              아주 많이 있습니다
            </>
          ) : (
            <>
              There is a lot of
              <br />
              interesting stories
              <br />
              in the <Highlight color="#52BE6A">earth</Highlight>
            </>
          )
        }
      />

      <Description
        text={
          isKorean ? (
            <>
              그래서 이 이야기들을 <br />
              내보내기로 했어요
            </>
          ) : (
            <>
              So I decided to lunch
              <br />
              those stories
              <br />
              to infinity and
              <br />
              beyond
            </>
          )
        }
      />

      <Description
        text={
          isKorean ? (
            <>
              바로 ....
              <br />
              무한한 <Highlight color="#0C54B6">인터넷</Highlight> 공간 <br />
              너머로 말이죠!
            </>
          ) : (
            <>
              ....
              <br />
              the <Highlight color="#0C54B6">internet</Highlight> world!
            </>
          )
        }
        image={EARTH_IMAGE}
      />

      <Description
        text={
          isKorean ? (
            <>
              그럼 <Highlight color="#FFFFFF">이야기</Highlight>를 <br />
              들으러 가볼까요?
            </>
          ) : (
            <>
              besides,
              <br />
              <Highlight color="#FFFFFF">iyagi</Highlight> is meaning of
              <br />
              <Highlight color="#FFBD1F">story</Highlight> in korean
            </>
          )
        }
      />
    </>
  );
};

const ParagraphContainer = styled.div`
  padding: 150px 0;
  width: 800px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

const Highlight = styled.span<{ color: string }>`
  color: ${({ color }) => (color ? color : 'inherit')};
`;

export default DescriptionSection;
