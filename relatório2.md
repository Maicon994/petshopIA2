# Relatório do Desenvolvimento de uma Landing Page de Pet Shop Utilizando Inteligência Artificial

## Introdução

Antes de iniciar este relatório, gostaria de apresentar o prompt utilizado para orientar as Inteligências Artificiais escolhidas para o desenvolvimento da atividade. As ferramentas utilizadas foram o ChatGPT e o Gemini.

---

# Prompt Utilizado

## Prompt de uma Landing Page para um Pet Shop

### Persona

Atue como Engenheiro Front-End Sênior especialista em interfaces modernas, conversão (UI/UX) e código limpo.

### Ação

Desenvolva a estrutura de uma Landing Page (página única) para um Pet Shop especializado em banho e tosa de alto padrão.

### Contexto

O site precisa transmitir profissionalismo e cuidado, fugindo do visual infantilizado comum em pet shops.

O design deve ser obrigatoriamente em Dark Mode moderno, utilizando fundo principal em cinza escuro ou preto, com detalhes e botões em tons de turquesa ou verde neon para proporcionar um contraste elegante e tecnológico.

O site deve focar na experiência do usuário (UX). Os cards de serviços devem exibir claramente o tempo estimado de cada procedimento (exemplo: Banho e Tosa Higiênica - 1h30) e possuir um selo de **"Mais Vendido"** no serviço principal para incentivar sua escolha.

### A página deve conter as seguintes seções:

1. Hero (apresentação impactante com um botão de chamada para ação).
2. Serviços (cards com preços e detalhes de Banho, Tosa Higiênica e Tosa na Tesoura).
3. Agendamento (formulário para preenchimento do nome do pet, raça e escolha do serviço).

O layout deve ser totalmente responsivo (Mobile First).

### Expectativas e Restrições

#### 1. Separação de Arquivos

Entregar o código estritamente em:

* `index.html`
* `style.css`
* `script.js`

#### 2. Restrições de HTML

* Utilizar HTML semântico:

  * `<header>`
  * `<section>`
  * `<main>`
  * `<form>`
  * `<footer>`
* Não utilizar frameworks ou bibliotecas como Bootstrap ou Tailwind.
* Utilizar apenas CSS puro.

#### 3. Restrições de CSS

* Utilizar Flexbox ou CSS Grid para organizar os cards e o formulário.
* Adicionar transições suaves com efeito de escala (zoom leve) ao passar o mouse sobre os cards.
* Utilizar tipografia moderna com fontes sem serifa.
* Criar efeito de pulsação suave nos botões utilizando `@keyframes`.

#### 4. Restrições de JavaScript

* Utilizar JavaScript Vanilla.
* Interceptar o envio do formulário.
* Validar todos os campos.
* Exibir um alerta estilizado contendo:

> "Agendamento solicitado com sucesso para o [NOME DO PET]!"

Sem recarregar a página.

##### Regras de Segurança e UX

* Impedir a seleção de datas anteriores ao dia atual.
* Implementar máscara de telefone durante a digitação.

#### 5. Comentários

Inserir comentários breves no JavaScript explicando:

* A validação do formulário.
* A captura dos dados inseridos.

---

# 1. Primeiras Impressões

Logo de início houve uma diferença bastante perceptível entre as duas IA's.

O Gemini entregou diretamente os códigos solicitados, seguindo corretamente as instruções presentes no prompt (ainda sem testes).

Já o ChatGPT, em sua primeira resposta, interpretou o prompt como um pedido para criar outro prompt, em vez de desenvolver o projeto solicitado. Isso resultou em uma pequena perda de desempenho inicial devido à interpretação incorreta da solicitação.

---

# 2. Funcionalidades e Visual

Após a geração dos códigos e sua integração ao projeto, realizei testes em ambas as versões para analisar os resultados obtidos.

Os dois sites apresentaram:

* Responsividade adequada;
* Layout moderno;
* Navegação funcional;
* Formulário acessível tanto pelo scroll da página quanto pelo botão "Agendar Agora";
* Mensagem personalizada após o envio do formulário.

Visualmente, considerei o resultado do ChatGPT superior ao do Gemini.

O ChatGPT entregou uma interface mais moderna, chamativa, intuitiva e responsiva. O Gemini apresentou um visual mais simples e limitado, especialmente na área do formulário, que não possui elementos de auxílio ao usuário e apresenta uma experiência menos intuitiva.

### ChatGPT

* Visual sofisticado.
* Design moderno.
* Responsivo.
* Interface intuitiva.
* Dark Mode mais elaborado.
* Melhor aproveitamento da paleta de cores solicitada.

### Gemini

* Visual simples.
* Responsivo.
* Minimalista.
* Menos intuitivo.
* Dark Mode básico.
* Uso predominante de uma única cor de fundo, sem muitos elementos de destaque.

---

# 3. Execução do Código

## ChatGPT

O ChatGPT entregou um código mais robusto e estruturado.

Essa complexidade contribuiu para um resultado visual mais refinado e profissional. Entretanto, algumas partes poderiam ter sido simplificadas, especialmente no JavaScript, onde diversas lógicas foram implementadas de forma mais extensa do que o necessário.

Embora isso não comprometa o funcionamento da aplicação, pode dificultar a manutenção em cenários com prazos curtos, já que eventuais erros demandariam mais tempo para serem identificados e corrigidos.

### Pontos observados

* Código mais completo.
* Estrutura mais elaborada.
* Maior complexidade.
* Melhor resultado visual.
* Manutenção potencialmente mais trabalhosa.

## Gemini

Em contraste, o Gemini apresentou uma abordagem mais simples e direta.

O HTML continha apenas os elementos essenciais para a interface, sem excesso de componentes. O CSS e o JavaScript seguiram a mesma filosofia, resultando em um código compacto, objetivo e de fácil compreensão.

Na minha percepção, foi a solução que melhor executou os requisitos técnicos do prompt, especialmente no uso de HTML semântico e JavaScript Vanilla.

Para projetos com prazo reduzido, considero essa abordagem mais vantajosa devido à facilidade de manutenção e correção.

### Pontos observados

* Código mais simples.
* Estrutura compacta.
* Fácil entendimento.
* Fácil manutenção.
* Implementação objetiva dos requisitos.

---

# 4. Considerações Finais

Após analisar e testar ambas as soluções, concluo que as duas Inteligências Artificiais entregaram resultados satisfatórios.

As diferenças observadas estão mais relacionadas às escolhas de implementação e estilo do que à qualidade geral do resultado.

O ChatGPT priorizou um visual mais sofisticado e profissional, porém acompanhado de uma estrutura mais complexa.

O Gemini optou por uma solução mais simples e enxuta, facilitando a manutenção e futuras adaptações.

Não foram encontrados erros relevantes de lógica em nenhuma das implementações. A única inconsistência observada ocorreu no início da interação com o ChatGPT, que interpretou incorretamente a solicitação inicial.

## Veredito

Minha preferência pessoal é pelo Gemini.

Apesar de apresentar um visual menos elaborado, entregou uma solução simples, prática, funcional e de fácil manutenção.

Para mim, esses fatores possuem maior relevância do que um resultado visualmente mais sofisticado, porém acompanhado de maior complexidade estrutural.

---

**Maicon Ferreira Machado**
**11/06/2026**
**ULBRA São Lucas**
**Técnico em Informática — Módulo 3**
