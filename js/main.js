import CenaCarregamento from './cenacarregamento.js';
import CenaJogo from './cenajogo.js';

const config = {
    type: Phaser.AUTO,
    width: 625,
    height: 375,
    parent: 'jogo-totoro',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            },

            debug: false
        }
    },
    scene: [
        CenaCarregamento,
        CenaJogo
    ]

};

const jogo = new Phaser.Game(config);