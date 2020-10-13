export default class CenaCarregamento extends Phaser.Scene{
    constructor() {
        super({
            key: 'CenaCarregamento'
        });

    }

    preload() {
        const largJogo = this.sys.canvas.width;
        const barracarregar = this.add.graphics();

        const largBarra = 0.8 * largJogo;
        this.load.on('progress', (value) =>{
            barracarregar.clear();

            barracarregar.fillStyle(0xadadad, 1);
            barracarregar.fillRect((largJogo - largBarra) / 2, this.sys.game.config.height / 2, largBarra * value, 25);

            barracarregar.lineStyle(4, 0xfbfbfb, 1);
            barracarregar.strokeRect((largJogo - largBarra) / 2, this.sys.game.config.height / 2, largBarra, 25);

        });

        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        });

        this.load.image('cenario', 'imgs/cenario.jpg');
        this.load.image('chao', 'imgs/chao.jpg');
        this.load.image('plataforma', 'imgs/plataforma.png');
        this.load.image('folha', 'imgs/folha.png');
        this.load.image('gota', 'imgs/gota.png');
        this.load.spritesheet('totoro', 'imgs/totorosprite.png', { frameWidth: 100.5, frameHeigth: 100.5});
    }

    create() {
        

    }
    update() {

    }
}