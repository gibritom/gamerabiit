# Deploy — O Caminho do Coelho

**Agente responsável:** Build & Release

---

## Plataforma

**GitHub Pages** (DEC-009)

Deploy automático via GitHub Actions ao fazer push na branch `main` ou `master`.

---

## Configuração inicial (uma vez)

### 1. Criar repositório no GitHub

```bash
git init
git add .
git commit -m "feat: MVP 1.0.0 — O Caminho do Coelho"
git branch -M main
git remote add origin https://github.com/gibritom/gamerabiit.git
git push -u origin main
```

### 2. Habilitar GitHub Pages

1. Repositório → **Settings** → **Pages**
2. **Source:** GitHub Actions
3. Salvar

### 3. Tag de release

```bash
git tag v1.0.0
git push origin v1.0.0
```

Opcional: criar GitHub Release a partir da tag com o conteúdo de `docs/RELEASE_NOTES.md`.

---

## URL pública

Formato padrão (project site):

```
https://gibritom.github.io/gamerabiit/
```

O workflow `.github/workflows/deploy.yml` publica o conteúdo de `dist/`.

---

## Build local

```bash
npm install
npm run build
npm run preview
```

Abra http://localhost:4173 para simular produção.

---

## CI/CD

| Evento | Ação |
|--------|------|
| Push em `main`/`master` | Build + deploy automático |
| `workflow_dispatch` | Deploy manual (Actions → Run workflow) |

---

## Troubleshooting

| Problema | Solução |
|----------|---------|
| Página em branco | Verificar console; `base: './'` em `vite.config.js` |
| 404 nos assets | Confirmar deploy via GitHub Actions (não branch `gh-pages` manual) |
| Workflow falha | Verificar `npm ci` — `package-lock.json` deve estar no repo |
| Sons não tocam | Primeiro clique do usuário ativa AudioContext (comportamento esperado) |
