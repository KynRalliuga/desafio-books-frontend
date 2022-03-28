# 🎁 Sobre o desafio ioasys books

Achei interessante a proposta de liberdade que foi dada para a escolha das tecnologias assim pude me aventurar mais no projeto sem muitas amarras. Fazia um tempo que queria experimentar o NextJS e vi nesse desafio uma oportunidade perfeita já que no NextJS conseguimos configurar ferramentas para o ambiente de produção para melhoria do SEO utilizando páginas estáticas e cache em CDN, além de outras coisas a mais, infelizmente não consegui abordar muito esse tópico no projeto pois havia o requisito do login de usuário o que impede o cache em CDN pois seria como se estivessemos cacheando "dados sensíveis" no servidor para todo mundo ver e apesar de ser apenas um desafio onde todo mundo sabe as credencias não fica legal uma implementação nesse nível.
Aprendi bastante no desenvolvimento desse projeto sobre o framework do NextJS e suas particularidades em conjunto com as tecnologias que escolhi, achei que elas conversaram muito bem entre si e tem um potencial enorme para projetos que requerem alto desempenho e manutenção de código, apesar de não ter conseguido efetuar os testes unitários e uma documentação dos componentes digna eu tentei ao máximo deixar o projeto em um padrão que fique organizado a renderização, estados e lógica do consumo das APIs, me aproveitando ao máximo das abstrações oferecidas pelo Redux, NextJS e TypeScript.
Ahh eu aproveitei e coloquei o projeto no ar gratuitamente pela Vercel através da integração com o github, caso queira acessar o link é este daqui:
https://desafio-books-frontend-beta.vercel.app/

# 💻 Frameworks utilizado no projeto

- ReactJS + NextJS
- Redux + Redux Thunk
- Tailwind + Heroicons + Postcss
- Typescript + Lint + Prettier

# 💻 Setup local utilizado no projeto

- Windows 10;
- nvm 1.1.9;
- Node 17.8.0;
- npm 8.5.5;

# 💻 Rodando o Projeto

Você deve rodar os seguintes comandos para rodar o projeto localmente:

- npm install;
- npm lint;
- npm run dev;

# Regras do desafio:

Abaixo segue as regras do desafio proposto pela ioasys.

# Sobre

Estes documento README tem como objetivo fornecer as informações necessárias para realização do projeto **ioasys books**.

# 🏗 O que fazer?

- Você deve criar seu projeto e subir em um repositório e ao finalizar, enviar o link do seu repositório para a nossa equipe. Lembre-se, NÃO é necessário criar um Pull Request para isso, nós iremos avaliar e retornar por email o resultado do seu teste.

# 🚨 Requisitos

- Seu projeto deverá ser construído utilizando **ReactJS** ou **Angular**.
- Seu projeto deverá ser construído utilizando o layout disponibilizado na descrição do teste.
- A integração com a API deve ser feita respeitando todos os contratos de OAuth.

# 🕵🏻‍♂️ Itens a serem avaliados

- Estrutura do Projeto
- Boas práticas da Linguagem/Framework
- Integração com API
- Bibliotecas utilizadas
- Estilização dos componentes
- Persistência de login
- Layout responsivo
- Friendly URL
- Seu projeto deverá seguir tudo o que foi exigido na seção **O que desenvolver?**

# 🎁 Extra

Esses itens não obrigatórios, porém desejados.

- Testes unitários
- SEO
- Linter
- Code Formater
- Documentação de componente

# 🖥 O que desenvolver?

Você deverá construir um projeto utilizando o layout proposto

- Login e acesso de Usuário já registrado
- Para ter acesso as demais APIs precisamos enviar o **authorization** no header para autorizar a requisição;
- Listagem de Livros
- Detalhamento do Livro

# 🔗 Links e Informações Importantes

## Layout

- Layout e recortes disponíveis no Figma
- https://www.figma.com/file/YXuqJUzNZcR7GveJfVWCKo/Desafio-Frontend-ioasys-books

## Integração com API

- A documentação da API está disponível a partir de uma página web (https://books.ioasys.com.br/api/docs/).

- **Documentação:** https://books.ioasys.com.br/api/docs/
- **Servidor:** https://books.ioasys.com.br/api/v1
- **Usuário de Teste:** desafio@ioasys.com.br
- **Senha de Teste:** 12341234
