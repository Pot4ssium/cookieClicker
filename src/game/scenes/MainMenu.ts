// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser from "phaser";
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

		// background_1
		const background_1 = this.add.image(767, 431, "background_1");
		background_1.scaleX = 1.5;
		background_1.scaleY = 1.5;

		// iron_ore_block
		const iron_ore_block = this.add.image(374, 247, "iron_ore_block");
        iron_ore_block.scaleX = 7.8;
        iron_ore_block.scaleY = 7.8;
        iron_ore_block.setInteractive(); // No need to use 'this' here
        iron_ore_block.on('pointerdown', () => {
            console.log("Iron ore block clicked!");
            this.incrementResource('iron_ore_count'); // Pass the resource name as a string
        });

		// copper_ore_block
		const copper_ore_block = this.add.image(807, 312, "copper_ore_block");
		copper_ore_block.scaleX = 7.8;
		copper_ore_block.scaleY = 7.8;

		// rock_block
		const rock_block = this.add.image(432, 435, "rock_block");
		rock_block.scaleX = 7.8;
		rock_block.scaleY = 7.8;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1195, 290, 128, 128);
		rectangle_1.scaleX = 1.447046084870738;
		rectangle_1.scaleY = 4.650162957270586;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 9539985;

		// shadowFx_1
		rectangle_1.postFX!.addShadow(1, 1, 0.1, 1, 0, 4, 1);

		// rectangle
		const rectangle = this.add.rectangle(91, 296, 128, 128);
		rectangle.scaleX = 1.447046084870738;
		rectangle.scaleY = 4.650162957270586;
		rectangle.isFilled = true;
		rectangle.fillColor = 9539985;

		// shadowFx_2
		rectangle.postFX!.addShadow(-1, 1, 0.1, 1, 0, 2, 1);

		// inventory
		const inventory = this.add.text(29, 16, "", {});
		inventory.scaleX = 1.5;
		inventory.scaleY = 1.5;
		inventory.text = "Inventory";
		inventory.setStyle({ "color": "#000000ff" });

		// iron_ore
		const iron_ore = this.add.image(25, 79, "iron_ore");
		iron_ore.scaleX = 2;
		iron_ore.scaleY = 2;

		// copper_ore
		const copper_ore = this.add.image(25, 119, "copper_ore");
		copper_ore.scaleX = 2;
		copper_ore.scaleY = 2;

		// rock
		const rock = this.add.image(25, 159, "rock");
		rock.scaleX = 2;
		rock.scaleY = 2;

		// iron_ingot
		const iron_ingot = this.add.image(25, 199, "iron_ingot");
		iron_ingot.scaleX = 2;
		iron_ingot.scaleY = 2;

		// copper_ingot
		const copper_ingot = this.add.image(25, 239, "copper_ingot");
		copper_ingot.scaleX = 2;
		copper_ingot.scaleY = 2;

		// concrete
		const concrete = this.add.image(25, 279, "concrete");
		concrete.scaleX = 2;
		concrete.scaleY = 2;

		// iron_plate
		const iron_plate = this.add.image(25, 319, "iron_plate");
		iron_plate.scaleX = 2;
		iron_plate.scaleY = 2;

		// copper_plate
		const copper_plate = this.add.image(25, 359, "copper_plate");
		copper_plate.scaleX = 2;
		copper_plate.scaleY = 2;

		// iron_rod
		const iron_rod = this.add.image(25, 399, "iron_rod");
		iron_rod.scaleX = 2;
		iron_rod.scaleY = 2;

		// screws
		const screws = this.add.image(25, 439, "screws");
		screws.scaleX = 2;
		screws.scaleY = 2;

		// wire
		const wire = this.add.image(25, 479, "wire");
		wire.scaleX = 2;
		wire.scaleY = 2;

		// cable
		const cable = this.add.image(25, 519, "cable");
		cable.scaleX = 2;
		cable.scaleY = 2;

		// iron_ore_name
		const iron_ore_name = this.add.text(51, 62, "", {});
		iron_ore_name.text = "Iron Ore:";

		// iron_ore_count
		const iron_ore_count = this.add.text(51, 82, "", {});
		iron_ore_count.text = "0";

		// copper_ore_name
		const copper_ore_name = this.add.text(51, 102, "", {});
		copper_ore_name.text = "Copper Ore:";

		// copper_ore_count
		const copper_ore_count = this.add.text(51, 122, "", {});
		copper_ore_count.text = "0";

		// rock_name
		const rock_name = this.add.text(51, 142, "", {});
		rock_name.text = "Rock";

		// rock_count
		const rock_count = this.add.text(51, 162, "", {});
		rock_count.text = "0";

		// iron_ingot_name
		const iron_ingot_name = this.add.text(51, 182, "", {});
		iron_ingot_name.text = "Iron Ingot:";

		// iron_ingot_count
		const iron_ingot_count = this.add.text(51, 202, "", {});
		iron_ingot_count.text = "0";

		// copper_ingot_name
		const copper_ingot_name = this.add.text(51, 221, "", {});
		copper_ingot_name.text = "Copper Ingot:";

		// copper_ingot_count
		const copper_ingot_count = this.add.text(51, 241, "", {});
		copper_ingot_count.text = "0";

		// concrete_name
		const concrete_name = this.add.text(51, 261, "", {});
		concrete_name.text = "Concrete:";

		// concrete_count
		const concrete_count = this.add.text(51, 281, "", {});
		concrete_count.text = "0";

		// iron_plate_name
		const iron_plate_name = this.add.text(51, 301, "", {});
		iron_plate_name.text = "Iron Plate:";

		// iron_plate_count
		const iron_plate_count = this.add.text(51, 321, "", {});
		iron_plate_count.text = "0";

		// copper_plate_name
		const copper_plate_name = this.add.text(51, 341, "", {});
		copper_plate_name.text = "Copper Plate:";

		// copper_plate_count_7
		const copper_plate_count_7 = this.add.text(51, 361, "", {});
		copper_plate_count_7.text = "0";

		// iron_rod_name
		const iron_rod_name = this.add.text(51, 381, "", {});
		iron_rod_name.text = "Iron Rod:";

		// iron_rod_count
		const iron_rod_count = this.add.text(51, 401, "", {});
		iron_rod_count.text = "0";

		// screws_name
		const screws_name = this.add.text(51, 421, "", {});
		screws_name.text = "Screws:";

		// screws_count
		const screws_count = this.add.text(51, 441, "", {});
		screws_count.text = "0";

		// copper_wire_name
		const copper_wire_name = this.add.text(51, 461, "", {});
		copper_wire_name.text = "Copper Wire:";

		// copper_wire_count
		const copper_wire_count = this.add.text(51, 481, "", {});
		copper_wire_count.text = "0";

		// cable_name
		const cable_name = this.add.text(51, 501, "", {});
		cable_name.text = "Cable:";

		// cable_count
		const cable_count = this.add.text(51, 521, "", {});
		cable_count.text = "0";

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

	// Write your code here


	create() {
		this.editorCreate();

	}
    incrementResource(resourceName: string): void {
    const resourceText = this.children.getByName(resourceName) as Phaser.GameObjects.Text;
    
    if (resourceText) {
        const currentCount = parseInt(resourceText.text);
        resourceText.setText((currentCount + 1).toString());
    } else {
        console.error(`Resource text for ${resourceName} not found`);
    }
}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
