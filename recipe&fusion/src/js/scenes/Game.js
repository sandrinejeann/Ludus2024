class SceneA extends Phaser.Scene { 
    constructor() {
      super({ key: "Accueil" });
    }
  
    preload() {
      this.load.image("Commencer", "../assets/image/Commencer.png");
      this.load.image("bg", "../assets/image/strawberry-7021062_1280.png");
      this.load.image("logo", "../assets/image/logo.png");
      this.load.image("Commentjouer", "../assets/image/Comment jouer.png");
      this.load.image("Credit", "../assets/image/Crédit.png");
      this.load.image("volume", "../assets/image/volume.png"); 
    }
  
    create() {
      let img = this.add.image(config.width / 2, config.height / 2, "bg");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);
      img.setOrigin(0.5); 
  
      let logo = this.add.image(config.width / 2 , config.height / 2 - 100, "logo")
        .setScale(0.3)
        .setOrigin(0.5);
  
      let volume = this.add.image(config.width - 20, 20, "volume")
        .setScale(0.05)
        .setOrigin(1, 0);
  
  
      const Commencer = this.add
        .image(config.width / 2 - 10, config.height / 2+10, "Commencer")
        .setScale(0.3)
        .setOrigin(0.5);
  
      Commencer.setInteractive();
      Commencer.on("pointerdown", () => {
        this.scene.start("Jeu"); 
      });
  
      const Commentjouer = this.add
        .image(config.width / 2 - 10, config.height / 2 + 68, "Commentjouer")
        .setScale(0.3)
        .setOrigin(0.5);
  
      Commentjouer.setInteractive();
      Commentjouer.on("pointerdown", () => {
        this.scene.start("Commentjouer");
      });
  
      const Crédit = this.add
        .image(config.width / 2 - 15, config.height / 2 + 117, "Credit")
        .setScale(0.3)
        .setOrigin(0.5);
  
      Crédit.setInteractive();
      Crédit.on("pointerdown", () => {
        this.scene.start("Crédit");
      });
    }
  }
  
  class SceneB extends Phaser.Scene {
    constructor() {
      super({ key: "Jeu" });
    }
  
    preload() {
      this.load.image("quitter", "../assets/image/remove.png");
      this.load.image("bg", "../assets/image/strawberry-7021062_1280.png");
      this.load.image("volume", "../assets/image/volume.png");
    }
  
    create() {
      let img = this.add.image(config.width / 2, config.height / 2, "bg");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);
      img.setOrigin(0.5); 
  
      const accueil = this.add
        .image(config.width - 20, 20, "quitter")
        .setScale(0.05)
        .setOrigin(1, 0);
  
      accueil.setInteractive();
      accueil.on("pointerdown", () => {
        this.scene.start("Accueil");
      });
  
      let volume = this.add.image(20, 20, "volume")
      .setScale(0.05)
      .setOrigin(0, 0);
  
      
    }
  }

  class SceneC extends Phaser.Scene {
    constructor() {
      super({ key: "Commentjouer" });
    }
  
    preload() {
      this.load.image("quitter", "../assets/image/remove.png");
      this.load.image("bg", "../assets/image/strawberry-7021062_1280.png");
      this.load.image("volume", "../assets/image/volume.png");
    }
  
    create() {
      let img = this.add.image(config.width / 2, config.height / 2, "bg");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);
      img.setOrigin(0.5); 
  
      const accueil = this.add
        .image(config.width - 20, 20, "quitter")
        .setScale(0.05)
        .setOrigin(1, 0);
  
      accueil.setInteractive();
      accueil.on("pointerdown", () => {
        this.scene.start("Accueil");
      });
  
      let volume = this.add.image(20, 20, "volume")
      .setScale(0.05)
      .setOrigin(0, 0);
  
      
    }
  }

  class SceneD extends Phaser.Scene {
    constructor() {
      super({ key: "Crédit" });
    }
  
    preload() {
      this.load.image("quitter", "../assets/image/remove.png");
      this.load.image("bg", "../assets/image/strawberry-7021062_1280.png");
      this.load.image("volume", "../assets/image/volume.png");
    }
  
    create() {
      let img = this.add.image(config.width / 2, config.height / 2, "bg");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);
      img.setOrigin(0.5); 
  
      const accueil = this.add
        .image(config.width - 20, 20, "quitter")
        .setScale(0.05)
        .setOrigin(1, 0);
  
      accueil.setInteractive();
      accueil.on("pointerdown", () => {
        this.scene.start("Accueil");
      });
  
      let volume = this.add.image(20, 20, "volume")
      .setScale(0.05)
      .setOrigin(0, 0);
  
      
    }
  }

  class SceneE extends Phaser.Scene {
    constructor() {
      super({ key: "Partieterminer" });
    }
  
    preload() {
      this.load.image("quitter", "../assets/image/remove.png");
      this.load.image("bg", "../assets/image/strawberry-7021062_1280.png");
      this.load.image("volume", "../assets/image/volume.png");
      this.load.image("Recommencer", "../assets/image/Recommencer.png");
    }
  
    create() {
      let img = this.add.image(config.width / 2, config.height / 2, "bg");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);
      img.setOrigin(0.5); 
  
      const accueil = this.add
        .image(config.width - 20, 20, "quitter")
        .setScale(0.05)
        .setOrigin(1, 0);
  
      accueil.setInteractive();
      accueil.on("pointerdown", () => {
        this.scene.start("Accueil");
      });
  
      let volume = this.add.image(20, 20, "volume")
      .setScale(0.05)
      .setOrigin(0, 0);

      const Recommencer = this.add
        .image(config.width / 2 - 10, config.height / 2, "Recommencer")
        .setScale(0.3)
        .setOrigin(0.5);
  
      Recommencer.setInteractive();
      Recommencer.on("pointerdown", () => {
        this.scene.start("Jeu"); 
      });
      
    }
  }

  class SceneF extends Phaser.Scene {
    constructor() {
      super({ key: "Victoire" });
    }
  
    preload() {
      this.load.image("MenuPrincipale", "../assets/image/Menu Principale.png");
      this.load.image("bg", "../assets/image/strawberry-7021062_1280.png");
      this.load.image("volume", "../assets/image/volume.png");
    }
  
    create() {
      let img = this.add.image(config.width / 2, config.height / 2, "bg");
      let scaleX = config.width / img.width;
      let scaleY = config.height / img.height;
      let scale = Math.max(scaleX, scaleY);
      img.setScale(scale);
      img.setOrigin(0.5); 
  
      const MenuPrincipale = this.add
      .image(config.width / 2 - 10, config.height / 2, "MenuPrincipale")
      .setScale(0.3)
      .setOrigin(0.5);
  
        MenuPrincipale.setInteractive();
        MenuPrincipale.on("pointerdown", () => {
        this.scene.start("Accueil");
      });
  
      let volume = this.add.image(20, 20, "volume")
      .setScale(0.05)
      .setOrigin(0, 0);
      
    }
  }
  
  const config = {
    type: Phaser.AUTO,
    transparent: true,
    width: 800,
    height: 400,
    scene: [SceneA, SceneB, SceneC, SceneD, SceneE, SceneF]
  };
  
  const game = new Phaser.Game(config);
  
  