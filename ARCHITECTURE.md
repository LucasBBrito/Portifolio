# 📐 Arquitetura e Estrutura do Projeto

## 🎯 Visão Geral

Este documento detalha a arquitetura, padrões e convenções utilizados no projeto.

---

## 📂 Estrutura de Diretórios Detalhada

```
Portifolio/
│
├── 📄 Arquivos de Configuração (Raiz)
│   ├── .env                      # Variáveis de ambiente (desenvolvimento)
│   ├── .env.production           # Variáveis de ambiente (produção)
│   ├── .gitignore                # Arquivos ignorados pelo Git
│   ├── index.html                # HTML principal (entry point)
│   ├── package.json              # Dependências e scripts
│   ├── package-lock.json         # Lock de dependências
│   ├── vite.config.ts            # Configuração do Vite
│   ├── tailwind.config.ts        # Configuração do Tailwind CSS
│   ├── tsconfig.json             # Configuração TypeScript (geral)
│   ├── tsconfig.app.json         # Configuração TypeScript (app)
│   ├── tsconfig.node.json        # Configuração TypeScript (node)
│   ├── postcss.config.js         # Configuração PostCSS
│   ├── eslint.config.js          # Configuração ESLint
│   ├── components.json           # Configuração shadcn/ui
│   ├── README.md                 # Documentação principal
│   ├── README2.md                # Guia completo de deploy
│   └── DEPLOY.md                 # Guia rápido de deploy
│
├── 📁 public/ - Arquivos Estáticos
│   ├── favicon.ico               # Ícone do site
│   ├── robots.txt                # Instruções para crawlers
│   ├── placeholder.svg           # Placeholder SVG
│   └── images/                   # Imagens dos projetos
│       ├── cadcliente1.webp      # Screenshot CadCliente
│       ├── starpet1.webp         # Screenshot StarPet
│       └── starcode.webp         # Screenshot StarCode
│
├── 📁 src/ - Código Fonte
│   ├── main.tsx                  # Entry point React
│   ├── App.tsx                   # Componente raiz
│   ├── index.css                 # Estilos globais + variáveis CSS
│   ├── vite-env.d.ts             # Tipos do Vite
│   │
│   ├── 📁 assets/                # Assets do projeto
│   │   └── profile-photo.jpg     # Foto de perfil
│   │
│   ├── 📁 pages/                 # Páginas da aplicação
│   │   ├── Index.tsx             # Página principal (home)
│   │   └── NotFound.tsx          # Página 404
│   │
│   ├── 📁 components/            # Componentes React
│   │   ├── Navbar.tsx            # Barra de navegação
│   │   ├── Hero.tsx              # Seção hero + timeline
│   │   ├── Services.tsx          # Seção de serviços
│   │   ├── Skills.tsx            # Seção de habilidades
│   │   ├── Projects.tsx          # Seção de projetos (Supabase)
│   │   ├── Contact.tsx           # Seção de contato
│   │   ├── Footer.tsx            # Rodapé
│   │   ├── ParticlesBackground.tsx # Fundo animado
│   │   ├── ScrollToTop.tsx       # Botão scroll to top
│   │   ├── SearchModal.tsx       # Modal de busca
│   │   ├── NavLink.tsx           # Link de navegação
│   │   └── ui/                   # Componentes shadcn/ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── toast.tsx
│   │       └── ... (49 componentes)
│   │
│   ├── 📁 hooks/                 # Custom React Hooks
│   │   ├── use-toast.ts          # Hook para toasts
│   │   └── use-mobile.tsx        # Hook para detecção mobile
│   │
│   ├── 📁 lib/                   # Utilitários
│   │   └── utils.ts              # Funções auxiliares (cn, etc)
│   │
│   └── 📁 integrations/          # Integrações externas
│       └── supabase/             # Configuração Supabase
│           ├── client.ts         # Cliente Supabase
│           └── types.ts          # Tipos do banco de dados
│
└── 📁 supabase/                  # Configurações Supabase
    ├── config.toml               # Configuração do projeto
    └── migrations/               # Migrações do banco
```

---

## 🧩 Componentes Principais

### **Navbar.tsx**

- Navegação fixa no topo
- Scroll spy (destaca seção atual)
- Menu mobile responsivo
- Links de navegação suaves

