/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
import React from 'react';
import Head from 'next/head';
import { Typography, Box } from '@material-ui/core';
import PageNavbar from '../layouts/Navbar/index';
import Footer from '../components/Footer/index';
import { useStyles } from '../styles/pages/sobrePageStyle';

function SectionHeader(props) {
  const classes = useStyles();
  const {
    title, toolColor,
  } = props;

  return (
    <Box className={classes.toolSectionHeader} style={{ color: toolColor }}>
      <Typography component="div" variant="h2">
        <Box className={`${classes.typography} ${classes.typograhyTitle}`}>
          {title}
        </Box>
      </Typography>

      <Box p={1} flexGrow={1} alignSelf="center">
        <hr style={{ borderColor: toolColor }} />
      </Box>
    </Box>
  );
}

function Sobre() {
  const classes = useStyles();

  function AnchorTag(props) {
    const { url, children } = props;
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#F1EA67', textDecoration: 'none' }}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>Sobre</title>
      </Head>
      <Box className={classes.box}>
        <Box className={classes.boxHeader}>
          <PageNavbar value={3} />
        </Box>
        <Box className={classes.boxContent}>
          <Box className={classes.textBoxMargin}>
            <Typography variant="h1" className={`${classes.typography} ${classes.typograhyTitle}`}>
              Sobre o painel da participação
            </Typography>
            <Typography className={`${classes.typography} ${classes.typographyTitleCaption}`}>
              Critérios e definições adotados para apresentação dos dados
            </Typography>
            <Box>
              <Typography className={`${classes.typography} ${classes.typographyTitleText}`}>
                O que é e como funciona o Painel da Participação.
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row-reverse">
            <div className={classes.lineDividerGradientColor} />
          </Box>

          <Box className={classes.textBoxMargin}>
            <Typography variant="h2" className={`${classes.typography} ${classes.typograhyH2}`}>
              Objetivo
            </Typography>
            <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
              O
              {' '}
              <b>painel da participação</b>
              {' '}
              foi desenvolvido para mostrar o histórico de utilização de dois dos
              {' '}
              <AnchorTag url="https://www2.camara.leg.br/participacao/saiba-como-participar">canais de participação</AnchorTag>
              {' '}
              da Câmara dos Deputados, que estão disponíveis na
              {' '}
              <AnchorTag url="https://edemocracia.camara.leg.br/sobre/">plataforma eDemocracia</AnchorTag>
              .
            </Typography>
            <Typography variant="h2" className={`${classes.typography} ${classes.typograhyH2}`}>
              Atualização
            </Typography>
            <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
              O processo de consolidação dos dados acontece após as 23h59 (horário de Brasíla). Portanto, o resultado da pesquisa estará limitado ao dia anterior. A data da última atualização está disponível abaixo dos gráficos ou tabelas.
              {' '}
            </Typography>

            <Typography variant="h2" className={`${classes.typography} ${classes.typograhyH2}`}>
              Critérios Comuns
            </Typography>

            <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
              Participação
            </Typography>
            <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
              Considera-se participação - para efeito dos dados exibidos no painel -  toda ação de interação nas ferramentas, realizada apenas pelos usuários logados, tais como: envio de mensagens, perguntas, opiniões ou votos em perguntas ou opiniões de outros cidadãos.
            </Typography>

            <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
              Usuários cadastrados
            </Typography>
            <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
              Usuários são todos aqueles que realizaram cadastro para utilizar as ferramentas de participação. Não importa nessa definição se os usuários logados efetivamente participaram, se somente se cadastraram ou se apenas visualizaram os conteúdos.
            </Typography>

            <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
              Participantes
            </Typography>
            <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
              Participantes são os usuários que realizaram uma ou mais interações efetivas , que são contabilizadas como participação - a exemplo de perguntar, enviar mensagens, opinar ou votar.  Um único participante pode realizar uma ou mais  ações, em distintos momentos, mas sua presença será contabilizada uma única vez dentro do período escolhido na busca.
              {' '}
            </Typography>
            <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
              Como cada participante é contabilizado uma única vez por período, o total de um ano não será a simples soma de todos os meses, de modo a evitar contagens repetidas do mesmo participante.  Se, por exemplo, um mesmo participante enviar mensagens em meses diferentes de 2019, será contabilizada sua participação distintamente em cada um desses meses, mas se a busca for referente ao ano inteiro (ou mesmo a todo o período disponível), o mesmo participante será contabilizado uma única vez.
              {' '}
            </Typography>

            <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
              Totais ou números acumulados
            </Typography>
            <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
              Quando o painel mostrar totais ou números acumulados, estes se referem apenas ao período de tempo selecionado na busca.
            </Typography>

            { /* ============================== AUDIENCIAS ============================================ */}
            <>
              <SectionHeader title="Audiências Interativas" toolColor="#F59D2A" />
              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Limitação do período
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O painel da participação exibe os dados de participação referentes à ferramenta Audiências Interativas somente a partir de novembro de 2016.
                {' '}
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                No período de 2009 a 2016, as ferramentas de participação do painel tiveram diferentes versões, cujo conteúdo está disponível para consulta na
                {' '}
                <AnchorTag url="http://arquivo.edemocracia.camara.leg.br/">página de arquivo do antigo portal e-Democracia. </AnchorTag>
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                Os dados disponíveis no painel são relativos à presente versão da ferramenta
                {' '}
                <AnchorTag url="https://edemocracia.camara.leg.br/audiencias/">Audiências Interativas</AnchorTag>
                {' '}
                , em funcionamento a partir de novembro de 2016.
                {' '}
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Totais
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                Os totais referem-se ao somatório dos dados referentes ao período selecionado na busca - que pode ser um mês, um ano ou todo o período.
                {' '}
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O total de participantes inclui apenas  usuários que enviaram mensagens ou perguntas; ou votaram em perguntas de outros participantes. Cada participante é contabilizado uma única vez, mesmo realizando  uma ou mais ações no período escolhido na busca.
                {' '}
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O
                {' '}
                <b>total das audiências</b>
                {' '}
                considera tanto os eventos realizados quanto os cancelados. A soma de
                {' '}
                <b>eventos realizados</b>
                {' '}
                fica disponibilizada na linha abaixo.
                {' '}
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                Toda ação - perguntar, enviar mensagem no chat ou votar em perguntas de outros cidadãos - é considerada nos totais, gráficos e tabelas, independentemente se em uma audiência realizada ou cancelada.
                {' '}
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Distribuição da participação
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                No gráfico de Distribuição da participação no período, são mostrados totais referentes às ações efetuadas pelos participantes:  perguntas, mensagens e votos. A distribuição é feita de acordo com a data em que a ação ocorreu -  primeiramente associando-se ao dia, depois ao mês e por último ao ano -  a depender do período selecionado na busca.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                A distribuição da participação é apresentada de três formas, a depender do período de busca escolhido:  (1) todos os anos disponíveis, caso seja selecionado “Todo o período”, (2) um máximo de 12 meses, caso seja selecionado um determinado ano e “todos os meses”; e (3) o intervalo de até 31 dias, em 1 mês determinado.
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Ranking das audiências
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                A tabela Ranking das audiências permite a discriminação de detalhes referentes às audiências realizadas ou canceladas, bem como os respectivos quantitativos da participação, no período selecionado. A tabela é pré-ordenada pelo maior número de participantes, mas é possível alterar a ordem  nas diferentes colunas.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                Nesta tabela, os somatórios de participantes, perguntas, votos (nas perguntas) e mensagens são contabilizados por audiência. Em outras palavras, o somatório é feito quando já não é mais possível para o cidadão participar, após a audiência (ou evento interativo) ter sido realizada ou cancelada.
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Usuários
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                <b>Novos cadastros</b>
                {' '}
                mostram números contabilizados em função da data em que ocorreram -  primeiramente associando-se ao dia, depois ao mês e por último ao ano -  a depender do período definido na busca.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O
                {' '}
                <b>total de usuários cadastrados</b>
                {' '}
                refere-se ao acúmulo dos novos cadastros durante o período selecionado.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                Os gráficos - a depender do período -  revelam um crescimento repentino de cadastros nos meses de setembro e de novembro de 2017.  A explicação se dá pelo fato de a ferramenta Audiências Interativas ter sido desenvolvida em 2016 com uma base de usuários própria. Em 2017, quando uma nova versão da plataforma  e-Democracia passou a funcionar - para incorporar novas ferramentas de participação que viessem a ser desenvolvidas no LABHacker - , buscou-se a base de usuários do antigo e-Democracia.
                {' '}
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Fonte dos dados
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'yellow' }}
                  href={`${process.env.NEXT_PUBLIC_AUDIENCIAS_SWAGGER_URL}`}
                >
                  API Audiências Interativas
                </a>

              </Typography>

            </>
            { /* ============================== WIKILEGIS ============================================= */}
            <>
              <SectionHeader title="Wikilegis" toolColor="#14D768" />
              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Limitação do período
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O
                {' '}
                <b>painel da participação</b>
                {' '}
                limita-se a exibir os dados de participação da ferramenta Wikilegis a partir de 2019.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                No período de 2009 a 2016, as ferramentas de participação do painel tiveram diferentes versões, cujo conteúdo está disponível para consulta na
                {' '}
                <AnchorTag url="http://arquivo.edemocracia.camara.leg.br/">página de arquivo da antiga plataforma e-Democracia</AnchorTag>
                . O conteúdo da segunda versão da Wikilegis, entre 2016 e 2019, também está
                {' '}
                <AnchorTag url="https://edemocracia.camara.leg.br/wikilegis-arquivo/">disponível para consulta em modo de arquivo</AnchorTag>
                .
                {' '}
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O painel da participação exibe os dados da versão mais atual da Wikilegis, que passou a funcionar a partir de setembro  de 2019.
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Totais
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O somatório dos dados referentes ao período filtrado pelo usuário - pode ser relativo a um mês, um ano ou todo o período.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O total de
                {' '}
                <b>participantes</b>
                {' '}
                inclui usuários que opinaram no texto das propostas legislativas ou votaram em opiniões de outros participantes dentro do período filtrado no painel. É considerado participante um usuário que realizou uma ou mais interações enquanto  a proposta legislativa esteve aberta à participação na Wikilegis e - especificamente -  dentro do período definido na busca.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                Cada participante é contabilizado uma única vez, mesmo realizando  uma ou mais ações dentro do período selecionado na busca.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O total de
                {' '}
                <b>votos</b>
                {' '}
                dos participantes inclui todos: os favoráveis (concordo), desfavoráveis (discordo) e neutros em relação à opinião emitida por outro participante.
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Distribuição da participação
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                No gráfico
                {' '}
                <b>Distribuição da participação no período</b>
                {' '}
                são mostrados os totais referentes às ações dos participantes: opiniões ou votos (nas opiniões de outros participantes). A distribuição é feita de acordo com a data da ação -  associando-se ao dia, ao mês ou ao ano -  a depender do período selecionado.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                A distribuição da participação é apresentada de três formas, a depender do período:  (1) todos os anos disponíveis, caso seja selecionado “Todo o período”, (2) um máximo de 12 meses, caso seja selecionado um determinado ano e “todos os meses”; e (3) o intervalo de até 31 dias, em 1 mês determinado.
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Ranking das propostas legislativas
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                A tabela
                {' '}
                <b>Ranking das propostas legislativas</b>
                {' '}
                detalha quantitativos de participação, no período filtrado. A tabela é pré-ordenada pelo maior  número de participantes, mas pode ser ordenada pelas diferentes colunas.

              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                Os somatórios de participantes, opiniões e votos nas opiniões são contabilizados após a data de encerramento da consulta pública da proposta legislativa. Em outras palavras, os totais são calculados após o encerramento da participação  naquela proposta legislativa.
                {' '}
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Usuários
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                <b>Novos cadastros</b>
                {' '}
                mostram números contabilizados em função da data em que ocorreram -  primeiramente associando-se ao dia, depois ao mês e por último ao ano -  a depender do período definido na busca.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                O
                {' '}
                <b>total de usuários cadastrados</b>
                {' '}
                refere-se ao acúmulo dos novos cadastros durante o período selecionado.
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                Os gráficos - a depender do período -  revelam um crescimento repentino de cadastros nos meses de setembro e de novembro de 2017.  A explicação se dá pelo fato de a ferramenta Audiências Interativas ter sido desenvolvida em 2016 com uma base de usuários própria. Em 2017, quando uma nova versão da plataforma  e-Democracia passou a funcionar - para incorporar novas ferramentas de participação que viessem a ser desenvolvidas no LABHacker - , buscou-se a base de usuários do antigo e-Democracia então unificada ao “login cidadão” da Câmara dos Deputados.
              </Typography>

              <Typography variant="h3" className={`${classes.typography} ${classes.typograhyH3}`}>
                Fonte dos dados
              </Typography>
              <Typography component="p" className={`${classes.typography} ${classes.typographyParagraph}`}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'green' }}
                  href={`${process.env.NEXT_PUBLIC_WIKILEGIS_SWAGGER_URL}`}
                >
                  API Wikilegis
                </a>
              </Typography>
            </>
            { /* ====================================================================================== */}
          </Box>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default Sobre;
