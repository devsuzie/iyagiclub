import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const Header = () => {
  return (
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
  );
};

export default Header;

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