**Dependências**:

- `NavLink.tsx`
- `SearchModal.tsx`
- Framer Motion para animações

### **Hero.tsx**

- Seção de apresentação
- Efeito typewriter no título
- Foto de perfil com animações
- Timeline de experiência/educação
- Botão LinkedIn

**Características**:

- Parallax scroll effect
- Stagger animations
- Floating animations
- Glow effects

### **Projects.tsx**

- Carrega projetos do Supabase
- Cards com preview
- Links para GitHub e demo
- Tags de tecnologias
- Loading state

**Integração**:

- Supabase client
- TanStack Query para cache
- Framer Motion para animações

### **ParticlesBackground.tsx**

- Fundo animado com partículas
- Canvas HTML5
- Efeito parallax
- Performance otimizada

---

## 🎨 Sistema de Design

### **Cores (Tailwind CSS)**

Definidas em `src/index.css` usando variáveis CSS HSL:

```css
:root {
  --background: 222.2 84% 4.9%; /* Fundo escuro */
  --foreground: 210 40% 98%; /* Texto claro */
  --primary: 330 80% 60%; /* Rosa/magenta */
  --accent: 280 80% 50%; /* Roxo */
  --cyan-accent: 180 80% 50%; /* Ciano */
  --green-accent: 142 76% 36%; /* Verde */
  --border: 217.2 32.6% 17.5%; /* Bordas */
  --card: 222.2 84% 4.9%; /* Cards */
  --muted: 217.2 32.6% 17.5%; /* Texto secundário */
}
```

### **Tipografia**

```typescript
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'Poppins', 'sans-serif'],
  script: ['Dancing Script', 'cursive'],
}
```

### **Animações Customizadas**

```typescript
// tailwind.config.ts
keyframes: {
  "fade-in": {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "slide-up": {
    "0%": { opacity: "0", transform: "translateY(40px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "scale-in": {
    "0%": { opacity: "0", transform: "scale(0.9)" },
    "100%": { opacity: "1", transform: "scale(1)" },
  },
}
```

---

## 🔌 Integrações

### **Supabase**

**Arquivo**: `src/integrations/supabase/client.ts`

```typescript
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
```

**Uso em componentes**:

```typescript
// Projects.tsx
import { supabase } from "@/integrations/supabase/client";

const { data, error } = await supabase
  .from("projects")
  .select("*")
  .order("created_at", { ascending: false });
```

### **TanStack Query**

**Arquivo**: `src/App.tsx`

```typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* ... */}
  </QueryClientProvider>
);
```

---

## 🎭 Padrões de Código

### **Componentes**

```typescript
// Padrão de componente funcional
import { motion } from "framer-motion";

interface ComponentProps {
  title: string;
  description?: string;
}

const Component = ({ title, description }: ComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
};

export default Component;
```

### **Hooks Customizados**

```typescript
// Padrão de custom hook
import { useState, useEffect } from "react";

export const useCustomHook = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Lógica do hook
  }, [value]);

  return { value, setValue };
};
```

### **Utilitários**

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina classes Tailwind sem conflitos
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🚀 Performance

### **Code Splitting**

Vite faz code splitting automático:

- Cada rota é um chunk separado
- Componentes grandes podem ser lazy loaded
- Bibliotecas são separadas em vendor chunks

### **Otimizações de Imagens**

```typescript
// ✅ Bom: Import de imagens (otimizado pelo Vite)
import profilePhoto from "@/assets/profile-photo.jpg";
<img src={profilePhoto} alt="Profile" />

// ✅ Bom: Imagens em public/ (servidas estaticamente)
<img src="/images/project.webp" alt="Project" />

// ❌ Evitar: URLs externas não otimizadas
<img src="https://example.com/large-image.jpg" />
```

### **Lazy Loading**

```typescript
import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HeavyComponent />
  </Suspense>
);
```

---

## 🔒 Segurança

### **Variáveis de Ambiente**

```env
# ✅ Seguro: Variáveis públicas (expostas no cliente)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGci...

# ❌ NUNCA: Chaves secretas em VITE_*
# VITE_SECRET_KEY=xxx  # NÃO FAZER!
```

**Regra**: Prefixo `VITE_` = público no bundle do cliente

