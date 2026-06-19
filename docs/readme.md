# O Caminho do Coelho

Puzzle casual web onde você constrói o caminho para o coelho chegar até a cenoura.

## Jogar

**Online:**

https://gibritom.github.io/gamerabiit/

**Local:**

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Objetivo

Guiar um coelho faminto até a cenoura construindo caminhos tile a tile em um grid 8×8.

## Tecnologias

- **Engine:** Phaser 3
- **Linguagem:** JavaScript
- **Bundler:** Vite
- **Deploy:** GitHub Pages + GitHub Actions
- **Plataforma futura:** Telegram Mini App

## Como Executar

```bash
npm install          # Instalar dependências
npm run dev          # Desenvolvimento (porta 3000)
npm run build        # Build de produção
npm run preview      # Preview do build (porta 4173)
```

## Publicar

Consulte [docs/deploy.md](deploy.md) para instruções completas de deploy no GitHub Pages.

Resumo:

1. Push para GitHub (`main`)
2. Settings → Pages → Source: **GitHub Actions**
3. Workflow publica automaticamente em cada push

## Estrutura do Projeto

```
src/
├── main.js              # Bootstrap Phaser
├── config.js            # Constantes
├── assets/AssetGenerator.js
├── scenes/              # Boot, Menu, Game
├── systems/             # Grid, Path, Movement, Score, Audio
├── entities/Rabbit.js
└── ui/                  # GameButton, VictoryOverlay
.github/workflows/       # CI/CD deploy
docs/                    # Documentação do projeto
```

## Versão Atual

**1.0.0** — MVP completo (publicação web via GitHub Pages)

## Documentação

- [GDD](gdd.md) — Game Design Document
- [Roadmap](roadmap.md) — Planejamento
- [Deploy](deploy.md) — Publicação
- [Release Notes](RELEASE_NOTES.md) — Notas da versão
- [Arquitetura](architecture.md) — Estrutura técnica
- [Sprints](sprints.md) — Histórico de sprints

## Organização dos Agentes

Framework **Rabbit Studio AI** — consulte `agents/` e `base/constitution.md`.

## Como Contribuir

1. Consulte `base/constitution.md` e `base/workflow.md`.
2. Funcionalidades pós-MVP exigem aprovação do Game Director.
3. Toda sprint entrega versão jogável.
