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

<img width="1920" height="1074" alt="Captura de tela 2026-03-04 150439" src="https://github.com/user-attachments/assets/6fc393e4-edfa-4e14-8a8a-9976710315ef" />

Baixe a extencao  Thunder Client , clique em New request troque o metodo para POST, e em Body coloque como JSON

<img width="559" height="344" alt="Captura de tela 2026-03-04 150948" src="https://github.com/user-attachments/assets/66ce97d8-b823-4edd-8739-33ab894d0b31" />

Procure a pasta onde esta o projeto, de ls para identificar a pasta, no meu caso a minha era "11 proj"


