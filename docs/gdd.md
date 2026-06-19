# GDD — O Caminho do Coelho

**Agente responsável:** Game Designer  
**Versão:** 1.4 (Sprint 4)  
**Aprovado por:** Game Director

---

## 1. Visão Geral

**O Caminho do Coelho** é um puzzle casual onde o jogador constrói um caminho tile a tile para que um coelho alcance uma cenoura. Simples de aprender, satisfatório de resolver.

**Público:** Casual players (web, futuro Telegram Mini App).

**Prioridade de design:** Diversão > Simplicidade > Visual.

---

## 2. Premissa

Um coelho faminto precisa chegar à cenoura, mas o caminho não existe. O jogador deve construir o caminho usando um número limitado de tiles antes de soltar o coelho.

---

## 3. Objetivo do Jogador

Construir um caminho contínuo do coelho até a cenoura usando os tiles disponíveis e, em seguida, iniciar o movimento do coelho para completar a fase.

---

## 4. Mecânicas Core

### 4.1 Grid

- Grid quadrado **8 colunas × 8 linhas** (64 células).
- Cada célula pode ser: **vazia (grama)**, **caminho** ou **ocupada** (coelho/cenoura).
- Coelho e cenoura ficam em posições fixas por fase (Sprint 0: posições de demonstração).

### 4.2 Construção de Caminho (Sprint 1+)

- Jogador clica/toque em célula vazia → coloca tile de caminho.
- Segundo clique em tile de caminho → remove o tile.
- Limite de tiles por fase (Sprint 1: **20 tiles**).
- Não é possível colocar tile sobre coelho ou cenoura.

### 4.3 Validação (Sprint 1+)

- Antes de iniciar movimento, o caminho deve conectar coelho à cenoura (conectividade ortogonal: cima, baixo, esquerda, direita).
- Caminho inválido → botão "Ir!" desabilitado + feedback visual.

### 4.4 Movimento do Coelho (Sprint 2+)

- Jogador pressiona **"Ir!"** → coelho move-se tile a tile seguindo o caminho.
- Velocidade: ~300 ms por tile (ajustável no balanceamento).
- Coelho para ao chegar na cenoura → vitória.

### 4.5 Vitória e Reinício (Sprint 2+)

- Ao chegar na cenoura: modal/tela de vitória com opção **"Jogar Novamente"**.
- Reinício limpa tiles e restaura estado inicial.

### 4.6 Pontuação (Sprint 3+)

- Pontos base: 1000 por fase completada.
- Bônus: tiles não usados (+50 cada) e tempo rápido.
- Penalidade: nenhuma no MVP (manter positivo).

---

## 5. Personagens e Objetos

| Elemento | Descrição | Comportamento |
|----------|-----------|---------------|
| **Coelho** | Protagonista, faminto e fofo | Posição fixa inicial; move-se pelo caminho |
| **Cenoura** | Objetivo da fase | Posição fixa; vitória ao alcançar |
| **Tile de caminho** | Bloco construível | Colocado/removido pelo jogador |
| **Tile vazio (grama)** | Célula padrão do grid | Receptora de caminho |

---

## 6. Fluxo do Jogador

```
[Tela Inicial]
    ↓ Jogar
[Cena de Jogo — Modo Construção]
    ↓ Coloca tiles (Sprint 1+)
    ↓ Caminho válido → Ir! (Sprint 2+)
[Coelho em movimento]
    ↓ Chega na cenoura
[Tela de Vitória]
    ↓ Jogar Novamente
[Cena de Jogo — reset]
```

**Sprint 0:** apenas Tela Inicial → Cena de Jogo (grid estático, sem interação).

**Sprint 1:** construção interativa de caminho; validação; botão Ir! habilitado quando caminho conecta coelho à cenoura.

**Sprint 2:** movimento tile a tile, overlay de vitória, reinício via "Jogar Novamente".

**Sprint 3:** pontuação (1000 + bônus), sons procedurais, flash visual ao colocar tile.

**Sprint 4:** sprites cartoon, background cenário, animações idle/hop, UI polida.

---

## 7. HUD

