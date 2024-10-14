import Phaser from 'phaser';

export default class InventoryMenu extends Phaser.Scene {
    private inventory: { [key: string]: { count: number, textObject: Phaser.GameObjects.Text | null } } = {
        iron_ore: { count: 0, textObject: null },
        copper_ore: { count: 0, textObject: null },
        rock: { count: 0, textObject: null },
        iron_ingot: { count: 0, textObject: null },
        copper_ingot: { count: 0, textObject: null },
        concrete: { count: 0, textObject: null },
        iron_plate: { count: 0, textObject: null },
        copper_plate: { count: 0, textObject: null },
        iron_rod: { count: 0, textObject: null },
        screws: { count: 0, textObject: null },
        wire: { count: 0, textObject: null },
        cable: { count: 0, textObject: null },
    };

    constructor() {
        super({ key: 'InventoryMenu' });
    }

    create() {
        // Background Rectangle
        const rectangle = this.add.rectangle(91, 296, 128, 128);
        rectangle.scaleX = 1.447;
        rectangle.scaleY = 4.65;
        rectangle.isFilled = true;
        rectangle.fillColor = 9539985;
        rectangle.postFX!.addShadow(-1, 1, 0.1, 1, 0, 2, 1);

        // Inventory title
        const inventoryTitle = this.add.text(29, 16, "Inventory", { fontSize: '24px', color: '#000000' });
        inventoryTitle.scaleX = 1;
        inventoryTitle.scaleY = 1;

        // Add all resources with images, names, and counters

        // Iron Ore
        this.addResource('iron_ore', 'Iron Ore:', 25, 79, 51, 62, 51, 82);

        // Copper Ore
        this.addResource('copper_ore', 'Copper Ore:', 25, 119, 51, 102, 51, 122);

        // Rock
        this.addResource('rock', 'Rock:', 25, 159, 51, 142, 51, 162);

        // Iron Ingot
        this.addResource('iron_ingot', 'Iron Ingot:', 25, 199, 51, 182, 51, 202);

        // Copper Ingot
        this.addResource('copper_ingot', 'Copper Ingot:', 25, 239, 51, 221, 51, 241);

        // Concrete
        this.addResource('concrete', 'Concrete:', 25, 279, 51, 261, 51, 281);

        // Iron Plate
        this.addResource('iron_plate', 'Iron Plate:', 25, 319, 51, 301, 51, 321);

        // Copper Plate
        this.addResource('copper_plate', 'Copper Plate:', 25, 359, 51, 341, 51, 361);

        // Iron Rod
        this.addResource('iron_rod', 'Iron Rod:', 25, 399, 51, 381, 51, 401);

        // Screws
        this.addResource('screws', 'Screws:', 25, 439, 51, 421, 51, 441);

        // Wire
        this.addResource('wire', 'Wire:', 25, 479, 51, 461, 51, 481);

        // Cable
        this.addResource('cable', 'Cable:', 25, 519, 51, 501, 51, 521);
    }

    // Helper function to add a resource (image, name, and count text)
    private addResource(
        key: string, name: string, imgX: number, imgY: number, nameX: number, nameY: number, countX: number, countY: number
    ) {
        const resourceIcon = this.add.image(imgX, imgY, key).setScale(2);
        const resourceName = this.add.text(nameX, nameY, name, { fontSize: '16px' });
        this.inventory[key].textObject = this.add.text(countX, countY, `${this.inventory[key].count}`, { fontSize: '16px' });
    }

    // Method to update the inventory counts (can be called from other scenes)
    updateInventoryDisplay() {
        for (let item in this.inventory) {
            if (this.inventory[item].textObject) {
                this.inventory[item].textObject!.setText(`${this.inventory[item].count}`);
            }
        }
    }

    // Example method to add resources (this can be triggered from other scenes)
    addToInventory(resource: string, amount: number): void {
        if (this.inventory[resource]) {
            this.inventory[resource].count += amount;
            this.inventory[resource].textObject!.setText(`${this.inventory[resource].count}`);
        }
    }

    // Example method to deduct resources (this can be triggered from other scenes)
    deductFromInventory(resource: string, amount: number): boolean {
        if (this.inventory[resource] && this.inventory[resource].count >= amount) {
            this.inventory[resource].count -= amount;
            this.inventory[resource].textObject!.setText(`${this.inventory[resource].count}`);
            return true;
        }
        return false;
    }
}