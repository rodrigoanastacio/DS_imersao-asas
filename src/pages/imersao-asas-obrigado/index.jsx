import Head from 'next/head';

import { FaWhatsapp } from 'react-icons/fa';

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
          <h1>Quase lá!</h1>
          <p>
            Para não perder nenhuma informação do evento,{' '}
            <strong>
              entre para o grupo exclusivo do Whatsapp clicando no botão abaixo.
            </strong>{' '}
          </p>
          <p>Aqui vou compartilhar informações extras sobre a Imersão!</p>
          <a href="https://chat.whatsapp.com/F2QEygpMehYHryBxwe49i5">
            <span>
              <FaWhatsapp />
            </span>{' '}
            Entre no grupo exclusivo do Whatsapp
          </a>
        </Headline>
      </Hero>
    </>
  );
}
