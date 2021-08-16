import Head from 'next/head';

import Hero from '../../components/Hero';
import Headline from '../../components/Headline';

export default function Obrigado() {
  return (
    <>
      <Head>
        <title>Parabéns, seu e-mail foi cadastrado | Imersão Asas</title>
        <meta
          name="description"
          content="Parabéns, você cadastrou seu e-mail "
        />
      </Head>
      <Hero>
        <Headline>
          <h1>Obrigado</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            officiis enim ipsum ad tempore corporis minima nemo vero commodi
            hic!
          </p>
          <a href="#">Entre no grupo exclusivo do Whatsapp</a>
        </Headline>
      </Hero>
    </>
  );
}
