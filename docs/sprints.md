# Sprints — O Caminho do Coelho

**Agente responsável:** Scrum Master

---

## Sprint 7 — Colecionáveis (US-101)

**Status:** Concluída

**Objetivo:** Estrelas colecionáveis opcionais no grid — jogador ganha bônus ao incluir no caminho.

**Versão:** 1.2.0

### Backlog

| ID | User Story | Agente | Status |
|----|-----------|--------|--------|
| S7-01 | US-101 — `CollectibleSystem` + dados em `levels.js` | Software Architect | Concluído |
| S7-02 | US-101 — Coleta durante movimento do coelho | Gameplay Developer | Concluído |
| S7-03 | US-101 — Sprite estrela + animação idle | UI/UX Designer | Concluído |
| S7-04 | US-101 — Som de coleta + HUD ★ X/Y | Gameplay Developer | Concluído |
| S7-05 | US-101 — Bônus +150 pts e overlay de vitória | Gameplay Developer | Concluído |
| S7-06 | docs/GDD + architecture v1.6 | Documentation | Concluído |
| S7-07 | Casos de teste Sprint 7 | QA | Aprovado |
| S7-08 | Build 1.2.0 | Build & Release | Concluído |

### Critérios de Aceite

- [x] Cada fase exibe estrelas em posições definidas
- [x] Coelho coleta estrela ao passar pela célula
- [x] Feedback sonoro e visual na coleta
- [x] HUD mostra ★ coletados/total
- [x] +150 pts por estrela no score da fase
- [x] Overlay de vitória exibe colecionáveis
- [x] Vitória não exige coletar todas as estrelas

### Resumo da Entrega

- **Versão:** 1.2.0 — **US-101 ENTREGUE**
- **Módulos:** `CollectibleSystem.js`, `levels.js` (collectibles), textura `STAR`

### Próxima evolução

US-102 (Telegram) · KI-001 (bundle)

---

## Sprint 6 — Múltiplas Fases (US-100)

**Status:** Concluída

**Objetivo:** 5 fases jogáveis com progressão linear — posições e limites de tiles crescentes em dificuldade.

**Versão:** 1.1.0

**Responsáveis:** Software Architect, Gameplay Developer, UI/UX Designer, QA, Documentation, Build & Release

### Backlog

| ID | User Story | Agente | Status |
|----|-----------|--------|--------|
| S6-01 | US-100 — Estrutura de dados de fases (`levels.js`) | Software Architect | Concluído |
| S6-02 | US-100 — GridSystem/GameScene carregam fase ativa | Gameplay Developer | Concluído |
| S6-03 | US-100 — HUD exibe "Fase N" | UI/UX Designer | Concluído |
| S6-04 | US-100 — Vitória avança para próxima fase | Gameplay Developer | Concluído |
| S6-05 | US-100 — Tela de conclusão após Fase 5 | UI/UX Designer | Concluído |
| S6-06 | US-100 — Score acumulado entre fases (sessão) | Gameplay Developer | Concluído |
| S6-07 | docs/GDD + architecture v1.5 | Documentation | Concluído |
| S6-08 | Casos de teste Sprint 6 | QA | Aprovado |
| S6-09 | Deploy 1.1.0 | Build & Release | Concluído (build local) |

### Dados das 5 Fases

| Fase | Coelho (col, row) | Cenoura (col, row) | Tiles máx. |
|------|-------------------|--------------------|------------|
| 1 | (0, 0) | (7, 0) | 20 |
| 2 | (0, 2) | (7, 5) | 18 |
| 3 | (2, 0) | (5, 7) | 16 |
| 4 | (0, 7) | (7, 0) | 14 |
| 5 | (1, 1) | (6, 6) | 12 |

### Critérios de Aceite

