import React from "react";
import styled from "styled-components";
import Link from 'next/link'

export const Navbar: React.FC = () => (
  <nav>
    <Container>
      <Logo href="/">Blog</Logo>
      <List>
        <li>
          <Link href="/">
              <Links>Go to Blog</Links>
          </Link>
        </li>
        <li>
          <Link href="/posts/createPost" as="/create/new/post">
              <Links>Create post</Links>
          </Link>
        </li>
      </List>
    </Container>
  </nav>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
  height: 65px;
  background: #090a0b;
`;

const Logo = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 22px;
`;

const List = styled.ul`
  display: flex;
`;

const Links = styled.a`
  margin-right: 25px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
