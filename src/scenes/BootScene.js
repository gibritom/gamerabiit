import {
  generateGameTextures,
  preloadSpriteAssets,
} from '../assets/AssetGenerator.js';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    preloadSpriteAssets(this);
  }

  create() {
    generateGameTextures(this);

    if (!this.registry.has('sessionScore')) {
      this.registry.set('sessionScore', 0);
    }

    this.scene.start('MenuScene');
  }
}
