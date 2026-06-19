import { RABBIT_STEP_MS } from '../config.js';

export default class RabbitMovement {
  constructor(scene) {
    this.scene = scene;
    this.activeTween = null;
  }

  moveAlongPath(rabbit, path, getWorldPos, onComplete, onStep) {
    if (path.length <= 1) {
      onComplete();
      return;
    }

    let stepIndex = 1;

    const moveNext = () => {
      if (stepIndex >= path.length) {
        onComplete();
        return;
      }

      const cell = path[stepIndex];
      const { x, y } = getWorldPos(cell.col, cell.row);

      onStep?.(cell, stepIndex);

      this.activeTween = this.scene.tweens.add({
        targets: rabbit,
        x,
        y,
        duration: RABBIT_STEP_MS,
        ease: 'Linear',
        onComplete: () => {
          stepIndex++;
          moveNext();
        },
      });
    };

    moveNext();
  }

  stop() {
    if (this.activeTween) {
      this.activeTween.stop();
      this.activeTween = null;
    }
  }
}
