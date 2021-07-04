import Link from "next/link";
import styled from "@emotion/styled";

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/about">
        <Menu>이야기클럽</Menu>
      </Link>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  float: right;
  height: 51px;
  line-height: 51px;
`;

const Menu = styled.a`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
  }
`;