- [x] Jogador inicia na Fase 1 ao clicar JOGAR
- [x] Cada fase tem posições distintas de coelho/cenoura e limite de tiles
- [x] HUD mostra número da fase atual
- [x] Vitória na Fase N (N < 5) exibe "Próxima Fase"
- [x] Vitória na Fase 5 exibe conclusão (todas as fases completas)
- [x] "Jogar Novamente" reinicia a fase atual sem perder progresso de fases anteriores na sessão
- [x] Pontuação acumula entre fases na mesma sessão
- [x] Loop core preservado (construir → validar → Ir! → vencer)

### Resumo da Entrega

- **Versão:** 1.1.0 — **US-100 ENTREGUE**
- **Módulo:** `src/data/levels.js`
- **Build:** OK (`npm run build`)
- **QA:** `docs/qa-sprint-6.md`

### Ordem de Execução

1. **Software Architect** — `src/data/levels.js` + contrato de fase; refatorar `config.js`/`GridSystem`
2. **Gameplay Developer** — carregar fase, avanço pós-vitória, score entre fases
3. **UI/UX Designer** — HUD fase, botões Vitória (Próxima Fase / Conclusão)
4. **QA** — regressão MVP + 5 fases end-to-end
5. **Documentation** — GDD, architecture, changelog
6. **Build & Release** — tag 1.1.0 + deploy

### Riscos

- Refatorar posições hardcoded em `GameScene.createGrid()` — risco de regressão visual
- Reinício vs. avanço de fase — estados conflitantes no `VictoryOverlay`

### Dependências

- DEC-011 (aprovada)
- MVP 1.0.0 estável em produção

---

## Sprint 5 — Publicação Web (MVP)

**Status:** Concluída

**Objetivo:** MVP publicável — build de produção, CI/CD GitHub Pages, release 1.0.0.

**Responsáveis:** Build & Release, Software Architect, QA, Documentation

### Backlog

| ID | User Story | Agente | Status |
|----|-----------|--------|--------|
| S5-01 | US-050 — Deploy web | Build & Release | Concluído |
| S5-02 | US-051 — Versionamento 1.0.0 | Build & Release | Concluído |
| S5-03 | GitHub Actions deploy.yml | Build & Release | Concluído |
| S5-04 | docs/deploy.md + RELEASE_NOTES | Documentation | Concluído |
| S5-05 | Smoke tests build produção | QA | Aprovado (9/9 local) |
| S5-06 | DEC-009 GitHub Pages | Scrum Master | Concluído |
| S5-07 | URL pública live | Build & Release | Concluído |

### Resumo da Entrega

- **Versão:** 1.0.0 — **MVP COMPLETO E PUBLICADO**
- **URL:** https://gibritom.github.io/gamerabiit/
- **CI/CD:** `.github/workflows/deploy.yml`
- **QA:** 10/10 testes aprovados (incl. URL pública)
- **MVP:** 9/9 itens de project-context.md entregues

### Pendências

- Nenhuma — MVP concluído.

### Próxima evolução (pós-MVP)

US-101 → **Sprint 7 (concluída)** · US-102 (Telegram) · KI-001 (bundle).

---

## Sprint 4 — Visual Polish

**Status:** Concluída · **Versão:** 0.5.1

---

## Histórico

| Sprint | Status | Versão | Data |
|--------|--------|--------|------|
| 7 — Colecionáveis | Concluída | 1.2.0 | 2026-06-19 |
| 6 — Múltiplas Fases | Concluída | 1.1.0 | 2026-06-19 |
| 5 — Publicação MVP | Concluída | 1.0.0 | 2026-06-18 |
| 4 — Visual Polish | Concluída | 0.5.1 | 2026-06-18 |
| 3 — Pontuação e Sons | Concluída | 0.4.0 | 2026-06-18 |
| 2 — Movimento e Vitória | Concluída | 0.3.0 | 2026-06-18 |
| 1 — Grid Interativo | Concluída | 0.2.0 | 2026-06-18 |
| 0 — Fundação | Concluída | 0.1.0 | 2026-06-18 |
