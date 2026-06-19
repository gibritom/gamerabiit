import { GAME_WIDTH, GAME_HEIGHT, TILE_SIZE } from '../config.js';

export const TEXTURES = {
  GRASS: 'tile-grass',
  PATH: 'tile-path',
  RABBIT: 'rabbit',
  CARROT: 'carrot',
  BUTTON: 'ui-button',
  BACKGROUND: 'bg-meadow',
  HUD_PANEL: 'hud-panel',
  EGG: 'collectible-egg',
};

export const SPRITE_FILES = {
  [TEXTURES.RABBIT]: 'assets/sprites/rabbit.png',
  [TEXTURES.CARROT]: 'assets/sprites/carrot.png',
  [TEXTURES.EGG]: 'assets/sprites/egg.png',
};

export function preloadSpriteAssets(scene) {
  for (const [key, path] of Object.entries(SPRITE_FILES)) {
    scene.load.image(key, path);
  }
}

export function generateGameTextures(scene) {
  generateGrass(scene);
  generatePath(scene);
  generateButton(scene);
  generateHudPanel(scene);
  generateBackground(scene);
}

function drawTexture(scene, key, width, height, drawFn) {
  const graphics = scene.make.graphics({ x: 0, y: 0, add: false });
  drawFn(graphics, width, height);
  graphics.generateTexture(key, width, height);
  graphics.destroy();
}

function generateGrass(scene) {
  const size = TILE_SIZE;
  drawTexture(scene, TEXTURES.GRASS, size, size, (g, w, h) => {
    g.fillStyle(0x5dab55, 1);
    g.fillRoundedRect(1, 1, w - 2, h - 2, 6);
    g.fillStyle(0x43a047, 1);
    g.fillRoundedRect(1, h * 0.55, w - 2, h * 0.42, 4);
    g.lineStyle(2, 0x388e3c, 0.6);
    g.strokeRoundedRect(1, 1, w - 2, h - 2, 6);
    g.fillStyle(0x7ec850, 0.7);
    [[10, 12], [28, 8], [48, 18], [18, 38], [42, 44], [54, 30]].forEach(([x, y]) => {
      g.fillCircle(x, y, 2);
    });
  });
}

function generatePath(scene) {
  const size = TILE_SIZE;
  drawTexture(scene, TEXTURES.PATH, size, size, (g, w, h) => {
    g.fillStyle(0xc8b8a8, 1);
    g.fillRoundedRect(1, 1, w - 2, h - 2, 6);
    g.fillStyle(0xa8907a, 1);
    g.fillRoundedRect(4, h * 0.5, w - 8, h * 0.46, 4);
    g.lineStyle(2, 0x8d6e63, 0.5);
    g.strokeRoundedRect(1, 1, w - 2, h - 2, 6);
    g.fillStyle(0x9e8b78, 0.8);
    [[12, 14], [34, 10], [50, 28], [16, 42], [44, 48], [28, 26]].forEach(([x, y]) => {
      g.fillCircle(x, y, 2.5);
    });
  });
}

function generateButton(scene) {
  drawTexture(scene, TEXTURES.BUTTON, 200, 56, (g, w, h) => {
    g.fillStyle(0xff9800, 1);
    g.fillRoundedRect(0, 0, w, h, 14);
    g.fillStyle(0xffb74d, 0.6);
    g.fillRoundedRect(4, 4, w - 8, h * 0.4, 10);
    g.lineStyle(3, 0xe65100, 0.3);
    g.strokeRoundedRect(0, 0, w, h, 14);
  });
}

function generateHudPanel(scene) {
  drawTexture(scene, TEXTURES.HUD_PANEL, 120, 36, (g, w, h) => {
    g.fillStyle(0x5d4037, 0.15);
    g.fillRoundedRect(0, 0, w, h, 8);
    g.lineStyle(2, 0x5d4037, 0.25);
    g.strokeRoundedRect(0, 0, w, h, 8);
  });
}

function generateBackground(scene) {
  drawTexture(scene, TEXTURES.BACKGROUND, GAME_WIDTH, GAME_HEIGHT, (g, w, h) => {
    g.fillStyle(0x87ceeb, 1);
    g.fillRect(0, 0, w, h * 0.35);
    g.fillStyle(0x7ec850, 1);
    g.fillRect(0, h * 0.35, w, h * 0.65);

    g.fillStyle(0x6ab04a, 0.6);
    g.fillEllipse(w * 0.2, h * 0.55, 280, 120);
    g.fillEllipse(w * 0.75, h * 0.6, 320, 140);
    g.fillStyle(0x5a9e3e, 0.4);
    g.fillEllipse(w * 0.5, h * 0.7, 400, 100);

    g.fillStyle(0xffeb3b, 0.9);
    g.fillCircle(w - 80, 70, 40);
    g.fillStyle(0xfff59d, 0.5);
    g.fillCircle(w - 80, 70, 52);
  });
}
