/**
 * Level definitions — Sprint 6 (US-100)
 * Each level: rabbit/carrot positions + max path tiles (difficulty increases).
 */
export const LEVELS = [
  {
    id: 1,
    rabbit: { col: 0, row: 0 },
    carrot: { col: 7, row: 0 },
    maxPathTiles: 20,
  },
  {
    id: 2,
    rabbit: { col: 0, row: 2 },
    carrot: { col: 7, row: 5 },
    maxPathTiles: 18,
  },
  {
    id: 3,
    rabbit: { col: 2, row: 0 },
    carrot: { col: 5, row: 7 },
    maxPathTiles: 16,
  },
  {
    id: 4,
    rabbit: { col: 0, row: 7 },
    carrot: { col: 7, row: 0 },
    maxPathTiles: 14,
  },
  {
    id: 5,
    rabbit: { col: 1, row: 1 },
    carrot: { col: 6, row: 6 },
    maxPathTiles: 12,
  },
];

export const TOTAL_LEVELS = LEVELS.length;

export function getLevel(index) {
  return LEVELS[index] ?? LEVELS[0];
}
