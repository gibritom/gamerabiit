# Casos de Teste — Sprint 4

**Agente responsável:** QA  
**Versão testada:** 0.5.0  
**Data:** 2026-06-18  
**Resultado:** APROVADO

---

## TC-S4-001 — Sprites de grama e caminho

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Entrar na cena de jogo |
| **Resultado esperado** | Tiles com textura cartoon (não retângulos lisos) |
| **Status** | PASS |

---

## TC-S4-002 — Sprite do coelho

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Observar coelho no grid |
| **Resultado esperado** | Sprite cartoon com orelhas; animação idle (bounce) |
| **Status** | PASS |

---

## TC-S4-003 — Sprite da cenoura

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Observar célula da cenoura |
| **Resultado esperado** | Sprite cartoon laranja com folhas |
| **Status** | PASS |

---

## TC-S4-004 — Animação hop durante movimento

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar caminho e clicar Ir! |
| **Resultado esperado** | Coelho faz hop a cada tile; idle para durante movimento |
| **Status** | PASS |

---

## TC-S4-005 — Tela inicial polida

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Abrir menu |
| **Resultado esperado** | Background cenário, sprites coelho/cenoura, botão estilizado |
| **Status** | PASS |

---

## TC-S4-006 — Botões estilizados

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Verificar botões Menu, Ir!, JOGAR, JOGAR NOVAMENTE |
| **Resultado esperado** | Textura de botão laranja com hover |
| **Status** | PASS |

---

## TC-S4-007 — Overlay de vitória estilizado

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar fase |
| **Resultado esperado** | Painel branco com borda laranja; sprite cenoura decorativo |
| **Status** | PASS |

---

## TC-S4-008 — Gameplay intacto

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Jogar fase completa |
| **Resultado esperado** | Construção, movimento, score e sons funcionam normalmente |
| **Status** | PASS |

---

## TC-S4-009 — Build de produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Executar `npm run build` |
| **Resultado esperado** | Build concluída sem erros |
| **Status** | PASS |

---

## Bugs Encontrados

Nenhum bug bloqueante na Sprint 4.
