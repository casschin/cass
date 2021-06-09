import Head from "next/head";
import { Logo } from "./components/Logo";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Cass</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Nav>
        <Logo width={40} />
      </Nav>
      <Main>
        <H1>
          <WelcomeText>Welcome to</WelcomeText>
          <CassText>Cass</CassText>
          <CorpText>Corp.</CorpText>
        </H1>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 88px 1fr 88px;
`;

const Nav = styled.nav`
  width: 100%;
  padding: 24px;
`;

const Main = styled.main`
  padding: 24px;
  align-self: center;
`;

const H1 = styled.h1`
  margin: 0;
`;

const HeadingText = styled.span`
  display: inline-block;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 5rem;
  line-height: 1em;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const WelcomeText = styled(HeadingText)`
  display: block;
  font-size: 2rem;
  text-transform: none;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const CassText = styled(HeadingText)`
  font-weight: 800;
`;

const CorpText = styled(HeadingText)`
  font-weight: 300;
`;