### **Supabase RLS (Row Level Security)**

Configure políticas no Supabase:

```sql
-- Permitir leitura pública de projetos
CREATE POLICY "Public read access"
ON projects FOR SELECT
USING (true);

-- Restringir escrita (apenas autenticados)
CREATE POLICY "Authenticated write access"
ON projects FOR INSERT
USING (auth.role() = 'authenticated');
```

---

## 📊 Banco de Dados

### **Schema da Tabela `projects`**

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  techs TEXT[] NOT NULL,              -- Array de strings
  image TEXT,                         -- URL da imagem
  github TEXT,                        -- URL do GitHub
  live TEXT,                          -- URL do site
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índice para ordenação
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);
```

### **Exemplo de Dados**

```sql
INSERT INTO projects (title, description, techs, image, github, live)
VALUES (
  'Sistema de Cadastro',
  'Sistema completo de cadastro de clientes com validação de dados.',
  ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  '/images/cadcliente1.webp',
  'https://github.com/usuario/cadcliente',
  'https://cadcliente.exemplo.com'
);
```

---

## 🧪 Testes (Futuro)

### **Estrutura Sugerida**

```
src/
├── components/
│   ├── Hero.tsx
│   └── __tests__/
│       └── Hero.test.tsx
```

### **Ferramentas Recomendadas**

- **Vitest** - Test runner (compatível com Vite)
- **React Testing Library** - Testes de componentes
- **Playwright** - Testes E2E

---

## 📝 Convenções

### **Nomenclatura**

- **Componentes**: PascalCase (`Hero.tsx`, `NavLink.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useToast.ts`)
- **Utilitários**: camelCase (`utils.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`)

### **Imports**

```typescript
// 1. Bibliotecas externas
import { motion } from "framer-motion";
import { useState } from "react";

// 2. Alias @ (src/)
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

// 3. Relativos (mesmo diretório)
import { helper } from "./helper";
```

### **Commits**

```bash
# Padrão: tipo(escopo): mensagem

feat(projects): add filtering by technology
fix(navbar): resolve mobile menu overflow
docs(readme): update deployment instructions
style(hero): adjust spacing and colors
refactor(utils): simplify cn function
perf(images): optimize image loading
test(projects): add unit tests
```

---

## 🔄 Workflow de Desenvolvimento

### **1. Desenvolvimento Local**

```bash
# Instalar dependências
npm install

# Iniciar servidor
npm run dev

# Acessar: http://localhost:8080
```

### **2. Adicionar Nova Feature**

```bash
# Criar branch
git checkout -b feature/nova-funcionalidade

# Desenvolver e testar
npm run dev

# Commit
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Push
git push origin feature/nova-funcionalidade
```

### **3. Build e Preview**

```bash
# Build de produção
npm run build

# Preview local
npm run preview

# Testar em: http://localhost:4173
```

### **4. Deploy**

```bash
# Merge para main
git checkout main
git merge feature/nova-funcionalidade

# Push
git push origin main

# Deploy
npm run deploy
```

---

## 📚 Recursos Úteis

### **Documentação**

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

### **Ferramentas**

- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Tailwind Play](https://play.tailwindcss.com/)
- [Regex101](https://regex101.com/)
- [Can I Use](https://caniuse.com/)

---

## 🎯 Próximos Passos

### **Melhorias Sugeridas**

1. **SEO**
   - [ ] Adicionar sitemap.xml
   - [ ] Melhorar meta tags
   - [ ] Implementar schema.org

2. **Performance**
   - [ ] Implementar lazy loading de imagens
   - [ ] Adicionar service worker (PWA)
   - [ ] Otimizar bundle size

3. **Funcionalidades**
   - [ ] Sistema de busca de projetos
   - [ ] Filtros por tecnologia
   - [ ] Blog integrado
   - [ ] Modo de apresentação

4. **Testes**
   - [ ] Configurar Vitest
   - [ ] Adicionar testes unitários
   - [ ] Implementar testes E2E

5. **Analytics**
   - [ ] Google Analytics
   - [ ] Hotjar/Clarity
   - [ ] Monitoramento de erros (Sentry)

---

**Última atualização**: Janeiro 2026  
**Versão**: 1.0.0
