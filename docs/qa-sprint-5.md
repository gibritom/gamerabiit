# Casos de Teste — Sprint 5

**Agente responsável:** QA  
**Versão testada:** 1.0.0  
**Ambiente:** Build de produção (`npm run preview` — simula deploy)  
**Data:** 2026-06-18  
**Resultado:** APROVADO (10/10)

---

## TC-S5-001 — Build de produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. `npm run build` |
| **Resultado esperado** | Build concluída; pasta `dist/` gerada |
| **Status** | PASS |

---

## TC-S5-002 — Preview local (simula produção)

| Campo | Valor |
|-------|-------|
| **Passos** | 1. `npm run preview` 2. Abrir http://localhost:4173 |
| **Resultado esperado** | Jogo carrega sem erros |
| **Status** | PASS |

---

## TC-S5-003 — Menu em produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Abrir preview 2. Verificar menu |
| **Resultado esperado** | Título, mascotes, botão JOGAR visíveis |
| **Status** | PASS |

---

## TC-S5-004 — Fluxo completo em produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. JOGAR 2. Colocar tiles 3. Ir! 4. Vitória |
| **Resultado esperado** | Loop completo funcional |
| **Status** | PASS |

---

## TC-S5-005 — Assets carregam (base relativa)

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Verificar console no preview |
| **Resultado esperado** | Sem 404 em assets JS |
| **Status** | PASS |

---

## TC-S5-006 — Versão 1.0.0

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Verificar `package.json` |
| **Resultado esperado** | `"version": "1.0.0"` |
| **Status** | PASS |

---

## TC-S5-007 — Workflow CI presente

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Verificar `.github/workflows/deploy.yml` |
| **Resultado esperado** | Pipeline build + deploy Pages configurado |
| **Status** | PASS |

---

## TC-S5-008 — Documentação de deploy

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Verificar `docs/deploy.md` e `docs/RELEASE_NOTES.md` |
| **Resultado esperado** | Instruções completas de publicação |
| **Status** | PASS |

---

## TC-S5-009 — MVP checklist

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Validar todos os itens de project-context.md |
| **Resultado esperado** | 9/9 itens MVP entregues (incl. publicação configurada) |
| **Status** | PASS |

---

## TC-S5-010 — URL pública GitHub Pages

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Acessar https://gibritom.github.io/gamerabiit/ |
| **Resultado esperado** | URL pública funcional |
| **Status** | PASS |

---

## Bugs Encontrados

Nenhum bug bloqueante no build de produção.

## Observações

- URL pública validada pelo Game Director em 2026-06-19.
- Deploy via GitHub Pages + GitHub Actions operacional.
