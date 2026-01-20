Tech Challenge – Finance App 2
==============================

Aplicação de gerenciamento financeiro desenvolvida em **React** utilizando **arquitetura de micro frontends** com **Module Federation**, organizada em um **monorepo** e preparada para execução em **containers Docker**.

O projeto simula um ecossistema de aplicações independentes que se integram através de um _app shell_, permitindo escalabilidade, isolamento de responsabilidades e evolução independente dos módulos.

🧩 Arquitetura
--------------

O projeto segue o padrão de **Micro Frontends**, onde cada aplicação possui responsabilidade bem definida:

*   **Shell** Aplicação principal responsável pela orquestração, layout base e navegação entre os micro frontends.
    
*   **Transactions** Micro frontend responsável pelo gerenciamento de transações financeiras (receitas e despesas).
    
*   **Analytics** Micro frontend responsável por exibir relatórios, gráficos e análises financeiras.
    

A comunicação entre os micro frontends é feita via **Module Federation**, permitindo o carregamento dinâmico de módulos e o compartilhamento de dependências.

✨ Funcionalidades
-----------------

*   **Registro de Transações**
    
    *   Cadastro de receitas e despesas
        
    *   Valor, data, descrição e categoria
        
*   **Anexos**
    
    *   Inclusão de comprovantes nas transações
        
*   **Visão Geral do Saldo**
    
    *   Acompanhamento do saldo atual
        
    *   Visualização da evolução financeira
        
*   **Relatórios e Gráficos**
    
    *   Análises visuais para melhor entendimento dos gastos
        
    *   Identificação de padrões e oportunidades de economia
        
*   **Filtro e Busca de Transações**
    
    *   Busca rápida e eficiente
        
    *   Filtros por tipo, categoria e período
        

🚀 Tecnologias Utilizadas
-------------------------

Este projeto foi desenvolvido utilizando:

*   **Node.js** – Ambiente de execução JavaScript
    
*   **React.js** – Biblioteca para construção da interface
    
*   **TypeScript** – Tipagem estática para maior segurança e manutenibilidade
    
*   **Vite** – Build tool e dev server rápido
    
*   **Module Federation** – Integração entre micro frontends
    
*   **Docker** – Containerização das aplicações
    
*   **Docker Compose** – Orquestração dos containers
    
*   **npm** – Gerenciador de pacotes
    

📁 Estrutura do Projeto (Monorepo)
----------------------------------

```
tech-challenge-finance-2/
├── apps/
│   ├── shell/         # App Shell (host)
│   ├── transactions/  # Micro frontend de transações
│   └── analytics/     # Micro frontend de relatórios
├── docker-compose.yml
├── package.json
└── README.md
```

⚙️ Como Rodar a Aplicação
-------------------------

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

*   **Docker**
    
*   **Docker Compose**
    

### 🔧 Instalação

1.  git clone https://github.com/otavioaufegues/tech-challenge-finance-2cd tech-challenge-finance-2
    
2.  npm install
    

### ▶️ Execução

1.  docker-compose up --build
    
2.  http://localhost:5170
    

O **Shell** será carregado inicialmente e os micro frontends serão importados dinamicamente conforme a navegação.

🧪 Observações
--------------

*   Cada micro frontend pode ser desenvolvido e evoluído de forma independente.
    
*   O uso do Docker garante padronização do ambiente de desenvolvimento.
    
*   O projeto foi estruturado com foco em **boas práticas de arquitetura frontend**, escalabilidade e organização de código.
    

📌 Considerações Finais
-----------------------

Este projeto foi desenvolvido como parte de um **Tech Challenge**, com foco em:

*   Arquitetura moderna de frontend
    
*   Separação de responsabilidades
    
*   Escalabilidade
    
*   Experiência de desenvolvimento