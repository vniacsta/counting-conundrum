const gameState = {
  counter: 1,
  correct: 0,
  incorrect: 0,
  numCoordinates: {},
};

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: 'F8B392',
  scene: [StartScene, GameScene, EndScene]
};

const game = new Phaser.Game(config);
