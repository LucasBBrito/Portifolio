# 🚀 Deploy GitHub Pages - Projeto Lovable

## 📌 Contexto

Este projeto foi criado com **[Lovable](https://lovable.dev/)**, uma plataforma de desenvolvimento que:

- ✅ Já configurou automaticamente o repositório Git
- ✅ Já faz deploy na plataforma Lovable
- ✅ Já está clonado localmente na sua máquina

**Objetivo**: Configurar deploy **adicional** no GitHub Pages, mantendo o deploy do Lovable funcionando.

---

## ⚡ Deploy Rápido (5 Minutos)

### **Pré-requisitos**

- ✅ Projeto Lovable já clonado
- ✅ Node.js e npm instalados
- ✅ Git configurado

---

### **PASSO 1: Verificar Configuração Atual**

```bash
# Navegar até a pasta do projeto
cd d:\projetos_Github\Portifolio

# Verificar remote do Git (deve mostrar o repositório GitHub)
git remote -v

# Verificar branch atual
git branch

# Verificar status
git status
```

**✅ Tudo OK?** Prossiga para o PASSO 2.

---

### **PASSO 2: Instalar Dependência**

```bash
npm install --save-dev gh-pages
```

---

### **PASSO 3: Configurar vite.config.ts**

Abra `vite.config.ts` e adicione a propriedade `base`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ⬇️ ADICIONAR ESTA LINHA ⬇️
  base: "/Portifolio/", // ⚠️ Use o nome EXATO do seu repositório

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

**⚠️ IMPORTANTE**:

- Se o repositório se chama `Portifolio`, use `base: "/Portifolio/"`
- Se se chama `portfolio`, use `base: "/portfolio/"`
- Sempre com barras no início e no final!

---

### **PASSO 4: Adicionar Scripts de Deploy**

Abra `package.json` e adicione os scripts de deploy:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",

    // ⬇️ ADICIONAR ESTAS DUAS LINHAS ⬇️
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

### **PASSO 5: Criar .env.production**

Crie o arquivo `.env.production` na raiz do projeto com as mesmas variáveis do `.env`:

```env
VITE_SUPABASE_PROJECT_ID=zwtyhxxdtdqroxuwkwzr
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHloeHhkdGRxcm94dXdrd3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NTkwMjAsImV4cCI6MjA4MTEzNTAyMH0.2uOlhp08mXBqODKRrs25zwiKTt5Fp50u3LVYUUtAk04
VITE_SUPABASE_URL=https://zwtyhxxdtdqroxuwkwzr.supabase.co
```

**💡 Dica**: Copie do arquivo `.env` existente!

---

### **PASSO 6: Testar Build Localmente**

```bash
# Fazer build
npm run build

# Testar localmente
npm run preview
```

Acesse `http://localhost:4173` e teste:

- ✅ Site carrega
- ✅ Estilos funcionam
- ✅ Animações funcionam
- ✅ Projetos carregam do Supabase
- ✅ Links funcionam

**⚠️ Se algo não funcionar**: Verifique o Console (F12) para erros.

---

### **PASSO 7: Commit das Alterações**

```bash
# Adicionar arquivos modificados
git add vite.config.ts package.json package-lock.json .env.production

# Fazer commit
git commit -m "feat: configure GitHub Pages deployment"

# Push para o GitHub
git push
```

**💡 Nota**: O Lovable detectará automaticamente e fará deploy das alterações também!

---

### **PASSO 8: Deploy no GitHub Pages**

```bash
npm run deploy
```

**O que acontece**:

1. ✅ Faz build automático (`predeploy`)
2. ✅ Cria branch `gh-pages` no GitHub
3. ✅ Publica a pasta `dist/` no branch
4. ✅ GitHub Pages detecta e publica o site

**Saída esperada**:

```
> predeploy
> vite build

✓ built in 12s

> deploy
> gh-pages -d dist

Published
```

---

### **PASSO 9: Configurar GitHub Pages**

1. Acesse seu repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Clique em **Save**
5. Aguarde 2-5 minutos

---

### **PASSO 10: Acessar o Site**

Seu site estará em:

```
https://SEU_USUARIO.github.io/Portifolio/
```

**Exemplo**: `https://lucasbbrito.github.io/Portifolio/`

---

## ✅ Checklist Completo

- [ ] `gh-pages` instalado
- [ ] `base` adicionado no `vite.config.ts`
- [ ] Scripts `predeploy` e `deploy` no `package.json`
- [ ] `.env.production` criado
- [ ] Build testado localmente
- [ ] Commit e push feitos
- [ ] `npm run deploy` executado
- [ ] GitHub Pages configurado
- [ ] Site acessível online

---

## 🔄 Workflow de Atualização

Sempre que fizer alterações:

```bash
# 1. Desenvolver localmente
npm run dev

# 2. Testar alterações
# ... fazer suas modificações ...

# 3. Commit (Lovable detecta automaticamente)
git add .
git commit -m "feat: descrição da alteração"
git push

# 4. Deploy no GitHub Pages
npm run deploy
```

**💡 Resultado**:

- ✅ Deploy automático no Lovable
- ✅ Deploy manual no GitHub Pages

---

## 🐛 Problemas Comuns

### **Página em branco**

```typescript
// Verifique o base no vite.config.ts
base: "/NOME_EXATO_DO_REPOSITORIO/",  // Com barras!
```

### **CSS não carrega**

```bash
# Limpar e rebuild
rm -rf dist
npm run build
npm run deploy
```

### **Projetos não carregam**

```bash
# Verificar .env.production existe e está correto
cat .env.production

# Testar localmente
npm run build
npm run preview
```

### **Erro de permissão no deploy**

```bash
# Verificar autenticação Git
git config user.name
git config user.email

# Se necessário, usar HTTPS
git remote set-url origin https://github.com/SEU_USUARIO/Portifolio.git
```

---

## 🎯 Diferenças: Lovable vs GitHub Pages

| Aspecto          | Lovable           | GitHub Pages              |
| ---------------- | ----------------- | ------------------------- |
| **Deploy**       | Automático (push) | Manual (`npm run deploy`) |
| **URL**          | `*.lovable.app`   | `*.github.io`             |
| **Configuração** | Zero config       | Requer setup              |
| **Velocidade**   | Instantâneo       | 2-5 minutos               |
| **Uso**          | Desenvolvimento   | Produção/Portfólio        |

**💡 Recomendação**:

- Use **Lovable** para desenvolvimento e testes rápidos
- Use **GitHub Pages** para o portfólio público final

---

## 📚 Documentação Completa

Para guia detalhado com troubleshooting avançado:

- **[README2.md](./README2.md)** - Guia completo de deploy
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitetura do projeto
- **[INDEX.md](./INDEX.md)** - Índice da documentação

---

## 🎓 Próximos Passos

Após o deploy:

1. ✅ Teste todas as funcionalidades online
2. ✅ Adicione mais projetos no Supabase
3. ✅ Personalize o conteúdo
4. ✅ Compartilhe o link nas redes sociais
5. ✅ Adicione ao LinkedIn

---

## 💡 Dicas Importantes

### **Manter Sincronizado**

```bash
# Sempre que o Lovable fizer alterações
git pull  # Baixar alterações do Lovable
npm run deploy  # Atualizar GitHub Pages
```

### **Variáveis de Ambiente**

- ✅ `.env` - Desenvolvimento local
- ✅ `.env.production` - Build de produção
- ⚠️ Ambos devem estar no `.gitignore`

### **Base Path**

- ✅ Desenvolvimento: Não precisa de `base`
- ✅ Produção: Precisa de `base: "/Portifolio/"`
- 💡 O Vite usa automaticamente conforme o modo

---

## 🎉 Conclusão

Agora você tem:

- ✅ Deploy automático no Lovable (para desenvolvimento)
- ✅ Deploy manual no GitHub Pages (para produção)
- ✅ Dois URLs funcionando simultaneamente
- ✅ Workflow de atualização simples

**🚀 Seu portfólio está no ar!**

---

**Desenvolvido com ❤️ usando Lovable**  
**Última atualização**: Janeiro 2026
