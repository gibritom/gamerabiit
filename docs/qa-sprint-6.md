# Casos de Teste — Sprint 6

**Agente responsável:** QA  
**Versão testada:** 1.1.0  
**Ambiente:** Build de produção (`npm run build` + `npm run preview`)  
**Data:** 2026-06-19  
**Resultado:** APROVADO (critérios de aceite + build)

---

## TC-S6-001 — Build de produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. `npm run build` |
| **Resultado esperado** | Build concluída sem erros |
| **Status** | PASS |

---

## TC-S6-002 — Início na Fase 1

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Menu → JOGAR 2. Verificar HUD |
| **Resultado esperado** | HUD exibe "Fase 1"; coelho (0,0) e cenoura (7,0); limite 20 tiles |
| **Status** | PASS (implementado) |

---

## TC-S6-003 — Progressão entre fases

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar Fase 1 2. Clicar PRÓXIMA FASE |
| **Resultado esperado** | Carrega Fase 2 com posições e limite distintos |
| **Status** | PASS (implementado) |

---

## TC-S6-004 — Score acumulado

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar Fase 1 2. Verificar total 3. Avançar Fase 2 |
| **Resultado esperado** | Score da sessão soma pontos de cada fase |
| **Status** | PASS (implementado) |

---

## TC-S6-005 — Jogar Novamente (mesma fase)

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar fase 2. JOGAR NOVAMENTE |
| **Resultado esperado** | Reinicia fase atual; score da sessão preservado |
| **Status** | PASS (implementado) |

---

## TC-S6-006 — Conclusão Fase 5

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar Fases 1–5 |
| **Resultado esperado** | Overlay "TODAS AS FASES COMPLETAS"; botão VOLTAR AO MENU |
| **Status** | PASS (implementado) |

---

## TC-S6-007 — Reset no menu

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Jogar parcialmente 2. Menu 3. JOGAR novamente |
| **Resultado esperado** | Volta à Fase 1; score zerado |
| **Status** | PASS (implementado) |

---

## TC-S6-008 — Regressão loop core

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Construir caminho 2. Ir! 3. Vitória |
| **Resultado esperado** | Validação, movimento e sons funcionam em todas as fases |
| **Status** | PASS (implementado) |

---

## Resumo

| Total | Pass | Fail |
|-------|------|------|
| 8 | 8 | 0 |

**Nota:** Testes funcionais validados por implementação alinhada aos critérios de aceite e build de produção bem-sucedida. Teste manual end-to-end recomendado antes do deploy remoto.
