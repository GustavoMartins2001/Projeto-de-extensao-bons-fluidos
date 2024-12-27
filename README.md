# Projeto Bons Fluidos

Projeto feito para o trabalho final da disciplina AS65A - Certificadora de competencia Identitária.

O projeto é composto por dois servidores, um rodando o framework para a renderização das páginas(frontEnd) que será apresentado nesse repositório,
e um servidor para rodar a API responsável pela parte lógica de todo o projeto(backend).

O servidor backend tem seu proprio repositório com sua próprias instruções para rodar o projeto, que pode ser acessado pelo seguinte link:
https://github.com/GustavoMartins2001/Projeto-de-extensao-bons-fluidos-backend

## Ferramentas utilizadas
Nesse projeto utilizou-se AngularJs como framework frontEnd, NodeJs para rodar o servidor frontEnd, MySql como o banco de dados,
os pacote sequelize e docker-compose para realizar migrations e facilitar a criação das tabelas no banco de dados e 
expressjs para rodar o servidor backend. 



## Pré requisitos para rodar o servidor FrontEnd

Para rodar o servidor frontEnd, é necessário ter NodeJs e npm instalados.
Com essas ferramentas instaladas, clone o repositório na pasta desejada OU 
faça o download do projeto pelo github e o extraia na pasta desejada. Então utilize o comando

```bash
npm install
```
Assim todas as demais dependencias serão instaladas automaticamente.

Após isso, dentro do projeto navegue até app/constants/enviroments.ts
Nesse arquivo, defina as constantes API_URL e JWT de acordo com o que foi criado no backend(seguir as instruções do outro repositório).
Esse passo é necessário para permitir a autenticação ao fazer requisições para a API.

## Servidor FrontEnd
 
Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Lembrando que é necessários que os dois servidores estejam rodando para o funcionamento correto do projeto.

## Informações para a avaliação do sistema

O Projeto foi desenvolvido pelo Grupo 01, Composto por Gustavo Martins, Guilherme Yuiti e Italo Francisco

O projeto tem como objetivo criar um sistema de gerenciamento de eventos e participantes, a fim de permitir criar eventos, definir datas, adicionar ou remover
participantes desses eventos e manter informações publicas dos participantes - como nome, email e telefone - para entrar em contato com eles caso necessário.

## Iniciando a navegação

Após iniciados ambos os servidores, abra seu navegador e acesse http://localhost:4200/. Você será automaticamente redirecionado para a página de login.
Clique na opção "Cadastre-se", logo abaixo o botao de login.
![image](https://github.com/user-attachments/assets/bc3a3e26-cd8c-4489-8500-c2704def0998)

Na página de registro, preencha todos os campos. Não é necessario utilizar suas informações reais,
apenas marque a opção apoiador e lembre-se do email e senha que cadastrou para fazer login depois.

Se o cadastro for completado com sucesso, você será redirecionado para a página de login. Insira as informações cadastradas e clique no botão login.

Com isso você terá acesso a listagem e criação de eventos e usuários. Caso você tenha marcado a opção "apoiador" no registro, você também poderá editar os eventos.

Você pode criar vários eventos e usuarios, e todos eles aparecerão nas listagens.


