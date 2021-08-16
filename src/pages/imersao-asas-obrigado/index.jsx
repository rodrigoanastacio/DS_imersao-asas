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
          <h1>Obrigado e Parabéns por se cadastrar na Imersão Asas!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            perspiciatis cupiditate maxime consectetur voluptatum provident
            distinctio. Ab, perferendis laboriosam repellendus eveniet deserunt
            at laudantium maiores eius, iure perspiciatis minima temporibus
            suscipit, repudiandae nobis ipsam repellat.
          </p>
          <a href="#">Entre no grupo exclusivo do Whatsapp</a>
        </Headline>
      </Hero>
    </>
  );
}
