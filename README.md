
# Backend for Fullstack WebApp Simulation

A simple backend for my project that simulates fullstack interaction between front and back-end.

## Features

- Create/Register account
- Login into account
## Environment Variables

`DB_PASS`

`DB_HOST`

`DB_USER`

`DB_NAME`

`JWT_SECRET` for JWT encryption
## API Reference

#### Register account

```http
  POST /registrar
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nome` | `string` | **Required**. Account name |
| `email` | `string` | **Required**. Account email |
| `senha` | `string` | **Required**. Account password |

#### Log in to account

```http
  POST /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Account email |
| `senha`      | `string` | **Required**. Account password |

## Deployment

To deploy this project run

```bash
  npm install
```

Dependencies:

``` 
express
pg
sequelize
nodemon
dotenv
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/brunobgsilva/react-template-server
```

Go to the project directory

```bash
  cd react-template-server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Support

For support, email bruno_bg_silva@estudante.sesisenai.org.br.

