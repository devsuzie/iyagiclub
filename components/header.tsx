import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import Nav from './nav';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <StyledHeader>
      <H1>
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="logo" width="145px" height="145px" />
          </a>
        </Link>
      </H1>
      <Nav />
    </StyledHeader>
  );
};

export default Header;

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
