import { TEXTURES } from '../assets/AssetGenerator.js';

export function createRabbit(scene, x, y) {
  const rabbit = scene.add.sprite(x, y, TEXTURES.RABBIT);
  rabbit.setDisplaySize(56, 56);
  rabbit.setDepth(10);

  rabbit.idleTween = scene.tweens.add({
    targets: rabbit,
    y: y - 4,
    duration: 800,
    yoyo: true,
    repeat: -1,
    ease: 'Sine.easeInOut',
  });

  return rabbit;
}

export function stopIdleAnimation(rabbit) {
  if (rabbit.idleTween) {
    rabbit.idleTween.stop();
    rabbit.idleTween = null;
  }
}

export function hopRabbit(scene, rabbit) {
  scene.tweens.add({
    targets: rabbit,
    scaleY: 1.2,
    scaleX: 0.9,
    duration: 80,
    yoyo: true,
    ease: 'Quad.easeOut',
  });
}
