# Roadmap — O Caminho do Coelho

**Agente responsável:** Product Owner

Planejamento oficial de evolução até o MVP publicável.

---

## Visão

Entregar um puzzle casual web onde o jogador constrói caminhos para guiar um coelho até a cenoura. MVP focado em diversão simples, publicado na web.

---

## Sprint 0 — Fundação do Projeto

| Campo | Valor |
|-------|-------|
| **Objetivo** | Base documental + bootstrap Phaser jogável (menu + grid estático) |
| **Funcionalidades** | GDD v1, arquitetura, backlog, tela inicial, cena de jogo com grid 8×8, placeholders |
| **Critérios de Aceite** | Jogo abre no browser; navegação menu→jogo; grid visível; docs completos |
| **Status** | Concluída |
| **Observações** | Bootstrap v0.1.0 entregue — menu + grid estático |

---

## Sprint 1 — Grid Interativo

| Campo | Valor |
|-------|-------|
| **Objetivo** | Jogador coloca e remove tiles de caminho no grid |
| **Funcionalidades** | Toggle tile, contador HUD, validação conectividade, botão Menu, Ir! habilitado quando válido |
| **Critérios de Aceite** | Colocar/remover tiles; limite 20; caminho inválido bloqueia Ir!; caminho válido habilita Ir! |
| **Status** | Concluída |
| **Observações** | v0.2.0 — movimento do coelho na Sprint 2 |

---

## Sprint 2 — Movimento e Vitória

| Campo | Valor |
|-------|-------|
| **Objetivo** | Coelho percorre o caminho e jogador vence |
| **Funcionalidades** | Botão "Ir!", animação tile a tile, tela de vitória, reinício |
| **Critérios de Aceite** | Coelho segue caminho; vitória ao chegar na cenoura; reinício funcional |
| **Status** | Concluída |
| **Observações** | v0.3.0 — loop core completo (construir → mover → vencer → reiniciar) |

---

## Sprint 3 — Pontuação e Sons

| Campo | Valor |
|-------|-------|
| **Objetivo** | Feedback auditivo e sistema de pontuação |
| **Funcionalidades** | Score, sons de ação/vitória/erro, feedback visual leve |
| **Critérios de Aceite** | Pontuação exibida e persistida na sessão; sons tocando corretamente |
| **Status** | Concluída |
| **Observações** | v0.4.0 — sons procedurais (Web Audio API); score acumulado na sessão |

---

## Sprint 4 — Visual Polish

| Campo | Valor |
|-------|-------|
| **Objetivo** | Substituir placeholders por assets finais e polir UI |
| **Funcionalidades** | Sprites IA, paleta final, animações básicas do coelho |
| **Critérios de Aceite** | Visual coerente com guia; sem placeholders geométricos |
| **Status** | Concluída |
| **Observações** | v0.5.0 — sprites cartoon via AssetGenerator; sem placeholders geométricos |

---

## Sprint 5 — Publicação Web (MVP)

| Campo | Valor |
|-------|-------|
| **Objetivo** | MVP publicado e acessível via URL pública |
| **Funcionalidades** | Build de produção, deploy, release notes |
| **Critérios de Aceite** | Link público funcional; jogo jogável end-to-end; versão 1.0.0 taggeada |
| **Status** | Concluída |
| **Observações** | v1.0.0 — CI GitHub Actions; URL live após push remoto |

---

## Prioridades Globais

1. Gameplay funcional (Sprints 1–2)
2. Feedback e pontuação (Sprint 3)
3. Visual (Sprint 4)
4. Publicação (Sprint 5)
