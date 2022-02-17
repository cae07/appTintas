# Bem vindos ao app de Tintas

## Objetivo

---

Aplicativo construido para o code Challenge da empresa Digital Republic visando uma vaga de desenvolvedor web

---

## O desafio

---

Uma aplicação web ou mobile que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
Essa aplicação deve considerar que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L

#### Requisitos técnicos:

Você é livre para utilizar qualquer linguagem ou framework que queira e os calculos podem ser resolvidos tanto no backend ou frontend.
Mesmo o teste sendo algo simples e que pode ser resolvido com poucas linhas de código, crie uma estrutura de arquivos como se fosse um projeto maior. A organização e componentização são extremamente importantes.
Torne o projeto fácil de ser executado (crie um passo a passo e/ou utilize docker).

#### Funcionalidades

* Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados, mas podem possuir alturas e larguras diferentes
* O total de área das portas e janelas deve ser no máximo 50% da área de parede
* A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
* Cada janela possui as medidas: 2,00 x 1,20 mtos
* Cada porta possui as medidas: 0,80 x 1,90
* Cada litro de tinta é capaz de pintar 5 metros quadrados
* Não considerar teto nem piso.
*  As variações de tamanho das latas de tinta são:

- 0,5 L
- 2,5 L
- 3,6 L
- 18 L

---

## Como instalar

Pré-requisitos para rodar o projeto:
- NPM

Copie o ssh do projeto `git@github.com:cae07/appTintas.git`

* Abra um terminal no seu computador e utilize os comandos abaixo na ordem que são apresentados:

* `git clone git@github.com:cae07/appTintas.git`
* `cd appTintas`
* `npm install`
* `npm start`

A aplicação rodará na porta 3000.

---

## Arquitetura da aplicação

```
├── README.md
├── src
│   ├── setupTests.js
│   ├── index.js
│   ├── App.js
│   ├── Tests
│   │   ├── renderWithRouter.js
│   │   ├── ResultsPage.test.js
│   │   ├── StartPage.test.js
│   │   └── WallPages.test.js
│   │
│   ├── Pages
│   │   ├── ContatosPage.js
│   │   ├── FirstPage.jsx
│   │   ├── FourthPage.jsx
│   │   ├── index.js
│   │   ├── ResultsPage.jsx
│   │   ├── SecondPage.jsx
│   │   ├── StartPage.jsx
│   │   └── ThirdPage.jsx
│   │
│   ├── Images
│   │   └── fundo-app.jpeg
│   │
│   ├── Helpers
│   │   ├── Email.jsx
│   │   ├── GitHub.jsx
│   │   ├── GitLab.jsx
│   │   ├── index.js
│   │   ├── Linkedin.jsx
│   │   ├── VerifyDoorsAndWindows.jsx
│   │   ├── VerifyMeasures.jsx
│   │   └── Whatsapp.jsx
│   │
│   ├── CSS
│   │   ├── contatoPage.css
│   │   ├── main.css
│   │   ├── pages.css
│   │   └── results.css
│   │
│   ├── Context
│   │   ├── myContext.js
│   │   └── Provider.js
│   │
│   └── Component
│       ├── Doors.jsx
│       ├── FirstForm.jsx
│       ├── FirstHeader.jsx
│       ├── Footer.jsx
│       ├── FourthForm.jsx
│       ├── HeightAndWidth.jsx
│       ├── index.js
│       ├── NextButton.jsx
│       ├── SecondForm.jsx
│       ├── StartForm.jsx
│       ├── ThirdForm.jsx
│       └── Windows.jsx
│
├── public
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── package-lock.json
└── package.json

```

### Tecnologias

---

* React
* bootstrap
* react-bootstrap
* eslint
* prop-types
* JavaScript
* Html
* CSS

---

## Regras de negócio

---

### Tela inicial

#### Input name

não pode estar vazio e mínimo de 3 caracteres

---

### Telas para informações das paredes

#### input altura e input largura

A parede não pode ter mais que 15m² nem menos do que 1m², mas podem ter tamanhos diferentes.
Medidas devem ser colocadas em centimetros.
O campo não pode ser vazio.

#### input janelas

A quantidade de janelas e portas não pode ser superior a 50% do tamanho das paredes.

#### input portas

A quantidade de janelas e portas não pode ser superior a 50% do tamanho das paredes.
A altura mínima da parede com porta deve ser no mínimo 220cm

---

### Comandos básicos

---

#### Iniciar aplicação
- npm start

#### Rodar testes
- npm test

---

## Próximos passos

* Melhorar o CSS

---

## Link para o projeto

`https://app-tintas.vercel.app/`

---

# Divirta-se
