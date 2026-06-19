import {
  GRID_COLS,
  GRID_ROWS,
  MAX_PATH_TILES,
  TILE_EMPTY,
  TILE_PATH,
  TILE_RABBIT,
  TILE_CARROT,
  RABBIT_START,
  CARROT_START,
} from '../config.js';

export default class GridSystem {
  constructor() {
    this.grid = this.createEmptyGrid();
    this.pathTilesUsed = 0;
  }

  createEmptyGrid() {
    const grid = Array.from({ length: GRID_ROWS }, () =>
      Array(GRID_COLS).fill(TILE_EMPTY)
    );

    grid[RABBIT_START.row][RABBIT_START.col] = TILE_RABBIT;
    grid[CARROT_START.row][CARROT_START.col] = TILE_CARROT;

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
    return this.pathTilesUsed < MAX_PATH_TILES;
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
    return MAX_PATH_TILES - this.pathTilesUsed;
  }

  getPathTilesUsed() {
    return this.pathTilesUsed;
  }

  getGridCopy() {
    return this.grid.map((row) => [...row]);
  }
}
