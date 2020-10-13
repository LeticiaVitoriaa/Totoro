import Jogador from'./jogador.js';

export default class CenaJogo extends Phaser.Scene{
    constructor() {
        super({
            key: 'CenaJogo'
        });

    }

    preload() {

    }


    create() {
        const fundo = this.add.image(0, 0, 'cenario');
        fundo.setOrigin(0, 0);

        const plataformas = this.physics.add.staticGroup();
        plataformas.create(0, 300, 'chao').setOrigin(0, 0).refreshBody();
       
        plataformas.create(0, 170, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(390, 230, 'plataforma').setOrigin(0, 0).refreshBody();
        
        this.jogador = new Jogador(this);
        this.physics.add.collider(this.jogador.sprite, plataformas);
        
        this.tecla = this.input.keyboard.createCursorKeys();
        
        
        let pontos = 0;
        let pontostext = this.add.text(16, 16, 'pontos: 0', {fontSize: '15px', fill: '#000'});    
       
        //criando folhas
        //const folhas = this.physics.add.group({
           // key: 'folha',
           // repeat: 15,
           // setXY: { x: 16, y: 0, stepX: 39}
        //});

        //folhas.children.iterate(function (child) {
            
            //child.setBounceY(Phaser.Math.FloatBetween(0, 0.2));
        //});

          //coletando folhas
          //function colletfolha (jogador, folha) {

           // jogador = this.jogador.sprite;

           // folha.disableBody(true, true);
 
           // pontos += 10;
           // pontostext.setText('Score: ' + pontos);

        //}

        //this.physics.add.overlap(this.jogador.sprite, folhas, colletfolha, null, this);
        //this.physics.add.collider(folhas, plataformas);

    }

    update() {
        
        const jogador = this.jogador.sprite;


        if(this.tecla.left.isDown) {
            jogador.setVelocityX(-130);
            jogador.setFlip(false, false)
            jogador.anims.play('esquerda', true);
        }

        else if(this.tecla.right.isDown) {
            jogador.setVelocityX(130);
            jogador.setFlip(true, false)
            jogador.anims.play('direita', true);
        }

        else {
            jogador.setVelocityX(0);
            if(jogador.body.touching.down) {
                jogador.anims.play('parado');
            }
        }
        
        if(this.tecla.up.isDown && jogador.body.touching.down) {
            jogador.setVelocityY(-250);
            jogador.anims.play('parado');
        }

    }
}

