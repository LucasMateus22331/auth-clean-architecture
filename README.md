# 🚀 Auth API - Clean Architecture

API de autenticação desenvolvida com **Node.js**, **TypeScript** e **Clean Architecture**.

Este projeto foi criado com foco em boas práticas de backend, separação de responsabilidades e organização profissional de código.

---

## 🧠 Conceitos Aplicados

* Clean Architecture
* SOLID
* Separação em camadas (Domain, Use Cases, Infra, Main)
* JWT para autenticação
* Hash de senha com bcrypt
* Organização escalável de projeto

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* TypeScript
* Express
* JWT (jsonwebtoken)
* Bcrypt
* ts-node-dev

---

## 📂 Estrutura do Projeto

```
src/
 ├── domain/        # Entidades e contratos
 ├── usecases/      # Regras de negócio
 ├── infra/         # Implementações (bcrypt, jwt, etc)
 ├── main/          # Configuração do servidor
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/LucasMateus22331/auth-clean-architecture.git
```

Entre na pasta do projeto:

```bash
cd auth-clean-architecture
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Rodando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

O servidor iniciará em:

```
http://localhost:3000
```

---

## 🔐 Rotas Principais

### 📌 Criar usuário

```
POST /signup
```

Body:

```json
{
  "name": "Lucas",
  "email": "lucas@email.com",
  "password": "123456"
}
```

---

### 📌 Login

```
POST /login
```

Body:

```json
{
  "email": "lucas@email.com",
  "password": "123456"
}
```

Retorno:

```json
{
  "accessToken": "jwt_token_aqui"
}
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Demonstrar conhecimento em arquitetura limpa
* Criar base sólida para APIs escaláveis
* Servir como projeto de portfólio para oportunidades de estágio/júnior

---

## 👨‍💻 Autor

Lucas Mateus
Backend Developer em formação 🚀

LinkedIn: [https://www.linkedin.com/](https://www.linkedin.com/)
GitHub: [https://github.com/LucasMateus22331](https://github.com/LucasMateus22331)

---

## 📌 Melhorias Futuras

* Banco de dados (PostgreSQL ou MongoDB)
* Testes automatizados (Jest)
* Docker
* Deploy em cloud
* Refresh Token

---

⭐ Se esse projeto te ajudou, deixe uma estrela no repositório.
