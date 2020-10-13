export default class Jogador {
    constructor(cena) {
        this.cena = cena;

        this.sprite = cena.physics.add.sprite(0, 200, 'totoro');
        this.sprite.setSize(100, 90);

        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true);

        cena.anims.create({
            key: 'direita',
            frames: cena.anims.generateFrameNumbers('totoro', { start: 1, end: 12}),
            frameRate: 25,
            repeat: -1
        });

        cena.anims.create({
            key: 'esquerda',
            frames: cena.anims.generateFrameNumbers('totoro', { start: 1, end: 12}),
            frameRate: 25,
            repeat: -1
        });

        cena.anims.create({
            key: 'parado',
            frames: cena.anims.generateFrameNumbers('totoro', { start: 5, end: 5,}),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'pulo',
            frames: cena.anims.generateFrameNumbers('totoro', { start: 21, end: 22,}),
            frameRate: 20,
            repeat: -1
        });
    }
}