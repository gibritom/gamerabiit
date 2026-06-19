import { TEXTURES } from '../assets/AssetGenerator.js';

const FONT = { fontFamily: 'Arial, sans-serif', fontStyle: 'bold', color: '#FFFFFF' };

export function createGameButton(scene, x, y, label, onClick, options = {}) {
  const width = options.width ?? 200;
  const height = options.height ?? 56;
  const fontSize = options.fontSize ?? '22px';

  const button = scene.add
    .image(x, y, TEXTURES.BUTTON)
    .setDisplaySize(width, height)
    .setInteractive({ useHandCursor: true });

  const text = scene.add
    .text(x, y, label, { ...FONT, fontSize })
    .setOrigin(0.5);

  button.on('pointerover', () => button.setTint(0xffcc80));
  button.on('pointerout', () => button.clearTint());
  button.on('pointerdown', onClick);

  return { button, text };
}

export function setButtonEnabled(button, text, enabled) {
  button.setAlpha(enabled ? 1 : 0.5);
  text.setAlpha(enabled ? 1 : 0.5);

  if (enabled) {
    button.setInteractive({ useHandCursor: true });
  } else {
    button.disableInteractive();
  }
}
