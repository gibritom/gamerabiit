# Arquitetura — O Caminho do Coelho

**Agente responsável:** Software Architect  
**Versão:** 1.6 (Sprint 7)

---

## 1. Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Engine | Phaser 3.80+ |
| Linguagem | JavaScript (ES modules) |
| Bundler / Dev server | Vite 5+ |
| Plataforma | Web (HTML5 Canvas) |

Decisão registrada: **DEC-004**.

---

## 2. Estrutura de Pastas

```
GameRabbit/
├── index.html              # Entry point HTML
├── package.json
├── vite.config.js
├── public/                 # Assets estáticos (futuro)
├── src/
│   ├── main.js             # Bootstrap Phaser
│   ├── assets/
│   │   └── AssetGenerator.js  # Geração de texturas cartoon
│   ├── data/
│   │   └── levels.js       # Definições das 5 fases + colecionáveis (Sprint 6–7)
│   ├── scenes/
│   │   ├── BootScene.js    # Inicialização
│   │   ├── MenuScene.js    # Tela inicial
│   │   └── GameScene.js    # Cena principal do jogo
│   ├── entities/           # Sprites/objetos do jogo (Sprint 1+)
│   ├── systems/            # Lógica de domínio (Sprint 1+)
│   ├── ui/                 # Componentes de interface (Sprint 1+)
│   └── utils/              # Helpers reutilizáveis
├── docs/                   # Documentação do projeto
├── agents/                 # Definições de agentes
└── base/                   # Regras e contexto compartilhado
```

---

## 3. Fluxo de Cenas

```
BootScene
    ↓ (auto)
MenuScene
    ↓ scene.start('GameScene') — botão Jogar
GameScene
    ↓ scene.start('MenuScene') — botão Menu (Sprint 1+)
MenuScene
```

**Sprint 0:** Boot → Menu → Game (sem retorno ao menu).

---

## 4. Módulos e Responsabilidades

| Módulo | Responsabilidade | Sprint |
|--------|-----------------|--------|
| `config.js` | Grid size, cores, dimensões de tile | 0 |
| `data/levels.js` | Posições, limites e colecionáveis por fase | 6–7 ✓ |
| `BootScene` | Config Phaser, transição para Menu | 0 |
| `MenuScene` | Título, botão Jogar | 0 |
| `GameScene` | Orquestra grid interativo, HUD e validação | 1 |
| `systems/GridSystem` | Estado e lógica do grid (por fase) | 1 ✓ |
| `systems/PathValidator` | Validação de conectividade (BFS) | 1 ✓ |
| `systems/RabbitMovement` | Animação tile a tile (tweens) | 2 ✓ |
| `entities/Rabbit` | Container visual do coelho | 2 ✓ |
| `systems/ScoreSystem` | Cálculo de pontuação por fase (+ colecionáveis) | 3 ✓ |
| `systems/CollectibleSystem` | Estrelas colecionáveis por fase | 7 ✓ |
| `systems/AudioManager` | Sons procedurais (Web Audio API) | 3 ✓ |
| `assets/AssetGenerator` | Texturas cartoon em runtime (generateTexture) | 4 ✓ |
| `ui/GameButton` | Botão estilizado reutilizável | 4 ✓ |
| `ui/VictoryOverlay` | Modal de vitória, score, colecionáveis, próxima fase | 2–7 ✓ |

---

## 5. Configuração Phaser (Sprint 0)

```javascript
{
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#7EC850',
  scene: [BootScene, MenuScene, GameScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
```

---

## 6. Grid — Modelo de Dados (referência Sprint 1+)

```javascript
// config.js
GRID_COLS = 8
GRID_ROWS = 8
TILE_SIZE = 64

// levels.js — por fase (Sprint 6)
{ id, rabbit: { col, row }, carrot: { col, row }, maxPathTiles }

// Célula: { type: 'empty' | 'path' | 'rabbit' | 'carrot' }
```

Sprint 1 implementa modelo de estado interativo via `GridSystem`. Sprint 6 carrega configuração de `levels.js`.

**Registry Phaser (sessão):**
- `currentLevelIndex` — índice 0–4 da fase ativa
- `sessionScore` — pontuação acumulada na sessão

---

## 7. Placeholders Visuais (Sprint 0)

Gerados via `Phaser.GameObjects.Graphics` e `Phaser.GameObjects.Rectangle/Circle/Arc` — sem dependência de arquivos de imagem.

| Elemento | Implementação |
|----------|--------------|
| Tile grama | Retângulo verde com borda |
| Coelho | Círculo branco + orelhas |
| Cenoura | Triângulo/arco laranja |
| Botões | Retângulo arredondado laranja + texto |

---

## 8. Comandos de Desenvolvimento

```bash
npm install      # Instalar dependências
npm run dev      # Servidor local (Vite)
npm run build    # Build de produção
npm run preview  # Preview do build
```

---

## 9. Princípios Arquiteturais

1. **Scenes** orquestram; **Systems** contêm lógica; **Entities** representam objetos.
2. Constantes centralizadas em `config.js`.
3. Nenhum arquivo acima de ~200 linhas no MVP.
4. Assets carregados via `AssetGenerator` na BootScene (Sprint 4); PNG externos opcionais no futuro.
5. Estado do jogo vive no `GameScene` ou em systems injetados — sem globals.

---

## 10. Evolução Prevista

| Sprint | Mudança arquitetural |
|--------|---------------------|
| 1 | `GridSystem`, input handler, HUD básico |
| 2 | `RabbitMovement`, cena/modal de vitória |
| 3 | Audio manager, score system |
| 4 | Asset loader com sprites PNG |
| 5 | Build CI, deploy estático GitHub Pages ✓ |
| 6 | `levels.js`, progressão de fases, registry de sessão ✓ |
| 7 | `CollectibleSystem`, estrelas, bônus de score ✓ |
