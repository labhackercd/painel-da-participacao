# Painel da Participação

## Descrição do Projeto
O painel da participação foi desenvolvido para mostrar o histórico de utilização de dois dos canais de participação da Câmara dos Deputados, que estão disponíveis na plataforma eDemocracia.

![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=flat-square&up_color=green&up_message=online&url=https%3A%2F%2Ftes.edemocracia.camara.leg.br%2Fparticipacao%2Faudiencias)
![Licença GitHub](https://img.shields.io/github/license/labhackercd/cpp-participacao-frontend?style=flat-square)
![Code Climate coverage](https://img.shields.io/codeclimate/coverage/labhackercd/cpp-participacao-frontend?style=flat-square)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/labhackercd/cpp-participacao-frontend?style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/labhackercd/cpp-participacao-frontend/CI/dev?label=build-dev&style=flat-square)

## Demonstração
  ![Páginas da aplicação](https://user-images.githubusercontent.com/20937190/123280087-da95a300-d4de-11eb-86a0-34a93a51c52d.gif)

## Tabela de conteúdos
   * [Funcionalidades](#funcionalidades)
   * [Tecnologias](#tecnologias)
   * [Instalação](#instalação)
	   * [Pré Requisitos](#pré-requisitos)
	   * [Instalação da aplicação em produção](#como-instalar-a-aplicação-em-um-ambiente-de-produção)
	   * [Instalação aplicação de desenvolvimento](#como-instalar-a-aplicação-em-um-ambiente-de-desenvolvimento)
   * [Personalização](#personalização)

### Funcionalidades
 
 - Seleção dos dados por períodos:
	 - Todo o período -> Os dados são apresentadas de forma compilada anualmente;
	 - Anual -> Ao selecionar um ano específico os dados são apresentados de forma compilada mensalmente;
	 - Mensal -> Ao selecionar um mês específico de um ano os dados são apresentados de forma compilada diariamente ao longo do mês; 
 - Visualização dos dados em tabelas e gráficos;
 - Ranking dos dados
	 - Ordenação das colunas de dados de forma crescente e decrescente;
	 - Pesquisa dos termos dentro de todos os dados;
	 - Paginação;
 - Download dos dados em formato .csv;
 - Lista de API's e códigos fonte das aplicações do portal e-Democracia;


### Protótipo da aplicação
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

As telas da aplicação foram protipadas na plataforma Figma, e podem ser visualizadas em: <https://www.figma.com/file/gQaMtt8wXbXyWUhRfrb2VW/Participa?node-id=1727%3A3552>

### Tecnologias
![NextJs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next-dot-js&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MaterialUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

O painel da participação foi desenvolvido em javascript. Utilizando o NextJS(framework ReactJS) e a biblioteca de componentes Material-UI.
Versões utilizadas durante o desenvolvimento da aplicação:

 1. NextJS: 10.0.6;
 2. ReactJS: 17.0.1;
 3. Material-UI: 4.9.14;
 4. Node: 12.20.2;
 5. NPM: 6.14.11;

Outras bibliotecas e componentes open-source foram utilizados durante o desenvolvimento da aplicação, estes podem ser visualizados no arquivo package.json;


### Instalação

#### Pré requisitos
Antes de começar, você vai precisar ter instalado em sua máquina o NodeJS na versão 12.20.2 ou superior. Caso não tenha esta dependência instalada em sua máquina acesse [Node.js]([https://nodejs.org/en/](https://nodejs.org/en/)) para instalar de acordo com a seu sistema operacional.

#### Como instalar a aplicação em um ambiente de produção
 1. Realize o download da aplicação, com por exemplo o git clone:			 
    ```
    git clone https://github.com/labhackercd/cpp-participacao-frontend.git
    ```
 2.  Acesse a pasta da aplicação que foi baixada;
 3. Na raiz do projeto, onde esta presente o arquivo package.json, execute o seguinte comando para instalar as dependências de produção da aplicação:
    ```
    npm install --only=prod
    ```
 4. Após a instalação das dependências realize o build da aplicação:
    ```
    npm run build
    ```
 5. Execute a versão de produção da aplicação:
    ```
     npm run start
    ```
 6. A aplicação estará sendo executada na porta 3000 do servidor local.
 
 
#### Como instalar a aplicação em um ambiente de desenvolvimento
 1. Realize o download da aplicação, com por exemplo o git clone:
    ```
    git clone https://github.com/labhackercd/cpp-participacao-frontend.git
    ```
 2.  Acesse a pasta da aplicação que foi baixada;
 3. Na raiz do projeto, onde esta presente o arquivo package.json, execute o seguinte comando para instalar todas as dependências da aplicação:
    ```
    npm install
    ```
 4. Após a instalação das dependências execute o servidor de desenvolvimento por meio do comando:
    ```
    npm run dev
    ```
 5. A aplicação estará sendo executada na porta 3000 do servidor local.
 6. Caso deseje executar os testes durante o desenvolvimento, execute o comando: 
    ```
    npm run test
    ```

### Personalização

A aplicação foi desenvolvida com parâmetros iniciais personalizados para o portal e-Democracia da Câmara dos Deputados, tendo estes dados sendo obtidos da mesma. O portal e-Democracia da Câmara dos Deputados teve uma nova versão lançada (versão X.X.X) onde as novas API's estão presentes.

#### API's
Caso deseje alterar a fonte dos dados que serão obtidos na plataforma é necessário configurar as variáveis de ambiente da aplicação. Os arquivos editados de acordo com o ambiente de execução da aplicação devem ser:

 - Para uma aplicação executada em ambiente de produção: .env.production ;
 - Para uma aplicação executada em ambiente de desenvolvimento: .env.development ;
 - Para a execução da suite de testes: .env.test;

#### Parâmetros personalizáveis
Outros parâmetros da aplicação podem ser personalizados, como textos, títulos de seções, padrões inicias para obtenção dos dados e etc...

Essas personalizações podem ser feitas atualizando as constantes presentes na pasta **settings**, localizada dentro da pasta /src da aplicação.

<div align="center">
    <img src="https://user-images.githubusercontent.com/20937190/119523077-db59de80-bd52-11eb-8497-99af15000083.png" alt="" />
</div>

