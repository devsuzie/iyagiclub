import Link from 'next/link';
import styled from '@emotion/styled';

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/about">
        <Menu>STORIES</Menu>
      </Link>
    </StyledNav>
  );
};

export default Nav;

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
