import MainMenu from './scenes/MainMenu';
import { AUTO, Game } from 'phaser';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1280, // Set width to the current window width
    height: 720, 
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        MainMenu
    ]
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
