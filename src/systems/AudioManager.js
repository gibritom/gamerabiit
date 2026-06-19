export default class AudioManager {
  constructor() {
    this.ctx = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;
      this.ctx = new AudioContext();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    return true;
  }

  playTone(frequency, duration, type = 'sine', volume = 0.25) {
    if (!this.ensureContext()) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = type;
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  playPlace() {
    this.playTone(520, 0.08, 'sine', 0.2);
  }

  playRemove() {
    this.playTone(360, 0.06, 'sine', 0.15);
  }

  playError() {
    this.playTone(180, 0.15, 'square', 0.18);
  }

  playVictory() {
    [523, 659, 784, 1047].forEach((freq, index) => {
      setTimeout(() => this.playTone(freq, 0.18, 'sine', 0.22), index * 110);
    });
  }
}
