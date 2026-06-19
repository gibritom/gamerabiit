import { TILE_EMPTY } from '../config.js';

const DIRECTIONS = [
  { col: 0, row: -1 },
  { col: 0, row: 1 },
  { col: -1, row: 0 },
  { col: 1, row: 0 },
];

export default class PathValidator {
  hasValidPath(grid, start, end) {
    return this.findPath(grid, start, end) !== null;
  }

  findPath(grid, start, end) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const parent = Array.from({ length: rows }, () => Array(cols).fill(null));
    const queue = [{ col: start.col, row: start.row }];
    visited[start.row][start.col] = true;

    while (queue.length > 0) {
      const current = queue.shift();

      if (current.col === end.col && current.row === end.row) {
        return this.reconstructPath(parent, end);
      }

      for (const dir of DIRECTIONS) {
        const nc = current.col + dir.col;
        const nr = current.row + dir.row;

        if (nc < 0 || nr < 0 || nc >= cols || nr >= rows) continue;
        if (visited[nr][nc]) continue;
        if (grid[nr][nc] === TILE_EMPTY) continue;

        visited[nr][nc] = true;
        parent[nr][nc] = current;
        queue.push({ col: nc, row: nr });
      }
    }

    return null;
  }

  reconstructPath(parent, end) {
    const path = [];
    let current = { col: end.col, row: end.row };

    while (current) {
      path.unshift(current);
      current = parent[current.row][current.col];
    }

    return path;
  }
}
