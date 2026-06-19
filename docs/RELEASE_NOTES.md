# Release Notes — O Caminho do Coelho

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
