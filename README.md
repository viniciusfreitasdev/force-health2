# Force Health - Landing Page

Uma landing page moderna e responsiva para um programa de treinamento chamado "Force Health", inspirada no design da Fitness Programmer.

## 🚀 Características

- **Design Moderno**: Interface limpa com tema escuro e acentos laranja
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Componentes Reutilizáveis**: Estrutura modular com componentes React
- **Seções Completas**:
  - Header com navegação e redes sociais
  - Seção Hero com call-to-action
  - Recursos e funcionalidades
  - Planos de treino mensais e semanais
  - Seção de notícias
  - Footer completo com links úteis

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interface
- **CSS3**: Estilização moderna com Flexbox e Grid
- **HTML5**: Estrutura semântica
- **Create React App**: Configuração inicial do projeto

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd force-health2
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### 🌐 Acessando a Landing Page
- Acesse `http://localhost:3000` para ver a landing page pública

### 🏢 Acessando o Sistema Interno
- Para testar o sistema interno, altere temporariamente o `index.js`:
```javascript
// Em src/index.js, substitua:
import App from './App';
// Por:
import App from './InternalApp';
```
- Ou crie uma rota separada para o sistema interno

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── landing/               # Componentes da Landing Page
│   │   ├── Header.js          # Cabeçalho com navegação
│   │   ├── Hero.js            # Seção principal
│   │   ├── StartForFree.js    # Seção "Comece Grátis"
│   │   ├── WhatIsWorkoutPlanner.js # Recursos do app
│   │   ├── CreateWorkout.js   # Call-to-action
│   │   ├── HowToCreate.js     # Como criar planos
│   │   ├── FreeMonthlyPlan.js # Planos mensais
│   │   ├── WeeklyWorkoutPlan.js # Planos semanais
│   │   ├── News.js            # Seção de notícias
│   │   ├── Footer.js          # Rodapé
│   │   └── index.js           # Exportações centralizadas
│   │
│   └── internal/              # Componentes do Sistema Interno
│       ├── Dashboard.js       # Painel principal
│       ├── UserManagement.js  # Gerenciamento de usuários
│       ├── WorkoutPlans.js    # Gerenciamento de planos
│       ├── Analytics.js       # Relatórios e métricas
│       ├── internal.css       # Estilos do sistema interno
│       └── index.js           # Exportações centralizadas
│
├── App.js                     # Landing Page principal
├── InternalApp.js             # Sistema interno de admin
├── App.css                    # Estilos globais
└── index.js                   # Ponto de entrada
```

## 🎯 Funcionalidades

### 🌐 Landing Page

#### Header
- Logo "Force Health"
- Menu de navegação responsivo
- Ícones de redes sociais
- Ícone de busca

#### Hero Section
- Título principal impactante
- Ícones de recursos (Blog, Perda de Peso, Nutrição)
- Botão de call-to-action
- Imagem ilustrativa

#### Seções de Conteúdo
- **Recursos**: Explicação das funcionalidades do app
- **Planos de Treino**: Cards com diferentes programas
- **Notícias**: Artigos sobre fitness e saúde
- **Footer**: Links úteis e informações de contato

### 🏢 Sistema Interno (Admin)

#### Dashboard
- Visão geral do sistema
- Estatísticas principais (usuários, planos, treinos, receita)
- Atividades recentes
- Ações rápidas

#### Gerenciamento de Usuários
- Listagem completa de usuários
- Busca e filtros avançados
- Estatísticas de usuários ativos/inativos
- Ações de edição e exclusão

#### Gerenciamento de Planos
- Criação e edição de planos de treino
- Filtros por status (Ativo, Em Revisão)
- Visualização detalhada de cada plano
- Ações de duplicação e visualização

#### Analytics e Relatórios
- Gráficos de crescimento de usuários
- Análise de receita mensal
- Estatísticas de treinos completados
- Relatórios detalhados exportáveis

## 📱 Responsividade

O design é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout em duas colunas
- **Tablet**: Layout adaptado
- **Mobile**: Layout em coluna única

## 🎨 Paleta de Cores

- **Primária**: #ff6b35 (Laranja)
- **Secundária**: #f7931e (Laranja claro)
- **Fundo**: #000 (Preto)
- **Texto**: #fff (Branco)
- **Cinza**: #333, #666, #ccc

## 🚀 Scripts Disponíveis

- `npm start`: Executa o app em modo de desenvolvimento
- `npm run build`: Cria build de produção
- `npm test`: Executa os testes
- `npm run eject`: Ejecta do Create React App

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests
- Melhorar a documentação

---

**Force Health** - Transforme sua vida através do fitness! 💪