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



## Pré requisitos para rodar o servidor frontEnd

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

## Servidor de desenvolvimento
 
Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Depois que o servidor estiver em execução, abra seu navegador e acesse http://localhost:4200/. 

