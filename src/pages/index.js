import Head from 'next/head';

import Hero from '../components/Hero';
import Headline from '../components/Headline';

export default function Home() {
  return (
    <>
      <Head>
        <title>Imersão Asas | Dayane Silva</title>
        <meta
          name="description"
          content="Nesse evento eu vou te mostrar as estratégias certas que vão te ajudar a vender mais no Instagram!"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Imsersão Asas, conheça as estratégias para vender mais no Instagram"
        />
        <meta
          property="og:description"
          content="Nesse evento você vai conhecer as estratégias certas que vão te ajudar a vender mais no Instagram!"
        />
        <meta property="og:url" content="https://imersao.dayanesilva.com.br" />
        <meta property="og:site_name" content="Dayane Silva" />
        <meta
          property="og:image"
          content="https://imersao.dayanesilva.com.br/imersao-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <Hero>
        <Headline>
          <h1>
            Aumente a percepção de valor da sua marca por meio do conteúdo
            estratégico, posicionamento e marca pessoal para{' '}
            <strong>vender mais no Instagram</strong>
          </h1>
          <p>
            A Imersão vai acontecer nos dias <strong>28 e 29 de Agosto!</strong>{' '}
            Então já anota na agenda para não esquecer!
          </p>
          <form
            id="sib-form"
            method="POST"
            action="https://04c4e6f3.sibforms.com/serve/MUIEAFjnDl_2LPLWdoUIZlAQH_J-kjaneoaCdlolC-UaeteRenTCTUBTb5jCsjgzXgcV_T2Ixja5whB-SuvWrdPWvteDbaaq5xIWhnhvUfHPFSKCxGncmQBMc5swekj8oAYaO3PXqZ4dKXJchKgOz35xdeEVTApiYKlETMB7ESObGlJs2n2Qd6rIBOdGps36fSGhmOpew7IhUn29"
          >
            <input
              type="email"
              id="EMAIL"
              name="EMAIL"
              placeholder="EMAIL"
              data-required="true"
              required
            />
            <button form="sib-form" type="submit">
              Quero mais detalhes da Imersão
            </button>
            <input type="hidden" name="locale" value="pt" />
            <input type="hidden" name="html_type" value="simple" />
          </form>
        </Headline>
      </Hero>
    </>
  );
}
