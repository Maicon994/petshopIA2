# VM Pet Shop - Landing Page Responsiva

## Sobre o Projeto

Este projeto consiste no desenvolvimento de uma Landing Page para a **VM Pet Shop**, especializada em serviços de banho e tosa de alto padrão.

A proposta foi criar uma página única (Single Page Application) com foco em experiência do usuário (UX), design moderno e responsividade, transmitindo profissionalismo e cuidado com os animais, evitando o visual infantilizado frequentemente associado a pet shops.

A interface utiliza o conceito de **Dark Mode Moderno**, combinando tons escuros com detalhes em verde neon/turquesa para criar contraste visual, destacar elementos importantes e direcionar a atenção do usuário para as ações principais do site.

---

## Objetivos

* Apresentar os serviços oferecidos pela VM Pet Shop.
* Exibir informações de forma clara e organizada.
* Incentivar o agendamento de serviços através de chamadas para ação (CTA).
* Garantir uma boa experiência em dispositivos móveis e desktops.
* Aplicar boas práticas de desenvolvimento Front-End utilizando HTML, CSS e JavaScript puro.

---

## Funcionalidades

### Hero Section

* Apresentação da empresa.
* Título de destaque.
* Texto explicativo.
* Botão de chamada para ação ("Agendar Agora").

### Seção de Serviços

Apresentação dos principais serviços oferecidos:

* Banho Premium
* Banho + Tosa Higiênica
* Tosa na Tesoura

Cada serviço exibe:

* Descrição resumida.
* Tempo médio de execução.
* Valor do serviço.
* Destaque visual para o serviço mais vendido.

### Formulário de Agendamento

Permite que o usuário informe:

* Nome do pet.
* Raça.
* Telefone.
* Data desejada.
* Serviço escolhido.

Após o envio:

* Os dados são validados.
* O formulário não recarrega a página.
* É exibida uma mensagem personalizada de confirmação.

---

## Recursos de UX Implementados

### Responsividade

O projeto foi desenvolvido utilizando a abordagem **Mobile First**, garantindo boa visualização em:

* Smartphones
* Tablets
* Notebooks
* Computadores Desktop

### Feedback Visual

* Efeito de zoom suave nos cards de serviço.
* Botões com animação de pulsação.
* Destaques visuais para ações importantes.

### Navegação Simplificada

O usuário pode acessar rapidamente a seção de agendamento através do botão principal presente na área Hero.

---

## Recursos de Validação

### Validação de Campos

O sistema verifica se todos os campos obrigatórios foram preenchidos antes de permitir o envio.

### Controle de Datas

O calendário impede que o usuário selecione datas anteriores ao dia atual.

### Máscara de Telefone

O campo de telefone recebe formatação automática durante a digitação.

Exemplo:

```text
(51) 99999-9999
```

### Mensagem de Sucesso

Após a validação:

```text
Agendamento solicitado com sucesso para o [Nome do Pet]!
```

---

## Tecnologias Utilizadas

### HTML5

Utilização de tags semânticas:

* `<header>`
* `<main>`
* `<section>`
* `<form>`
* `<footer>`

### CSS3

Recursos utilizados:

* Flexbox
* CSS Grid
* Media Queries
* Transitions
* Keyframes
* Variáveis CSS

### JavaScript Vanilla

Implementações:

* Manipulação do DOM
* Captura de eventos
* Validação de formulário
* Máscara de telefone
* Controle de datas
* Alertas personalizados

---

## Estrutura do Projeto

```text
VM-PetShop/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Organização dos Arquivos

### index.html

Responsável pela estrutura da página e conteúdo.

### style.css

Responsável pela aparência visual, responsividade e animações.

### script.js

Responsável pelas funcionalidades dinâmicas e validações.

---

## Características do Design

* Dark Mode moderno.
* Paleta de cores em preto, cinza escuro e verde neon.
* Interface limpa e profissional.
* Tipografia sem serifa.
* Destaque para conversão e experiência do usuário.
* Layout elegante e tecnológico.

---

## Conclusão

A Landing Page da VM Pet Shop foi desenvolvida com foco em modernidade, usabilidade e conversão, oferecendo uma experiência agradável tanto para usuários de dispositivos móveis quanto para usuários de desktop.

O projeto demonstra a aplicação de conceitos fundamentais de desenvolvimento Front-End, incluindo HTML semântico, estilização moderna com CSS e interatividade utilizando JavaScript puro, atendendo integralmente aos requisitos definidos no escopo da atividade.
