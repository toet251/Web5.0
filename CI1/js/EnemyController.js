class EnemyController {
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.playerGroup.create(
      x,
      y,
      "assets",
      spriteName
    );

    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.set(1);
    this.sprite.body.velocity = new Phaser.Point(Nakama.configs.enemySpeed, 0);

    this.configs = configs;
  }

  update() {
  }
}
