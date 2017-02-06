class ShipType3Controller extends ShipController {
  constructor(x,y,configs) {
    super(
      x,
      y,
      "Spaceship2-Player.png",
      configs
    );
    this.configs.frameNameDefault = "Spaceship2-Player.png";
    this.configs.frameNameLeft = "Spaceship2Left-Player.png";
    this.configs.frameNameRight = "Spaceship2Right-Player.png";
    
    this.configs.up = Phaser.Keyboard.U,
    this.configs.down = Phaser.Keyboard.J,
    this.configs.left = Phaser.Keyboard.H,
    this.configs.right = Phaser.Keyboard.K,
    this.configs.fire = Phaser.Keyboard.L,
    this.cooldown = 0.3;
    this.sprite.health = 1;
  }

}
