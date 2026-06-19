import {
  GRID_COLS,
  GRID_ROWS,
  TILE_EMPTY,
  TILE_PATH,
  TILE_RABBIT,
  TILE_CARROT,
} from '../config.js';

export default class GridSystem {
  constructor(level) {
    this.rabbitStart = level.rabbit;
    this.carrotStart = level.carrot;
    this.maxPathTiles = level.maxPathTiles;
    this.grid = this.createEmptyGrid();
    this.pathTilesUsed = 0;
  }

  createEmptyGrid() {
    const grid = Array.from({ length: GRID_ROWS }, () =>
      Array(GRID_COLS).fill(TILE_EMPTY)
    );

    grid[this.rabbitStart.row][this.rabbitStart.col] = TILE_RABBIT;
    grid[this.carrotStart.row][this.carrotStart.col] = TILE_CARROT;

    return grid;
  }

  getCell(col, row) {
    return this.grid[row][col];
  }

  isInteractive(col, row) {
    const type = this.getCell(col, row);
    return type === TILE_EMPTY || type === TILE_PATH;
  }

  canPlacePath(col, row) {
    if (this.getCell(col, row) !== TILE_EMPTY) return false;
    return this.pathTilesUsed < this.maxPathTiles;
  }

  placePath(col, row) {
    if (!this.canPlacePath(col, row)) return false;

    this.grid[row][col] = TILE_PATH;
    this.pathTilesUsed++;
    return true;
  }

  removePath(col, row) {
    if (this.getCell(col, row) !== TILE_PATH) return false;

    this.grid[row][col] = TILE_EMPTY;
    this.pathTilesUsed--;
    return true;
  }

  togglePath(col, row) {
    const type = this.getCell(col, row);

    if (type === TILE_EMPTY) return this.placePath(col, row);
    if (type === TILE_PATH) return this.removePath(col, row);

    return false;
  }

  getRemainingTiles() {
    return this.maxPathTiles - this.pathTilesUsed;
  }

  getPathTilesUsed() {
    return this.pathTilesUsed;
  }

  getMaxPathTiles() {
    return this.maxPathTiles;
  }

  getGridCopy() {
    return this.grid.map((row) => [...row]);
  }
}
