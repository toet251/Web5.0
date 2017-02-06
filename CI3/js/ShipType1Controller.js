class ShipType1Controller extends ShipController {
  constructor(x,y,configs) {
    super(
      x,
      y,
      "Spaceship1-Player.png",
      configs
    );

    this.configs.frameNameDefault = "Spaceship1-Player.png";
    this.configs.frameNameLeft = "Spaceship1Left-Player.png";
    this.configs.frameNameRight = "Spaceship1Right-Player.png";

    this.configs.up = Phaser.Keyboard.W;
    this.configs.down = Phaser.Keyboard.S;
    this.configs.left = Phaser.Keyboard.A;
    this.configs.right = Phaser.Keyboard.D;
    this.configs.fire = Phaser.Keyboard.CONTROL;
    this.cooldown = 0.3;
    this.sprite.health = 1;
  }

}
