# business-card
Boas vindas ao Business Card, o App que gera um cartão virtual para você!

## Objetivos:

O objetivo do projeto é gerar um QR Code que redirecione para uma página com as principais informações profissionais do usuário.

## Para acessar e utilizar a aplicação em produção:
[Business-Card](https://business-card-danieldaher.vercel.app/)

## Funcionalidades da aplicação

A aplicação está em inglês, mas basta pedir para que o navegador traduza que continuará funcionando perfeitamente.

A primeira tela é um formulário que pede nome, linkedin e github de uma pessoa. Uma vez que os campos estejam preenchidos, é possível gerar um QR Code que redireciona para um cartão virtual daquela pessoa. 

É possível fazer download deste QR Code, mas se preferir, basta clicar no mesmo que o site te redireciona para o cartão com as informações inseridas.

A página principal, que é o cartão, é programada para puxar as informações do github inserido no formulário. Isso acontece através de uma chamada da API do Github. 

Mostra-se então o nome da pessoa, foto de perfil, cidade onde mora, descrição e botões úteis que redirecionam para Github, Linkedin, Email e Twitter (os dois últimos apenas se a informação estiver no perfil).

Caso a pessoa não tenha inserido uma URL válida, este cartão apresentará apenas o nome e os botões que redirecionam ao Linkedin e Github.

## Caso prefira rodar a aplicação no computador:

#### Seu computador precisa de Git (para versionamento do código), Node.js & npm (para executar a aplicação) e MongoDB (que será nosso banco de dados). Clique nos links, caso ainda não tenha instalado algum desses:

 - [ ] [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 - [ ] [Node.js e npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
 - [ ] [MongoDB](https://docs.mongodb.com/manual/installation/)

## Instalando a aplicação:

1. Primeiro, abra um novo terminal e clone o repositório utilizando o comando 
`git clone git@github.com:DanielDaher/business-card.git`

2. Em seguida, digite `cd business-card` para entrar no diretório (pasta) do projeto, que acabou de ser criada.

3. Instale as dependências do projeto com o comando `npm install`

4. Ao término da etapa anterior, rode no terminal `npm start`. Isto pode demorar alguns instantes, aguarde até que seu navegador abra a página com a aplicação.

5. Caso a página do projeto não tenha aparecido em seu navegador, você pode ir para o link `http://localhost:5173/`.

6. Antes de desfrutar do site, é necessário configurar o backend. Veja o repositório e documentação [neste link](https://github.com/DanielDaher/API-business-card)

7. Com frontend e backend funcionando, agora é só desfrutar do site!
