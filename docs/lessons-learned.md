# Lessons Learned — O Caminho do Coelho

**Agente responsável:** Documentation

---

## Sprint 0 — 2026-06-18

### O que funcionou

- Framework de agentes permitiu execução ordenada sem ambiguidade de responsabilidades.
- Placeholders geométricos em código eliminaram dependência de assets na fundação.
- Vite + Phaser 3 setup rápido (~5 min para bootstrap funcional).

### O que melhorar

- Padronizar nomes de arquivos desde o início (gdd.md vs GDD.md, decisions.md).
- Definir dimensões do grid e stack técnica antes da implementação evita retrabalho.

### Decisões a manter

- Bootstrap jogável como critério de sprint (mesmo sem mecânica) cumpre a constituição.
- Grid 8×8 é tamanho adequado para puzzle casual.

### Riscos observados

- Bundle size do Phaser — monitorar na sprint de publicação.

---

## Sprint 1 — 2026-06-18

### O que funcionou

- Separação GridSystem / PathValidator manteve GameScene enxuta (~200 linhas).
- BFS simples para validação de caminho — suficiente para grid 8×8.
- Toggle click (colocar/remover) é intuitivo para casual players.

### O que melhorar

- Feedback visual ao colocar tile (flash) — previsto Sprint 3.

### Decisões a manter

- Limite de 20 tiles equilibra puzzle na fase 1 (coelho e cenoura na mesma linha).
- Botão "Ir!" sem movimento na Sprint 1 evita antecipar Sprint 2.

---

## Sprint 2 — 2026-06-18

### O que funcionou

- BFS com `findPath` reutiliza lógica do validador sem duplicar código.
- `scene.restart()` simplifica reinício — grid e coelho resetam automaticamente.
- VictoryOverlay isolado manteve GameScene legível.

### O que melhorar

- Menu inacessível durante movimento — aceitável no MVP; considerar pausa futura.

### Decisões a manter

- 300 ms por tile é ritmo confortável para casual players.
- Reinício reseta fase completa (grid limpo), não apenas posição do coelho.

---

## Sprint 3 — 2026-06-18

### O que funcionou

- Web Audio API procedural evitou dependência de arquivos de som no MVP.
- Phaser registry para sessionScore é simples e persiste entre restarts da cena.
- Fórmula de score do GDD (base + tiles + tempo) incentiva eficiência.

### O que melhorar

- Sons procedurais são funcionais mas básicos — substituir por assets na Sprint 4+ se desejado.

### Decisões a manter

- Score acumula na sessão (reset ao recarregar página) — adequado para casual web.

---

## Sprint 4 — 2026-06-18

### O que funcionou

- `generateTexture` no BootScene eliminou dependência de arquivos PNG externos.
- Estilo cartoon consistente entre tiles, personagens e UI.
- GameButton centralizou estilo de botões em 4 telas.

### O que melhorar

- Texturas procedurais são cartoon flat mas não IA — substituíveis por PNGs reais sem mudar arquitetura.

### Decisões a manter

- AssetGenerator gera texturas uma vez no boot — performance adequada para web.

---

## Sprint 5 — 2026-06-18

### O que funcionou

- GitHub Actions + Pages é zero-config após habilitar source "Actions".
- `base: './'` no Vite funciona em subpath do GitHub Pages.
- Preview local (`npm run preview`) valida paridade com produção.

### Decisões a manter

- KI-001 adiado pós-MVP — deploy não bloqueado por bundle size.
- Tag v1.0.0 marca milestone MVP oficial.
