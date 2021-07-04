import React from "react";
import Container from "./container";
import Header from "./header";
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Container>
        <Header />
      </Container>
      <main>{children}</main>
    </>
  );
}

export default Layout
