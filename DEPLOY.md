# 🚀 Guia Rápido de Deploy - GitHub Pages

## ⚡ Deploy em 5 Minutos

### 1️⃣ Instalar Dependência

```bash
npm install --save-dev gh-pages
```

### 2️⃣ Configurar vite.config.ts

```typescript
export default defineConfig(({ mode }) => ({
  base: "/Portifolio/", // ⚠️ Altere para o nome do SEU repositório
  // ... resto da configuração
}));
```

### 3️⃣ Adicionar Scripts no package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 4️⃣ Criar .env.production

```env
VITE_SUPABASE_PROJECT_ID=zwtyhxxdtdqroxuwkwzr
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_URL=https://zwtyhxxdtdqroxuwkwzr.supabase.co
```

### 5️⃣ Fazer Deploy

```bash
# Build e teste local
npm run build
npm run preview

# Commit e push
git add .
git commit -m "Configure for GitHub Pages"
git push

# Deploy!
npm run deploy
```

### 6️⃣ Configurar no GitHub

1. Vá em **Settings** > **Pages**
2. Source: **gh-pages** branch, **/ (root)** folder
3. Aguarde 2-5 minutos

### 7️⃣ Acessar

```
https://SEU_USUARIO.github.io/Portifolio/
```

---

## 🔧 Checklist Rápido

- [ ] `gh-pages` instalado
- [ ] `base` configurado no vite.config.ts
- [ ] Scripts adicionados no package.json
- [ ] .env.production criado
- [ ] Build testado localmente
- [ ] Commit e push feitos
- [ ] Deploy executado
- [ ] GitHub Pages configurado
- [ ] Site acessível online

---

## ⚠️ Problemas Comuns

### Página em branco

```typescript
// vite.config.ts - Verifique o base
base: "/NOME_EXATO_DO_REPOSITORIO/",
```

### CSS não carrega

```bash
rm -rf dist
npm run build
npm run deploy
```

### Erro de permissão

```bash
git remote set-url origin https://github.com/SEU_USUARIO/Portifolio.git
```

---

## 📖 Documentação Completa

Para guia detalhado passo a passo, consulte **[README2.md](./README2.md)**

---

**✅ Pronto! Seu portfólio está no ar! 🎉**
