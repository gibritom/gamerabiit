/**
 * Level definitions — Sprint 6+ (US-100, US-101)
 * Each level: rabbit/carrot positions, max path tiles, optional collectibles.
 */
export const LEVELS = [
  {
    id: 1,
    rabbit: { col: 0, row: 0 },
    carrot: { col: 7, row: 0 },
    maxPathTiles: 20,
    collectibles: [{ col: 4, row: 0 }],
  },
  {
    id: 2,
    rabbit: { col: 0, row: 2 },
    carrot: { col: 7, row: 5 },
    maxPathTiles: 18,
    collectibles: [{ col: 3, row: 4 }],
  },
  {
    id: 3,
    rabbit: { col: 2, row: 0 },
    carrot: { col: 5, row: 7 },
    maxPathTiles: 16,
    collectibles: [{ col: 4, row: 3 }, { col: 3, row: 5 }],
  },
  {
    id: 4,
    rabbit: { col: 0, row: 7 },
    carrot: { col: 7, row: 0 },
    maxPathTiles: 14,
    collectibles: [{ col: 3, row: 4 }, { col: 4, row: 3 }],
  },
  {
    id: 5,
    rabbit: { col: 1, row: 1 },
    carrot: { col: 6, row: 6 },
    maxPathTiles: 12,
    collectibles: [{ col: 3, row: 3 }, { col: 4, row: 4 }],
  },
];

export const TOTAL_LEVELS = LEVELS.length;

export function getLevel(index) {
  return LEVELS[index] ?? LEVELS[0];
}
