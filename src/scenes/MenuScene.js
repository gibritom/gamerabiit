import { GAME_WIDTH, GAME_HEIGHT } from '../config.js';
import { TEXTURES } from '../assets/AssetGenerator.js';
import { createGameButton } from '../ui/GameButton.js';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
    this.add
      .image(GAME_WIDTH / 2, GAME_HEIGHT / 2, TEXTURES.BACKGROUND)
      .setDisplaySize(GAME_WIDTH, GAME_HEIGHT);

    this.add
      .text(GAME_WIDTH / 2, 120, 'O CAMINHO DO COELHO', {
        fontFamily: 'Arial, sans-serif',
        fontSize: '38px',
        fontStyle: 'bold',
        color: '#5D4037',
        stroke: '#FFFFFF',
        strokeThickness: 4,
      })
      .setOrigin(0.5);

    this.add
      .text(GAME_WIDTH / 2, 170, 'Construa o caminho até a cenoura!', {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        color: '#5D4037',
      })
      .setOrigin(0.5);

    const mascotY = 290;
    this.add.image(GAME_WIDTH / 2 - 80, mascotY, TEXTURES.RABBIT).setDisplaySize(64, 64);
    this.add
      .text(GAME_WIDTH / 2, mascotY, '→', { fontSize: '36px', color: '#5D4037' })
      .setOrigin(0.5);
    this.add.image(GAME_WIDTH / 2 + 80, mascotY, TEXTURES.CARROT).setDisplaySize(56, 56);

    createGameButton(this, GAME_WIDTH / 2, 420, 'JOGAR', () => {
      this.registry.set('currentLevelIndex', 0);
      this.registry.set('sessionScore', 0);
      this.scene.start('GameScene');
    });
  }
}
