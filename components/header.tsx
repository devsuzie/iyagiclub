import Link from 'next/link'
import cn from "classnames";
import Image from "next/image";
import Nav from "./nav"
import styled from "@emotion/styled";

const Header = () => {
  return (
    <StyledHeader>
      <H1>
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="logo" width="45px" height="45px" />
          </a>
        </Link>
      </H1>
      <Nav />
    </StyledHeader>
  );
}

export default Header

const StyledHeader = styled.header`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  height: 51px;
`;

const H1 = styled.h1`
  position: absolute;
  top: 0;
  left: calc(50% - 22.5px);
`
