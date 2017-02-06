class ShipType2Controller extends ShipController {
  constructor(x,y,configs) {
    super(
      x,
      y,
      "Spaceship1-Partner.png",
      configs
    );
    this.configs.frameNameDefault = "Spaceship1-Partner.png";
    this.configs.frameNameLeft = "Spaceship1Left-Partner.png";
    this.configs.frameNameRight = "Spaceship1Right-Partner.png";

    this.configs.up = Phaser.Keyboard.UP;
    this.configs.down = Phaser.Keyboard.DOWN;
    this.configs.left = Phaser.Keyboard.LEFT;
    this.configs.right = Phaser.Keyboard.RIGHT;
    this.configs.fire = Phaser.Keyboard.SPACEBAR;
    this.cooldown = 0.3;
    this.sprite.health = 1;
  }

}
