# Known Issues — O Caminho do Coelho

**Agente responsável:** QA Tester

---

## KI-001

| Campo | Valor |
|-------|-------|
| **Descrição** | Bundle JavaScript grande (~1.5 MB) devido ao Phaser incluído integralmente |
| **Impacto** | Baixo — tempo de carregamento inicial ligeiramente maior |
| **Prioridade** | P2 |
| **Status** | Aberto |
| **Sprint** | 0 |
| **Responsável** | Software Architect (Sprint 5) |

---

## KI-004

| Campo | Valor |
|-------|-------|
| **Descrição** | MenuScene crashava ao criar botão JOGAR — `createGameButton` chamado sem argumento `scene` |
| **Impacto** | Alto — tela exibia apenas fundo verde, jogo inacessível |
| **Prioridade** | P0 |
| **Status** | Resolvido |
| **Sprint** | 4 |
| **Responsável** | Gameplay Developer |

---

## KI-005

| Campo | Valor |
|-------|-------|
| **Descrição** | GameScene crashava ao iniciar — `GAME_HEIGHT` usado sem import |
| **Impacto** | Alto — botão JOGAR quebrava ao entrar no jogo |
| **Prioridade** | P0 |
| **Status** | Resolvido |
| **Sprint** | 4 |
| **Responsável** | Gameplay Developer |

---

## Resolvido

### KI-003 (Sprint 1)

Botão "Ir!" sem movimento — **Resolvido na Sprint 2** (coelho percorre caminho ao clicar Ir!).

### KI-002 (Sprint 0)

Botão "Ir!" placeholder — **Resolvido na Sprint 1**.
