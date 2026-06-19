import { GAME_WIDTH, GAME_HEIGHT } from '../config.js';
import { TEXTURES } from '../assets/AssetGenerator.js';
import { createGameButton } from '../ui/GameButton.js';

export default class VictoryOverlay {
  constructor(scene) {
    this.scene = scene;
    this.elements = [];
  }

  show({ phaseScore, sessionScore, levelNumber, isLastLevel, onNextPhase, onRestart, onMenu }) {
    const depth = 100;

    const overlay = this.scene.add
      .rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x000000, 0.55)
      .setDepth(depth);
    this.elements.push(overlay);

    const panelHeight = isLastLevel ? 320 : 340;
    const panel = this.scene.add
      .rectangle(GAME_WIDTH / 2, 300, 420, panelHeight, 0xffffff, 0.95)
      .setStrokeStyle(4, 0xff9800)
      .setDepth(depth + 1);
    this.elements.push(panel);

    const titleText = isLastLevel ? 'TODAS AS FASES COMPLETAS! 🏆' : 'VITÓRIA! 🎉';
    const title = this.scene.add
      .text(GAME_WIDTH / 2, 210, titleText, {
        fontFamily: 'Arial, sans-serif',
        fontSize: isLastLevel ? '28px' : '36px',
        fontStyle: 'bold',
        color: '#5D4037',
        align: 'center',
        wordWrap: { width: 380 },
      })
      .setOrigin(0.5)
      .setDepth(depth + 2);
    this.elements.push(title);

    this.scene.add
      .image(GAME_WIDTH / 2 + 140, 200, TEXTURES.CARROT)
      .setDisplaySize(40, 40)
      .setDepth(depth + 2);

    const phaseScoreText = this.scene.add
      .text(GAME_WIDTH / 2, 270, `Fase ${levelNumber}: ${phaseScore} pts`, {
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

    if (isLastLevel) {
      const { button: menuBtn, text: menuText } = createGameButton(
        this.scene,
        GAME_WIDTH / 2,
        370,
        'VOLTAR AO MENU',
        onMenu,
        { width: 260, height: 56, fontSize: '18px' }
      );
      menuBtn.setDepth(depth + 2);
      menuText.setDepth(depth + 3);
      this.elements.push(menuBtn, menuText);

      const { button: restartBtn, text: restartText } = createGameButton(
        this.scene,
        GAME_WIDTH / 2,
        430,
        'JOGAR NOVAMENTE',
        onRestart,
        { width: 260, height: 48, fontSize: '16px' }
      );
      restartBtn.setDepth(depth + 2);
      restartText.setDepth(depth + 3);
      this.elements.push(restartBtn, restartText);
    } else {
      const { button: nextBtn, text: nextText } = createGameButton(
        this.scene,
        GAME_WIDTH / 2,
        360,
        'PRÓXIMA FASE',
        onNextPhase,
        { width: 260, height: 56, fontSize: '18px' }
      );
      nextBtn.setDepth(depth + 2);
      nextText.setDepth(depth + 3);
      this.elements.push(nextBtn, nextText);

      const { button: restartBtn, text: restartText } = createGameButton(
        this.scene,
        GAME_WIDTH / 2,
        420,
        'JOGAR NOVAMENTE',
        onRestart,
        { width: 260, height: 48, fontSize: '16px' }
      );
      restartBtn.setDepth(depth + 2);
      restartText.setDepth(depth + 3);
      this.elements.push(restartBtn, restartText);
    }
  }
}
