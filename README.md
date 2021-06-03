# Desafio Stone server side
## typeorm + JWT Auth
Uma API Rest, utilizando typeorm e JWT.

## Instalação

```bash
$ yarn
$ yarn run dev 
```

## registrar-se/login

Efetue uma requisição post para:
```
POST http://localhost:3000/users
POST http://localhost:3000/auth/login
```
Com os dados

```
{
  "name": "John Doe",
  "email": "john@doe.com.br",
  "password":"123456"
}
```

Você vai receber um token:

```
{
  "user": <INFOS_USER>,
  "token": "<TOKEN>"
}
```


Use o token no header nas próximas requisições:

```
Authorization: <ACCESS>
```