| Elemento | Posição | Sprint |
|----------|---------|--------|
| Título da fase | Topo central | 0 (placeholder) |
| Tiles restantes | Canto superior direito | 1 |
| Pontuação | Canto superior esquerdo | 3 |
| Botão "Ir!" | Rodapé central | 2 |
| Botão "Menu" | Canto superior esquerdo | 1 |

---

## 8. Interface — Wireframes (UI/UX)

### 8.1 Tela Inicial

```
┌─────────────────────────────┐
│                             │
│     O CAMINHO DO COELHO     │
│          🐰 → 🥕           │
│                             │
│        [  JOGAR  ]          │
│                             │
└─────────────────────────────┘
```

- Fundo: verde claro (#7EC850).
- Título: fonte bold, cor marrom escuro (#5D4037).
- Botão centralizado, arredondado, cor laranja (#FF9800).

### 8.2 Cena de Jogo (Sprint 0 — estático)

```
┌─────────────────────────────┐
│  Fase 1          Tiles: --  │
├─────────────────────────────┤
│                             │
│    ┌──┬──┬──┬──┬──┬──┬──┬──┐│
│    │🐰│  │  │  │  │  │  │🥕││
│    ├──┼──┼──┼──┼──┼──┼──┼──┤│
│    │  │  │  │  │  │  │  │  ││
│    │  ... grid 8×8 ...    ││
│    └──┴──┴──┴──┴──┴──┴──┴──┘│
│                             │
│         [  Ir!  ]           │
└─────────────────────────────┘
```

### 8.3 Tela de Vitória (Sprint 2+)

```
┌─────────────────────────────┐
│                             │
│         VITÓRIA! 🎉         │
│      Pontos: 1250           │
│                             │
│    [ JOGAR NOVAMENTE ]      │
│                             │
└─────────────────────────────┘
```

---

## 9. Guia Visual

| Elemento | Cor / Estilo | Sprint 0 |
|----------|-------------|----------|
| Fundo geral | Verde claro #7EC850 | Sim |
| Grid (grama) | Verde escuro #4CAF50 | Sim |
| Tile caminho | Marrom cartoon texturizado | Sim (Sprint 4) |
| Coelho | Sprite cartoon, animado | Sim (Sprint 4) |
| Cenoura | Sprite cartoon laranja | Sim (Sprint 4) |
| Botões | Laranja #FF9800, texto branco | Sim |
| Fonte | Sans-serif (Arial/system) | Sim |

---

## 10. Assets — Especificação (AI Assets)

Sprint 0 usa placeholders geométricos em código. Specs abaixo para sprints futuras.

| Asset | Resolução | Estilo | Prompt base |
|-------|-----------|--------|-------------|
| Coelho (idle) | 64×64 px | Cartoon flat, cute | "Cute cartoon rabbit, flat style, white fur, pink ears, top-down view, game sprite, transparent background" |
| Cenoura | 64×64 px | Cartoon flat | "Cartoon carrot, flat style, orange, top-down view, game sprite, transparent background" |
| Tile caminho | 64×64 px | Cartoon flat | "Dirt path tile, top-down view, brown, cartoon flat, game tile, seamless edges" |
| Tile grama | 64×64 px | Cartoon flat | "Grass tile, top-down view, green, cartoon flat, game tile" |
| Botão UI | 200×60 px | Cartoon flat | "Rounded orange game button, cartoon flat, white text area" |
| Background | 800×600 px | Cartoon flat | "Sunny meadow background, cartoon flat, green hills, casual game" |

---

## 11. Critérios de Diversão

- Resolver o puzzle em menos de 2 minutos na primeira fase.
- Feedback imediato ao colocar/remover tiles.
- Sensação de "construí meu caminho" antes de soltar o coelho.
- Vitória celebrada com clareza (visual + som).

---

## 12. Escopo MVP vs Sprint 0

| Funcionalidade | MVP | Sprint 0 |
|----------------|-----|----------|
| Tela inicial | ✓ | ✓ |
| Grid visível | ✓ | ✓ (estático) |
| Construção caminho | ✓ | ✓ (Sprint 1) |
| Movimento coelho | ✓ | ✓ (Sprint 2) |
| Vitória/reinício | ✓ | ✓ (Sprint 2) |
| Pontuação | ✓ | ✓ (Sprint 3) |
| Sons | ✓ | ✓ (Sprint 3) |
| Publicação web | ✓ | — |
