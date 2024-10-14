// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser from "phaser";
import InventoryMenu from './InventoryMenu';
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("Game");

		/* START-USER-CTR-CODE */
		// Write your code here.
	}
	preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.pack('pack', 'assets/boot-asset-pack.json');
    }
	/* END-USER-CTR-CODE */

	editorCreate(): void {
		const particles = this.add.particles('particle');

    	// Creating particles
    	this.miningParticles = this.add.particles('particle');

		// background_1
		const background_1 = this.add.image(767, 431, "background_1");
		background_1.scaleX = 1.5;
		background_1.scaleY = 1.5;

		// iron_ore_block
		const iron_ore_block = this.add.image(374, 247, "iron_ore_block");
        iron_ore_block.scaleX = 7.8;
        iron_ore_block.scaleY = 7.8;
        iron_ore_block.setInteractive();
		iron_ore_block.on('pointerdown', () => {
            this.scene.get('InventoryMenu').addToInventory('iron_ore', 1);
			this.scene.get('InventoryMenu').updateInventoryDisplay();
        });

		// copper_ore_block
		const copper_ore_block = this.add.image(807, 312, "copper_ore_block");
		copper_ore_block.scaleX = 7.8;
		copper_ore_block.scaleY = 7.8;
		copper_ore_block.setInteractive();
        copper_ore_block.on('pointerdown', () => {
            this.scene.get('InventoryMenu').addToInventory('copper_ore', 1);
			this.scene.get('InventoryMenu').updateInventoryDisplay();
        });

		// rock_block
		const rock_block = this.add.image(432, 435, "rock_block");
		rock_block.scaleX = 7.8;
		rock_block.scaleY = 7.8;
		rock_block.setInteractive();
        rock_block.on('pointerdown', () => {
            this.scene.get('InventoryMenu').addToInventory('rock', 1);
			this.scene.get('InventoryMenu').updateInventoryDisplay();
        });

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1195, 290, 128, 128);
		rectangle_1.scaleX = 1.447046084870738;
		rectangle_1.scaleY = 4.650162957270586;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 9539985;

		// shadowFx_1
		rectangle_1.postFX!.addShadow(1, 1, 0.1, 1, 0, 4, 1);

		// build_UI_name
		const build_UI_name = this.add.text(1156, 12, "", {});
		build_UI_name.scaleX = 1.5;
		build_UI_name.scaleY = 1.5;
		build_UI_name.text = "Build";
		build_UI_name.setStyle({ "color": "#000000ff" });

		// smelter
		const smelter = this.add.image(1142, 71, "smelter");
		smelter.scaleX = 3;
		smelter.scaleY = 3;

		// crafter
		const crafter = this.add.image(1142, 141, "crafter");
		crafter.scaleX = 3;
		crafter.scaleY = 3;

		// miner
		const miner = this.add.image(1142, 211, "miner");
		miner.scaleX = 3;
		miner.scaleY = 3;

		// smelter_name
		const smelter_name = this.add.text(1188, 50, "", {});
		smelter_name.text = "Smelter";

		// crafter_name
		const crafter_name = this.add.text(1188, 120, "", {});
		crafter_name.text = "Crafter";

		// miner_name
		const miner_name = this.add.text(1196, 191, "", {});
		miner_name.text = "Miner";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */


	create() {
		this.scene.launch('CraftingMenu');
		this.scene.launch('InventoryMenu');
		this.editorCreate();


	}
	mineBlock(blockName: string, x: number, y: number) {
    // Emit particles directly from the miningParticles object
    // this.miningParticles.createEmitter({
    //     x: x,
    //     y: y,
    //     speed: { min: 50, max: 150 },
    //     lifespan: { min: 500, max: 1000 },
    //     scale: { start: 0.5, end: 0 },
    //     alpha: { start: 1, end: 0 },
    //     quantity: 10,
    //     gravityY: 200
    // });

    // Add the mined resource to the inventory based on the block name
    InventoryMenu.addToInventory(blockName, 1); // Add 1 unit of the mined resource

    console.log(`Mined 1 ${blockName}`);
}
}



	/* END-USER-CODE */

/* END OF COMPILED CODE */

// You can write more code here
