# Casos de Teste — Sprint 0

**Agente responsável:** QA  
**Versão testada:** 0.1.0  
**Data:** 2026-06-18  
**Resultado:** APROVADO

---

## TC-S0-001 — Jogo carrega no navegador

| Campo | Valor |
|-------|-------|
| **Pré-condição** | `npm install` e `npm run dev` executados |
| **Passos** | 1. Abrir http://localhost:3000 |
| **Resultado esperado** | Canvas Phaser renderiza sem erros no console |
| **Status** | PASS |

---

## TC-S0-002 — Tela inicial exibe título e botão

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Aguardar carregamento automático |
| **Resultado esperado** | Título "O CAMINHO DO COELHO" visível; botão "JOGAR" visível |
| **Status** | PASS |

---

## TC-S0-003 — Navegação menu → jogo

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Clicar em "JOGAR" |
| **Resultado esperado** | Transição para cena de jogo sem erro |
| **Status** | PASS |

---

## TC-S0-004 — Grid 8×8 visível

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Na cena de jogo, contar células visíveis |
| **Resultado esperado** | Grid 8×8 centralizado; HUD "Fase 1" e "Tiles: --" |
| **Status** | PASS |

---

## TC-S0-005 — Placeholders coelho e cenoura

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Verificar canto superior esquerdo e direito do grid |
| **Resultado esperado** | Coelho (canto sup. esq.) e cenoura (canto sup. dir.) visíveis |
| **Status** | PASS |

---

## TC-S0-006 — Botão "Ir!" desabilitado visualmente

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Verificar botão no rodapé |
| **Resultado esperado** | Botão "Ir!" visível com opacidade reduzida (não funcional — Sprint 0) |
| **Status** | PASS |

---

## TC-S0-007 — Build de produção

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Executar `npm run build` |
| **Resultado esperado** | Build concluída sem erros; pasta `dist/` gerada |
| **Status** | PASS |

---

## TC-S0-008 — Documentação consistente

| Campo | Valor |
|-------|-------|
| **Passos** | 1. Verificar existência de gdd.md, architecture.md, backlog.md, roadmap.md, readme.md |
| **Resultado esperado** | Todos preenchidos com conteúdo real (não templates) |
| **Status** | PASS |

---

## Bugs Encontrados

Nenhum bug bloqueante na Sprint 0.

---

## Observações

- Bundle Phaser (~1.5 MB) gera warning de tamanho — aceitável para MVP; otimização futura via code-splitting.
- npm audit reporta 2 vulnerabilidades em devDependencies — não bloqueia Sprint 0.
