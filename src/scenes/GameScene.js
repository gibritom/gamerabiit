import {
  GAME_WIDTH,
  GAME_HEIGHT,
  GRID_COLS,
  GRID_ROWS,
  TILE_SIZE,
  RABBIT_START,
  CARROT_START,
  GRID_OFFSET_Y,
  MAX_PATH_TILES,
  TILE_EMPTY,
  TILE_PATH,
  GAME_STATE,
} from '../config.js';
import { TEXTURES } from '../assets/AssetGenerator.js';
import GridSystem from '../systems/GridSystem.js';
import PathValidator from '../systems/PathValidator.js';
import RabbitMovement from '../systems/RabbitMovement.js';
import ScoreSystem from '../systems/ScoreSystem.js';
import AudioManager from '../systems/AudioManager.js';
import { createRabbit, stopIdleAnimation, hopRabbit } from '../entities/Rabbit.js';
import { createGameButton, setButtonEnabled } from '../ui/GameButton.js';
import VictoryOverlay from '../ui/VictoryOverlay.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.gridSystem = new GridSystem();
    this.pathValidator = new PathValidator();
    this.rabbitMovement = new RabbitMovement(this);
    this.scoreSystem = new ScoreSystem();
    this.audio = new AudioManager();
    this.cellViews = [];
    this.hitAreas = [];
    this.gameState = GAME_STATE.BUILDING;
    this.isPathValid = false;
    this.phaseStartTime = Date.now();

    this.gridOffsetX = (GAME_WIDTH - GRID_COLS * TILE_SIZE) / 2;
    this.gridOffsetY = GRID_OFFSET_Y;

    this.add
      .image(GAME_WIDTH / 2, GAME_HEIGHT / 2, TEXTURES.BACKGROUND)
      .setDisplaySize(GAME_WIDTH, GAME_HEIGHT)
      .setDepth(-1);

    this.createHud();
    this.createGrid();
    this.createRabbit();
    this.createGoButton();
    this.updateHud();
    this.updateGoButton();
  }

  createHud() {
    this.add
      .image(185, 26, TEXTURES.HUD_PANEL)
      .setDisplaySize(100, 32);

    this.scoreText = this.add.text(185, 26, '', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      fontStyle: 'bold',
      color: '#5D4037',
    }).setOrigin(0.5);

    this.add.text(GAME_WIDTH / 2, 16, 'Fase 1', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '20px',
      fontStyle: 'bold',
      color: '#5D4037',
      stroke: '#FFFFFF',
      strokeThickness: 2,
    }).setOrigin(0.5, 0);

    this.add
      .image(GAME_WIDTH - 70, 26, TEXTURES.HUD_PANEL)
      .setDisplaySize(120, 32);

    this.tilesText = this.add.text(GAME_WIDTH - 70, 26, '', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      color: '#5D4037',
    }).setOrigin(0.5);

    this.feedbackText = this.add.text(GAME_WIDTH / 2, 52, '', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    const menu = createGameButton(this, 50, 26, 'Menu', () => {
      if (this.gameState === GAME_STATE.BUILDING) {
        this.scene.start('MenuScene');
      }
    }, { width: 80, height: 32, fontSize: '14px' });
    this.menuButton = menu.button;
    this.menuButtonText = menu.text;
    this.menuButton.setDepth(1);
    this.menuButtonText.setDepth(2);

    this.updateScoreHud();
  }

  updateScoreHud() {
    const sessionScore = this.registry.get('sessionScore') || 0;
    this.scoreText.setText(`Pts: ${sessionScore}`);
  }

  createRabbit() {
    const { x, y } = this.getCellWorldPos(RABBIT_START.col, RABBIT_START.row);
    this.rabbit = createRabbit(this, x, y);
  }

  createGrid() {
    for (let row = 0; row < GRID_ROWS; row++) {
      this.cellViews[row] = [];
      this.hitAreas[row] = [];

      for (let col = 0; col < GRID_COLS; col++) {
        const { x, y } = this.getCellWorldPos(col, row);

        const grass = this.add
          .image(x, y, TEXTURES.GRASS)
          .setDisplaySize(TILE_SIZE - 2, TILE_SIZE - 2);

        const path = this.add
          .image(x, y, TEXTURES.PATH)
          .setDisplaySize(TILE_SIZE - 2, TILE_SIZE - 2)
          .setVisible(false);

        if (col === CARROT_START.col && row === CARROT_START.row) {
          this.add
            .image(x, y, TEXTURES.CARROT)
            .setDisplaySize(TILE_SIZE - 8, TILE_SIZE - 8)
            .setDepth(5);
        }

        if (this.gridSystem.isInteractive(col, row)) {
          const hitArea = this.add
            .rectangle(x, y, TILE_SIZE, TILE_SIZE, 0x000000, 0)
            .setInteractive({ useHandCursor: true });

          hitArea.on('pointerdown', () => this.handleCellClick(col, row));
          this.hitAreas[row][col] = hitArea;
        }

        this.cellViews[row][col] = { grass, path };
      }
    }
  }

  getCellWorldPos(col, row) {
    return {
      x: this.gridOffsetX + col * TILE_SIZE + TILE_SIZE / 2,
      y: this.gridOffsetY + row * TILE_SIZE + TILE_SIZE / 2,
    };
  }

  handleCellClick(col, row) {
    if (this.gameState !== GAME_STATE.BUILDING) return;

    const cellType = this.gridSystem.getCell(col, row);

    if (cellType === TILE_EMPTY && !this.gridSystem.canPlacePath(col, row)) {
      this.audio.playError();
      this.showFeedback('Sem tiles restantes!', '#C62828');
      return;
    }

    const wasPath = cellType === TILE_PATH;
    const changed = this.gridSystem.togglePath(col, row);
    if (!changed) return;

    const isPath = this.gridSystem.getCell(col, row) === TILE_PATH;
    const view = this.cellViews[row][col];
    view.path.setVisible(isPath);

    if (isPath) {
      this.audio.playPlace();
      this.flashTile(col, row);
    } else if (wasPath) {
      this.audio.playRemove();
    }

    this.clearFeedback();
    this.updateHud();
    this.updateGoButton();
  }

  flashTile(col, row) {
    const view = this.cellViews[row][col];
    view.path.setTint(0xffff99);
    this.time.delayedCall(120, () => {
      if (view.path.visible) view.path.clearTint();
    });
  }

  updateHud() {
    this.tilesText.setText(`Tiles: ${this.gridSystem.getRemainingTiles()}/${MAX_PATH_TILES}`);
  }

  updateGoButton() {
    this.isPathValid = this.pathValidator.hasValidPath(
      this.gridSystem.getGridCopy(),
      RABBIT_START,
      CARROT_START
    );

    const enabled = this.isPathValid && this.gameState === GAME_STATE.BUILDING;
    setButtonEnabled(this.goButton, this.goButtonText, enabled);
  }

  createGoButton() {
    const go = createGameButton(this, GAME_WIDTH / 2, 560, 'Ir!', () => {
      this.handleGoClick();
    }, { width: 160, height: 48, fontSize: '20px' });

    this.goButton = go.button;
    this.goButtonText = go.text;
    setButtonEnabled(this.goButton, this.goButtonText, false);
  }

  handleGoClick() {
    if (!this.isPathValid || this.gameState !== GAME_STATE.BUILDING) return;

    const path = this.pathValidator.findPath(
      this.gridSystem.getGridCopy(),
      RABBIT_START,
      CARROT_START
    );

    if (!path) return;

    this.startMovement(path);
  }

  startMovement(path) {
    this.gameState = GAME_STATE.MOVING;
    this.clearFeedback();
    stopIdleAnimation(this.rabbit);
    this.disableBuilding();
    this.updateGoButton();

    this.rabbitMovement.moveAlongPath(
      this.rabbit,
      path,
      (col, row) => this.getCellWorldPos(col, row),
      () => this.onMovementComplete(),
      () => hopRabbit(this, this.rabbit)
    );
  }

  disableBuilding() {
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        const hitArea = this.hitAreas[row]?.[col];
        if (hitArea) hitArea.disableInteractive();
      }
    }
    this.menuButton.disableInteractive();
    this.goButton.disableInteractive();
  }

  onMovementComplete() {
    this.gameState = GAME_STATE.VICTORY;

    const elapsedMs = Date.now() - this.phaseStartTime;
    const phaseScore = this.scoreSystem.calculate(
      this.gridSystem.getPathTilesUsed(),
      elapsedMs
    );
    const sessionScore = (this.registry.get('sessionScore') || 0) + phaseScore;
    this.registry.set('sessionScore', sessionScore);

    this.audio.playVictory();

    const overlay = new VictoryOverlay(this);
    overlay.show(phaseScore, sessionScore, () => this.scene.restart());
  }

  showFeedback(message, color) {
    this.feedbackText.setText(message).setColor(color);
  }

  clearFeedback() {
    this.feedbackText.setText('');
  }
}
