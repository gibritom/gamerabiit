# Casos de Teste — Sprint 2

**Agente responsável:** QA  
**Versão testada:** 0.3.0  
**Data:** 2026-06-18  
**Resultado:** APROVADO

---

## TC-S2-001 — Iniciar movimento com "Ir!"

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Construir caminho válido 2. Clicar "Ir!" |
| **Resultado esperado** | Coelho inicia movimento; grid bloqueado para edição |
| **Status** | PASS |

---

## TC-S2-002 — Animação tile a tile

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Observar coelho durante movimento |
| **Resultado esperado** | Coelho move-se célula a célula (~300 ms por tile) |
| **Status** | PASS |

---

## TC-S2-003 — Coelho segue caminho construído

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Construir caminho em L 2. Clicar "Ir!" |
| **Resultado esperado** | Coelho segue exatamente o caminho ortogonal |
| **Status** | PASS |

---

## TC-S2-004 — Vitória ao chegar na cenoura

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Completar movimento até cenoura |
| **Resultado esperado** | Overlay "VITÓRIA! 🎉" exibido |
| **Status** | PASS |

---

## TC-S2-005 — Reinício após vitória

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Na tela de vitória, clicar "JOGAR NOVAMENTE" |
| **Resultado esperado** | Grid limpo; coelho na posição inicial; modo construção |
| **Status** | PASS |

---

## TC-S2-006 — Bloqueio durante movimento

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Durante movimento, tentar clicar no grid ou "Ir!" |
| **Resultado esperado** | Nenhuma interação possível |
| **Status** | PASS |

---

## TC-S2-007 — Coelho como entidade móvel

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Observar célula inicial do coelho |
| **Resultado esperado** | Um único coelho visível que se desloca (não duplicado) |
| **Status** | PASS |

---

## TC-S2-008 — Menu bloqueado durante movimento

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Durante movimento, tentar clicar "Menu" |
| **Resultado esperado** | Menu não responde até reinício |
| **Status** | PASS |

---

## TC-S2-009 — Build de produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Executar `npm run build` |
| **Resultado esperado** | Build concluída sem erros |
| **Status** | PASS |

---

## Bugs Encontrados

Nenhum bug bloqueante na Sprint 2.
