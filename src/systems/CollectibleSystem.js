/**
 * Tracks optional collectibles per level — collected when the rabbit steps on them.
 */
export default class CollectibleSystem {
  constructor(level) {
    this.items = (level.collectibles ?? []).map(({ col, row }) => ({
      col,
      row,
      collected: false,
    }));
  }

  getTotal() {
    return this.items.length;
  }

  getCollectedCount() {
    return this.items.filter((item) => item.collected).length;
  }

  hasUncollectedAt(col, row) {
    return this.items.some(
      (item) => !item.collected && item.col === col && item.row === row
    );
  }

  collectAt(col, row) {
    const item = this.items.find(
      (entry) => !entry.collected && entry.col === col && entry.row === row
    );
    if (!item) return false;

    item.collected = true;
    return true;
  }
}
