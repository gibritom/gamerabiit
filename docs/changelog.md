# Changelog — O Caminho do Coelho

**Agente responsável:** Documentation Master

---

## 1.1.0 — 2026-06-19

**Sprint:** 6 — Múltiplas Fases (US-100)

### Adicionado

- `src/data/levels.js` — 5 fases com posições e limites de tiles distintos
- HUD exibe "Fase N" dinamicamente
- Botão **Próxima Fase** no overlay de vitória (Fases 1–4)
- Tela de conclusão após Fase 5 (**Todas as Fases Completas**)
- Progressão linear: Fase 1 → 5 com score acumulado na sessão

### Alterado

- `GridSystem` recebe configuração por fase (coelho, cenoura, max tiles)
- `ScoreSystem.calculate()` usa limite de tiles da fase ativa
- `VictoryOverlay` suporta fluxos de próxima fase, reinício e conclusão
- Menu **JOGAR** reseta fase e score da sessão

### Removido

- Constantes `RABBIT_START`, `CARROT_START`, `MAX_PATH_TILES` de `config.js` (migradas para `levels.js`)

---

## 1.0.0 — 2026-06-18

**Sprint:** 5 — Publicação Web (MVP)

### Adicionado

- GitHub Actions workflow (`.github/workflows/deploy.yml`) — deploy automático GitHub Pages
- `docs/deploy.md` — guia de publicação
- `docs/RELEASE_NOTES.md` — release notes do MVP

### Alterado

- Versão bump para **1.0.0** — MVP completo

### MVP Entregue

Todos os itens de `project-context.md`:

- [x] Tela inicial
- [x] Grid
- [x] Construção do caminho
- [x] Movimento do coelho
- [x] Vitória
- [x] Reinício
- [x] Pontuação
- [x] Sons
- [x] Publicação Web (CI configurado)

### Bugs Conhecidos

- KI-001 — bundle size (~1.5 MB) — melhoria pós-MVP

---

## 0.5.1 — 2026-06-18

**Hotfix:** bugs visuais Sprint 4

### Corrigido

- KI-004 — MenuScene: `createGameButton` agora recebe `this` (cena); corrigia tela verde sem UI
- KI-005 — GameScene: import de `GAME_HEIGHT` adicionado; corrigia crash ao clicar JOGAR

---

## 0.5.0 — 2026-06-18

**Sprint:** 4 — Visual Polish

### Adicionado

- `AssetGenerator` — texturas cartoon (grama, caminho, coelho, cenoura, botão, background, HUD)
- `GameButton` — componente reutilizável de botão estilizado
- Background cenário (céu, colinas, sol) em Menu e Game
- Animação idle (bounce) e hop do coelho durante movimento
- Overlay de vitória com painel estilizado
- HUD com painéis visuais

### Alterado

- Placeholders geométricos substituídos por sprites em todo o jogo
- MenuScene redesenhada com mascotes e subtítulo
- GDD v1.4 e arquitetura v1.4

### Removido

- Retângulos/círculos placeholder do grid e coelho

### Bugs Conhecidos

- KI-001 — bundle size (Sprint 5)

---

## 0.4.0 — 2026-06-18

**Sprint:** 3 — Pontuação e Sons

### Adicionado

- `ScoreSystem` — 1000 base + 50/tile não usado + bônus tempo (até 500)
- `AudioManager` — sons procedurais via Web Audio API (colocar, remover, erro, vitória)
- HUD `Pts: N` — pontuação acumulada na sessão (Phaser registry)
- Flash amarelo ao colocar tile
- Overlay de vitória exibe pontos da fase e total da sessão
- Mensagem de erro visual ao tentar exceder limite de tiles

### Alterado

- `VictoryOverlay.show()` recebe phaseScore e sessionScore
- GDD v1.3 e arquitetura v1.3

### Bugs Conhecidos

- KI-001 — bundle size (Sprint 5)

---

## 0.3.0 — 2026-06-18

**Sprint:** 2 — Movimento e Vitória

### Adicionado

- `RabbitMovement` — animação tile a tile (300 ms) via Phaser tweens
- `PathValidator.findPath` — reconstrução do caminho via BFS
- `entities/Rabbit.js` — coelho como container móvel
- `ui/VictoryOverlay.js` — modal de vitória com "JOGAR NOVAMENTE"
- Estados de jogo: building → moving → victory
- Bloqueio de interações durante movimento

### Alterado

- Botão "Ir!" agora inicia movimento real do coelho
- Coelho removido do grid estático; entidade única animada
- GDD v1.2 e arquitetura v1.2

### Corrigido

- KI-003 — movimento do coelho implementado

### Bugs Conhecidos

- KI-001 — bundle size (Sprint 5)

---

## 0.2.0 — 2026-06-18

**Sprint:** 1 — Grid Interativo

### Adicionado

- `GridSystem` — estado do grid, colocar/remover tiles, limite de 20
- `PathValidator` — validação de conectividade coelho → cenoura (BFS)
- Interação por clique/toque nas células do grid
- HUD com contador "Tiles: N/20"
- Botão Menu (retorno à tela inicial)
- Botão "Ir!" habilitado quando caminho é válido
- Feedback visual "Caminho válido! Pronto para ir."

### Alterado

- `GameScene` refatorada para usar systems
- GDD v1.1 e arquitetura v1.1

### Corrigido

- KI-002 — botão "Ir!" agora responde à validação de caminho

### Bugs Conhecidos

- KI-003 — movimento do coelho pendente (Sprint 2)
- KI-001 — bundle size (Sprint 5)

---

## 0.1.0 — 2026-06-18

**Sprint:** 0 — Fundação do Projeto

### Adicionado

- Framework de documentação completo (GDD v1, arquitetura, backlog, roadmap, decisões)
- Projeto Phaser 3 + Vite + JavaScript
- Tela inicial com título e botão "JOGAR"
- Cena de jogo com grid 8×8 estático
- Placeholders geométricos: coelho, cenoura, tiles de grama
- HUD placeholder (Fase 1, Tiles: --)
- Botão "Ir!" desabilitado visualmente (placeholder)
- Casos de teste Sprint 0 (QA aprovado)

### Alterado

- Documentos `gdd.md`, `roadmap.md`, `sprints.md`, `decisions.md` preenchidos com conteúdo real

### Corrigido

- N/A (primeira versão)

### Removido

- N/A

### Bugs Conhecidos

- Bundle Phaser grande (~1.5 MB) — ver KI-001 em `known_ISSUES.md`
