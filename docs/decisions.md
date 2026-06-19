# Decisões — O Caminho do Coelho

**Agente responsável:** Scrum Master

Toda decisão aprovada permanece registrada. Nunca remover decisões antigas.

---

## DEC-001

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Aprovação do plano da Sprint 0 |
| **Descrição** | Game Director aprovou o plano de execução da Sprint 0 — Fundação do Projeto, incluindo agentes, ordem de execução, entregáveis e critérios de aceite. |
| **Motivo** | Iniciar oficialmente o desenvolvimento de "O Caminho do Coelho". |
| **Aprovado por** | Game Director |
| **Impacto** | Libera execução de todos os agentes especialistas na ordem definida. |

---

## DEC-002

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Bootstrap jogável como definição de "versão jogável" na Sprint 0 |
| **Descrição** | A Sprint 0 entrega menu + cena de jogo com grid estático e placeholders visuais. Mecânicas de gameplay ficam para Sprint 1+. |
| **Motivo** | Cumprir a regra da constituição ("toda sprint gera versão jogável") sem antecipar escopo. |
| **Aprovado por** | Game Director |
| **Impacto** | Limita escopo de implementação do Gameplay Developer na Sprint 0. |

---

## DEC-003

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Grid inicial 8×8 e placeholders geométricos |
| **Descrição** | Grid padrão de 8 colunas × 8 linhas. Assets visuais na Sprint 0 são placeholders geométricos gerados em código (retângulos/círculos coloridos). |
| **Motivo** | Simplicidade e velocidade de bootstrap; assets finais virão em sprints posteriores. |
| **Aprovado por** | Game Director (via aprovação do plano) |
| **Impacto** | GDD, arquitetura e implementação usam 8×8 como referência. |

---

## DEC-004

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Stack técnica: Phaser 3 + Vite + JavaScript |
| **Descrição** | Projeto web com Phaser 3 como engine, Vite como bundler/dev server e JavaScript puro (sem TypeScript no MVP). |
| **Motivo** | Alinhado a project-context.md e coding-standards.md; Vite oferece DX rápida para desenvolvimento web. |
| **Aprovado por** | Software Architect |
| **Impacto** | Estrutura de pastas, package.json e fluxo de build seguem esta stack. |

---

## DEC-005

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Aprovação do escopo da Sprint 1 |
| **Descrição** | Game Director aprovou Sprint 1 — Grid Interativo: colocação/remoção de tiles, contador HUD, validação de conectividade, botão Menu, botão Ir! habilitado quando caminho válido (sem movimento do coelho). |
| **Motivo** | Primeira mecânica real de gameplay conforme roadmap. |
| **Aprovado por** | Game Director |
| **Impacto** | Movimento do coelho permanece exclusivo da Sprint 2. |

---

## DEC-006

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Aprovação do escopo da Sprint 2 |
| **Descrição** | Game Director aprovou Sprint 2 — Movimento e Vitória: coelho percorre caminho tile a tile (300 ms), overlay de vitória, reinício via "Jogar Novamente". |
| **Motivo** | Completar loop core do puzzle conforme MVP. |
| **Aprovado por** | Game Director |
| **Impacto** | Pontuação e sons permanecem exclusivos da Sprint 3. |

---

## DEC-007

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Aprovação do escopo da Sprint 3 |
| **Descrição** | Game Director aprovou Sprint 3 — Pontuação e Sons: score (1000 base + bônus tiles/tempo), sons procedurais via Web Audio API, flash visual ao colocar tile, pontuação acumulada na sessão. |
| **Motivo** | Feedback e recompensa conforme GDD e MVP. |
| **Aprovado por** | Game Director |
| **Impacto** | Assets visuais finais permanecem exclusivos da Sprint 4. |

---

## DEC-008

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Aprovação do escopo da Sprint 4 |
| **Descrição** | Game Director aprovou Sprint 4 — Visual Polish: sprites cartoon (AssetGenerator), UI polida, animações idle/hop do coelho, background cenário. |
| **Motivo** | Substituir placeholders antes da publicação MVP. |
| **Aprovado por** | Game Director |
| **Impacto** | Publicação web permanece exclusiva da Sprint 5. |

---

## DEC-009

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-18 |
| **Título** | Aprovação do plano da Sprint 5 + GitHub Pages |
| **Descrição** | Game Director aprovou Sprint 5 — Publicação Web (MVP). Plataforma: GitHub Pages com deploy automático via GitHub Actions. Release 1.0.0. KI-001 (bundle size) permanece como melhoria pós-MVP. |
| **Motivo** | Concluir último item do MVP em project-context.md. |
| **Aprovado por** | Game Director |
| **Impacto** | Marca entrega oficial do MVP; novas features exigem aprovação pós-MVP. |

---

## DEC-010

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-19 |
| **Título** | MVP publicado no GitHub Pages |
| **Descrição** | Jogo disponível publicamente em https://gibritom.github.io/gamerabiit/ via GitHub Actions. |
| **Motivo** | Conclusão da Sprint 5 e do MVP. |
| **Aprovado por** | Game Director |
| **Impacto** | Projeto "O Caminho do Coelho" MVP entregue. |

---

## DEC-011

| Campo | Valor |
|-------|-------|
| **Data** | 2026-06-19 |
| **Título** | Aprovação Sprint 6 — US-100 Múltiplas Fases |
| **Descrição** | Game Director aprovou primeira evolução pós-MVP: **5 fases jogáveis com progressão linear**. Versão alvo 1.1.0. US-101, US-102 e KI-001 permanecem no backlog futuro. |
| **Motivo** | Aumentar retenção e replayability após MVP publicado. |
| **Aprovado por** | Game Director |
| **Impacto** | Sprint 6 planejada; escopo técnico em `docs/sprints.md`. |
