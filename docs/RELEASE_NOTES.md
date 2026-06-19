# Release Notes — O Caminho do Coelho

## 1.2.0 — Colecionáveis (2026-06-19)

**Sprint 7 — US-101**

Estrelas colecionáveis opcionais em cada fase — bônus de pontuação ao incluir no caminho.

### Novidades

- Estrelas ★ visíveis no grid (1–2 por fase)
- Coleta automática quando o coelho passa pela célula
- **+150 pts** por estrela
- HUD **★ X/Y** e contagem no overlay de vitória
- Som de coleta

### Jogar

```
https://gibritom.github.io/gamerabiit/
```

---

## 1.1.0 — Múltiplas Fases (2026-06-19)

**Sprint 6 — US-100**

Primeira evolução pós-MVP: 5 fases jogáveis com progressão linear de dificuldade.

### Novidades

- **5 fases** com posições distintas de coelho/cenoura
- Limite de tiles decrescente por fase (20 → 12)
- HUD dinâmico **Fase N**
- Botão **Próxima Fase** após vitória (Fases 1–4)
- Tela **Todas as Fases Completas** na Fase 5
- Pontuação acumulada na sessão

### Jogar

```
https://gibritom.github.io/gamerabiit/
```

*(Deploy remoto após push para main)*

---

## 1.0.0 — MVP (2026-06-18)

**Sprint 5 — Publicação Web**

Primeira release pública do MVP. Puzzle casual completo e jogável no navegador.

### Jogar

Após deploy no GitHub Pages:

```
https://gibritom.github.io/gamerabiit/
```

Repositório: https://github.com/gibritom/gamerabiit

### O que está incluído

- Tela inicial com cenário cartoon
- Grid 8×8 interativo — construa caminhos com até 20 tiles
- Coelho percorre o caminho tile a tile
- Vitória, reinício e pontuação com bônus
- Sons procedurais (colocar, remover, erro, vitória)
- Sprites cartoon gerados em runtime
- Deploy automático via GitHub Actions

### Requisitos

- Navegador moderno (Chrome, Edge, Firefox, Safari)
- Conexão com internet (primeiro carregamento ~1.5 MB)

### Known Issues

- KI-001: Bundle Phaser grande — carregamento inicial pode levar alguns segundos em conexões lentas

### Histórico de versões

| Versão | Sprint | Destaque |
|--------|--------|----------|
| 1.0.0 | 5 | MVP publicado |
| 0.5.1 | 4 | Hotfix MenuScene/GameScene |
| 0.5.0 | 4 | Visual polish |
| 0.4.0 | 3 | Pontuação e sons |
| 0.3.0 | 2 | Movimento e vitória |
| 0.2.0 | 1 | Grid interativo |
| 0.1.0 | 0 | Bootstrap |
