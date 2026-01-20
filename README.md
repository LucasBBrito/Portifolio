# 🚀 Portfólio Lucas Barros - Desenvolvedor Frontend

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-2.87.1-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

**[Ver Demo ao Vivo](https://lucasbbrito.github.io/Portifolio/)** | **[Documentação Completa](./README2.md)**

</div>

> **📌 Projeto criado com [Lovable](https://lovable.dev/)**  
> Para fazer deploy no GitHub Pages, consulte **[LOVABLE_DEPLOY.md](./LOVABLE_DEPLOY.md)** - Guia específico para projetos Lovable!

---

## 📋 Sobre o Projeto

Portfólio profissional moderno e interativo desenvolvido com as mais recentes tecnologias web. Apresenta design elegante, animações sofisticadas e integração com banco de dados para gerenciamento dinâmico de projetos.

### ✨ Características Principais

- 🎨 **Design Premium** - Interface moderna com glassmorphism e gradientes
- ⚡ **Performance Otimizada** - Build otimizado com Vite e code splitting
- 🎭 **Animações Sofisticadas** - Framer Motion para experiência imersiva
- 📱 **Totalmente Responsivo** - Adaptado para todos os dispositivos
- 🌙 **Dark Mode** - Suporte a tema escuro/claro
- 🔥 **Backend Integrado** - Supabase para gerenciamento de projetos
- ♿ **Acessível** - Componentes com ARIA e navegação por teclado

---

## 🛠️ Stack Tecnológica

### Frontend

- **React 18.3.1** - Biblioteca JavaScript para UI
- **TypeScript 5.8.3** - Superset tipado do JavaScript
- **Vite 5.4.19** - Build tool ultrarrápido
- **React Router DOM 6.30.1** - Roteamento client-side

### UI & Styling

- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **shadcn/ui** - Componentes React reutilizáveis
- **Radix UI** - Primitivos de UI acessíveis
- **Framer Motion 12.23.26** - Biblioteca de animações
- **Lucide React** - Ícones SVG modernos

### Backend & Database

- **Supabase 2.87.1** - Backend-as-a-Service
- **TanStack Query 5.83.0** - Gerenciamento de estado assíncrono

### Formulários & Validação

- **React Hook Form 7.61.1** - Gerenciamento de formulários
- **Zod 3.25.76** - Validação de schemas

---

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ e npm
- Git

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/SEU_USUARIO/Portifolio.git
cd Portifolio
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_PROJECT_ID=seu_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=sua_publishable_key
VITE_SUPABASE_URL=sua_supabase_url
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

O projeto estará rodando em `http://localhost:8080`

---

## 📜 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Verificar código com ESLint
npm run deploy       # Deploy para GitHub Pages
```

---

## 📁 Estrutura do Projeto

```
Portifolio/
├── public/              # Arquivos estáticos
│   ├── images/          # Imagens dos projetos
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/          # Assets do projeto
│   ├── components/      # Componentes React
│   │   ├── ui/          # Componentes shadcn/ui
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Custom React Hooks
│   ├── lib/             # Utilitários
│   ├── integrations/    # Integrações (Supabase)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env                 # Variáveis de ambiente
├── vite.config.ts       # Configuração do Vite
├── tailwind.config.ts   # Configuração do Tailwind
├── tsconfig.json        # Configuração do TypeScript
└── package.json
```

---

## 🎨 Seções do Portfólio

### 🏠 Hero Section

- Animação de typewriter no título
- Foto de perfil com efeitos visuais
- Timeline interativa de experiência
- Link para LinkedIn

### 💼 Services Section

- Cards de serviços oferecidos
- Ícones animados
- Hover effects premium

### 🛠️ Skills Section

- Exibição de tecnologias
- Badges animados
- Categorização de habilidades

### 📂 Projects Section

- Integração com Supabase
- Cards com preview
- Links para GitHub e demo
- Tags de tecnologias

### 📧 Contact Section

- Formulário de contato
- Informações de contato
- Links para redes sociais

---

## 🚀 Deploy no GitHub Pages

### Guia Rápido

1. **Instale a dependência**

```bash
npm install --save-dev gh-pages
```

2. **Configure o `vite.config.ts`**

```typescript
export default defineConfig({
  base: "/Portifolio/", // Nome do seu repositório
  // ...
});
```

3. **Adicione scripts no `package.json`**

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Faça o deploy**

```bash
npm run deploy
```

5. **Configure no GitHub**

- Vá em Settings > Pages
- Source: branch `gh-pages`, folder `/ (root)`

### 📖 Guia Completo

Para instruções detalhadas passo a passo, incluindo troubleshooting e boas práticas, consulte o **[README2.md](./README2.md)**.

---

## 🗄️ Banco de Dados Supabase

### Tabela: `projects`

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  techs TEXT[] NOT NULL,
  image TEXT,
  github TEXT,
  live TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Exemplo de Inserção

```sql
INSERT INTO projects (title, description, techs, image, github, live)
VALUES (
  'Meu Projeto',
  'Descrição do projeto',
  ARRAY['React', 'TypeScript', 'Tailwind'],
  'https://exemplo.com/imagem.jpg',
  'https://github.com/usuario/projeto',
  'https://projeto.exemplo.com'
);
```

---

## 🎯 Funcionalidades Técnicas

### Animações com Framer Motion

- Scroll-triggered animations
- Parallax effects
- Stagger animations
- Hover interactions
- Typewriter effect

### Performance

- Code splitting automático
- Lazy loading de componentes
- Otimização de imagens (WebP)
- Tree shaking
- Fast Refresh

### Acessibilidade

- Componentes Radix UI com ARIA
- Navegação por teclado
- Contraste adequado
- Semântica HTML

---

## 🐛 Troubleshooting

### Página em branco após deploy

Verifique se o `base` no `vite.config.ts` está correto:

```typescript
base: "/NOME_DO_REPOSITORIO/",
```

### CSS não carrega

Limpe o cache e rebuild:

```bash
rm -rf dist
npm run build
npm run deploy
```

### Projetos não carregam

Verifique as variáveis de ambiente no `.env.production`

Para mais problemas e soluções, consulte o **[README2.md](./README2.md)**.

---

## 📚 Recursos

- [Documentação Completa](./README2.md) - Guia detalhado de deploy
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase Docs](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

## 👨‍💻 Autor

**Lucas Barros**

- LinkedIn: [lucasbbritodev](https://www.linkedin.com/in/lucasbbritodev/)
- GitHub: [@LucasBBrito](https://github.com/LucasBBrito)
- Portfolio: [lucasbbrito.github.io/Portifolio](https://lucasbbrito.github.io/Portifolio/)

---

## 🙏 Agradecimentos

- [Lovable](https://lovable.dev/) - Plataforma de desenvolvimento
- [Vercel](https://vercel.com/) - Inspiração de design
- [shadcn](https://twitter.com/shadcn) - Componentes UI
- Comunidade React e Open Source

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

Desenvolvido com ❤️ por Lucas Barros

</div>
