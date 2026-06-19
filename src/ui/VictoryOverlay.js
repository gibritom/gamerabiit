import { GAME_WIDTH, GAME_HEIGHT } from '../config.js';
import { TEXTURES } from '../assets/AssetGenerator.js';
import { createGameButton } from '../ui/GameButton.js';

export default class VictoryOverlay {
  constructor(scene) {
    this.scene = scene;
    this.elements = [];
  }

  show(phaseScore, sessionScore, onRestart) {
    const depth = 100;

    const overlay = this.scene.add
      .rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x000000, 0.55)
      .setDepth(depth);
    this.elements.push(overlay);

    const panel = this.scene.add
      .rectangle(GAME_WIDTH / 2, 300, 420, 280, 0xffffff, 0.95)
      .setStrokeStyle(4, 0xff9800)
      .setDepth(depth + 1);
    this.elements.push(panel);

    const title = this.scene.add
      .text(GAME_WIDTH / 2, 210, 'VITÓRIA! 🎉', {
        fontFamily: 'Arial, sans-serif',
        fontSize: '36px',
        fontStyle: 'bold',
        color: '#5D4037',
      })
      .setOrigin(0.5)
      .setDepth(depth + 2);
    this.elements.push(title);

    this.scene.add
      .image(GAME_WIDTH / 2 + 140, 200, TEXTURES.CARROT)
      .setDisplaySize(40, 40)
      .setDepth(depth + 2);

    const phaseScoreText = this.scene.add
      .text(GAME_WIDTH / 2, 270, `Fase: ${phaseScore} pts`, {
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        fontStyle: 'bold',
        color: '#5D4037',
      })
      .setOrigin(0.5)
      .setDepth(depth + 2);
    this.elements.push(phaseScoreText);

    const sessionScoreText = this.scene.add
      .text(GAME_WIDTH / 2, 310, `Total: ${sessionScore} pts`, {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        color: '#5D4037',
      })
      .setOrigin(0.5)
      .setDepth(depth + 2);
    this.elements.push(sessionScoreText);

    const { button, text } = createGameButton(
      this.scene,
      GAME_WIDTH / 2,
      380,
      'JOGAR NOVAMENTE',
      onRestart,
      { width: 260, height: 56, fontSize: '18px' }
    );
    button.setDepth(depth + 2);
    text.setDepth(depth + 3);
    this.elements.push(button, text);
  }
}
