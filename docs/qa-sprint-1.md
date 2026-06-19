# Casos de Teste — Sprint 1

**Agente responsável:** QA  
**Versão testada:** 0.2.0  
**Data:** 2026-06-18  
**Resultado:** APROVADO

---

## TC-S1-001 — Colocar tile de caminho

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Entrar na cena de jogo 2. Clicar em célula vazia |
| **Resultado esperado** | Tile marrom (caminho) aparece; contador decrementa |
| **Status** | PASS |

---

## TC-S1-002 — Remover tile de caminho

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Clicar em célula com caminho |
| **Resultado esperado** | Tile volta a grama; contador incrementa |
| **Status** | PASS |

---

## TC-S1-003 — Limite de 20 tiles

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Colocar 20 tiles 2. Tentar colocar o 21º |
| **Resultado esperado** | 21º tile não é colocado; contador permanece 0/20 |
| **Status** | PASS |

---

## TC-S1-004 — Contador HUD

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Observar HUD ao colocar/remover tiles |
| **Resultado esperado** | Exibe "Tiles: N/20" atualizado em tempo real |
| **Status** | PASS |

---

## TC-S1-005 — Bloqueio sobre coelho e cenoura

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Tentar clicar nas células do coelho e cenoura |
| **Resultado esperado** | Nenhuma alteração no grid |
| **Status** | PASS |

---

## TC-S1-006 — Validação caminho inválido

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Colocar tiles desconectados do coelho 2. Verificar botão "Ir!" |
| **Resultado esperado** | Botão "Ir!" desabilitado (cinza, opacidade reduzida) |
| **Status** | PASS |

---

## TC-S1-007 — Validação caminho válido

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Construir caminho contínuo do coelho (0,0) à cenoura (7,0) 2. Verificar botão "Ir!" |
| **Resultado esperado** | Botão "Ir!" habilitado (laranja) |
| **Status** | PASS |

---

## TC-S1-008 — Feedback ao clicar "Ir!" com caminho válido

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Com caminho válido, clicar "Ir!" |
| **Resultado esperado** | Mensagem "Caminho válido! Pronto para ir." exibida |
| **Status** | PASS |

---

## TC-S1-009 — Botão Menu

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Clicar "Menu" no HUD |
| **Resultado esperado** | Retorna à tela inicial |
| **Status** | PASS |

---

## TC-S1-010 — Build de produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Executar `npm run build` |
| **Resultado esperado** | Build concluída sem erros |
| **Status** | PASS |

---

## Bugs Encontrados

Nenhum bug bloqueante na Sprint 1.
