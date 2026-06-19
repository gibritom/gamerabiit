# Casos de Teste — Sprint 3

**Agente responsável:** QA  
**Versão testada:** 0.4.0  
**Data:** 2026-06-18  
**Resultado:** APROVADO

---

## TC-S3-001 — HUD exibe pontuação da sessão

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Entrar na cena de jogo |
| **Resultado esperado** | "Pts: 0" visível no canto superior esquerdo |
| **Status** | PASS |

---

## TC-S3-002 — Som ao colocar tile

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Clicar em célula vazia para colocar caminho |
| **Resultado esperado** | Som curto de confirmação |
| **Status** | PASS |

---

## TC-S3-003 — Som ao remover tile

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Clicar em tile de caminho existente |
| **Resultado esperado** | Som de remoção (tom mais baixo) |
| **Status** | PASS |

---

## TC-S3-004 — Som de erro ao exceder limite

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Colocar 20 tiles 2. Tentar colocar o 21º |
| **Resultado esperado** | Som de erro + mensagem "Sem tiles restantes!" |
| **Status** | PASS |

---

## TC-S3-005 — Flash visual ao colocar tile

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Colocar tile e observar |
| **Resultado esperado** | Flash amarelo breve no tile colocado |
| **Status** | PASS |

---

## TC-S3-006 — Pontuação na vitória

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar fase |
| **Resultado esperado** | Overlay exibe "Fase: X pts" (mínimo 1000) |
| **Status** | PASS |

---

## TC-S3-007 — Bônus por tiles não usados

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar com 6 tiles (mínimo na linha reta) vs 15 tiles 2. Comparar scores |
| **Resultado esperado** | Score com menos tiles é maior (+50 por tile não usado) |
| **Status** | PASS |

---

## TC-S3-008 — Pontuação acumulada na sessão

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Vencer fase 2. Jogar novamente 3. Verificar HUD |
| **Resultado esperado** | "Pts:" reflete total acumulado; overlay mostra "Total: X pts" |
| **Status** | PASS |

---

## TC-S3-009 — Som de vitória

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar movimento até cenoura |
| **Resultado esperado** | Arpeggio de vitória tocado |
| **Status** | PASS |

---

## TC-S3-010 — Build de produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Executar `npm run build` |
| **Resultado esperado** | Build concluída sem erros |
| **Status** | PASS |

---

## Bugs Encontrados

Nenhum bug bloqueante na Sprint 3.
