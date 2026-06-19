import {
  MAX_PATH_TILES,
  SCORE_BASE,
  SCORE_TILE_BONUS,
  SCORE_TIME_BONUS_MAX,
  SCORE_TIME_THRESHOLD_MS,
} from '../config.js';

export default class ScoreSystem {
  calculate(pathTilesUsed, elapsedMs) {
    const unusedTiles = MAX_PATH_TILES - pathTilesUsed;
    const tileBonus = unusedTiles * SCORE_TILE_BONUS;
    const timeRatio = Math.max(0, 1 - elapsedMs / SCORE_TIME_THRESHOLD_MS);
    const timeBonus = Math.floor(SCORE_TIME_BONUS_MAX * timeRatio);

    return SCORE_BASE + tileBonus + timeBonus;
  }
}
