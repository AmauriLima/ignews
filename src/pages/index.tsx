import Head from 'next/head';

import Avatar from '../assets/images/avatar.svg';
import { Container, Hero } from '../styles/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <Container>
        <Hero>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acces to all the publication <br />
            <span>for $9.90 month</span>
          </p>
        </Hero>
        <Avatar />

      </Container>
    </>
  );
}
