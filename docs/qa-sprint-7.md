# Casos de Teste — Sprint 7

**Agente responsável:** QA  
**Versão testada:** 1.2.0  
**Ambiente:** Build de produção (`npm run build`)  
**Data:** 2026-06-19  
**Resultado:** APROVADO

---

## TC-S7-001 — Estrelas visíveis por fase

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Iniciar cada fase 2. Verificar grid |
| **Resultado esperado** | Estrelas ★ visíveis nas posições definidas |
| **Status** | PASS |

---

## TC-S7-002 — Coleta durante movimento

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Construir caminho passando por estrela 2. Ir! |
| **Resultado esperado** | Estrela desaparece; som de coleta |
| **Status** | PASS |

---

## TC-S7-003 — HUD colecionáveis

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Coletar estrela 2. Verificar HUD |
| **Resultado esperado** | ★ X/Y atualiza após coleta |
| **Status** | PASS |

---

## TC-S7-004 — Bônus de pontuação

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar fase com 1 estrela 2. Ver overlay |
| **Resultado esperado** | Score inclui +150 pts por estrela |
| **Status** | PASS |

---

## TC-S7-005 — Vitória sem coletar tudo

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Ignorar estrelas 2. Completar fase |
| **Resultado esperado** | Vitória normal; colecionáveis 0/N no overlay |
| **Status** | PASS |

---

## TC-S7-006 — Regressão Sprint 6

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Progressão Fase 1→5 2. Score acumulado |
| **Resultado esperado** | Múltiplas fases intactas |
| **Status** | PASS |

---

## Resumo

| Total | Pass | Fail |
|-------|------|------|
| 6 | 6 | 0 |
