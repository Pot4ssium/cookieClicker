export default class MainMenu extends Phaser.Scene {
    private score: number = 0;
    private clickPower: number = 1;
    private autoClickPower: number = 0; // Track the number of auto-clicks
    private upgradeCost: number = 10;
    private autoClickCost: number = 10; // Cost to buy auto-clicks
    private autoClickSpeed: number = 1000; // Delay between auto-clicks (in milliseconds)
    private scoreText: Phaser.GameObjects.Text;
    private cookie: Phaser.GameObjects.Image;
    private autoClickCookie: Phaser.GameObjects.Image; // Small auto-click cookie
    private upgradeButton: Phaser.GameObjects.Text;
    private autoClickButton: Phaser.GameObjects.Text;
    private upgradeAutoClickPowerButton: Phaser.GameObjects.Text;
    private upgradeAutoClickSpeedButton: Phaser.GameObjects.Text;
    private autoClickEvent: Phaser.Time.TimerEvent;
    private isAnimating: boolean = false; // Track if the cookie is currently animating

    constructor() {
        super("MainMenu");
    }

    editorCreate(): void {
        // background_1
        const background_1 = this.add.image(1000, 500, "background_1");
        background_1.scaleX = 1;
        background_1.scaleY = 1;

        // Main cookie (big one)
        this.cookie = this.add.image(720, 440, "cookie");
        this.cookie.scaleX = 0.35;
        this.cookie.scaleY = 0.35;

        // Smaller auto-click cookie
        this.autoClickCookie = this.add.image(700, 640, "cookie");
		this.autoClickCookie.setVisible(false);
        this.autoClickCookie.scaleX = 0.1;
        this.autoClickCookie.scaleY = 0.1;

        // Add click event to the main cookie
        this.cookie.setInteractive();
        this.cookie.on('pointerdown', () => {
            this.incrementScore();
            this.animateCookie(); // Trigger shared animation for the big cookie
        });

        // Add score text to the scene
        this.scoreText = this.add.text(50, 50, `Sus Score: ${this.score}`, {
            fontSize: '32px',
            color: '#ffffff'
        });

        // Add upgrade button
        this.upgradeButton = this.add.text(50, 100, `Upgrade Click (Cost: ${this.upgradeCost})`, {
            fontSize: '28px',
            color: '#00ff00',
            backgroundColor: '#000000'
        });
        this.upgradeButton.setInteractive();
        this.upgradeButton.on('pointerdown', () => {
            this.upgradeClickPower();
        });

        // Add auto-click button
        this.autoClickButton = this.add.text(50, 150, `Buy Auto-Click (Cost: ${this.autoClickCost})`, {
            fontSize: '28px',
            color: '#00ff00',
            backgroundColor: '#000000'
        });
        this.autoClickButton.setInteractive();
        this.autoClickButton.on('pointerdown', () => {
            this.buyAutoClick();
        });

        // Create the auto-click event (but don't start it yet)
        this.autoClickEvent = this.time.addEvent({
            delay: this.autoClickSpeed, // Auto-click delay (1 second by default)
            callback: this.autoClick,
            callbackScope: this,
            loop: true,
            paused: true // Initially paused until auto-clicks are purchased
        });

        // Initialize buttons for upgrading auto-click features (but keep them hidden for now)
        this.upgradeAutoClickPowerButton = this.add.text(50, 150, `Upgrade Auto-Click Power (Cost: 1)`, {
            fontSize: '28px',
            color: '#00ff00',
            backgroundColor: '#000000'
        });
        this.upgradeAutoClickPowerButton.setInteractive();
        this.upgradeAutoClickPowerButton.on('pointerdown', () => {
            this.upgradeAutoClickPower();
        });
        this.upgradeAutoClickPowerButton.setVisible(false); // Hidden until auto-clicker is purchased

        this.upgradeAutoClickSpeedButton = this.add.text(50, 200, `Upgrade Auto-Click Speed (Cost: 1)`, {
            fontSize: '28px',
            color: '#00ff00',
            backgroundColor: '#000000'
        });
        this.upgradeAutoClickSpeedButton.setInteractive();
        this.upgradeAutoClickSpeedButton.on('pointerdown', () => {
            this.upgradeAutoClickSpeed();
        });
        this.upgradeAutoClickSpeedButton.setVisible(false); // Hidden until auto-clicker is purchased

        this.events.emit("scene-awake");
    }

    incrementScore(): void {
        // Increment the score by the current click power
        this.score += this.clickPower;

        // Update the score text
        this.scoreText.setText(`Sus Score: ${this.score}`);
    }

    animateCookie(): void {
        // Ensure animations don't overlap
        if (this.isAnimating) return;

        this.isAnimating = true;

        // Create a tween to shrink and grow the main cookie
        this.tweens.add({
            targets: this.cookie,
            scaleX: 0.2,
            scaleY: 0.2,
            duration: 30,
            yoyo: true,
            ease: 'Power1',
            onComplete: () => {
                this.isAnimating = false; // Reset animation flag when done
            }
        });
    }

    animateAutoClickCookie(): void {
        // Create a tween for the smaller auto-click cookie to "jump" when an auto-click occurs
        this.tweens.add({
            targets: this.autoClickCookie,
            y: this.autoClickCookie.y - 20, // Move up a little (jump)
            duration: 100,
            yoyo: true, // Return to original position
            ease: 'Power1',
        });

        // Trigger the main cookie animation as well
        this.animateCookie();
    }

    upgradeClickPower(): void {
        // Check if the player has enough points to upgrade
        if (this.score >= this.upgradeCost) {
            // Deduct the cost from the score
            this.score -= this.upgradeCost;

            // Increase the click power
            this.clickPower += 1;

            // Update the score and upgrade cost
            this.upgradeCost += 10; // You can adjust how the cost scales

            // Update the score and upgrade button text
            this.scoreText.setText(`Sus Score: ${this.score}`);
            this.upgradeButton.setText(`Upgrade Click (Cost: ${this.upgradeCost})`);
        }
    }

    buyAutoClick(): void {
        // Check if the player has enough points to buy auto-clicks
        if (this.score >= this.autoClickCost) {
            // Deduct the cost from the score
            this.score -= this.autoClickCost;

			this.autoClickCookie.setVisible(true);

            // Increase the auto-click power
            this.autoClickPower += 1;

            // Start the auto-click timer if it's not already running
            if (this.autoClickEvent.paused) {
                this.autoClickEvent.paused = false; // Start the timer
            }

            // Hide the Buy Auto-Click button
            this.autoClickButton.setVisible(false);

            // Show the upgrade buttons for auto-click power and speed
            this.upgradeAutoClickPowerButton.setVisible(true);
            this.upgradeAutoClickSpeedButton.setVisible(true);

            // Update the score text
            this.scoreText.setText(`Sus Score: ${this.score}`);
        }
    }

    autoClick(): void {
        // Increment the score by the auto-click power every second
        if (this.autoClickPower > 0) {
            this.score += this.autoClickPower;

            // Update the score text
            this.scoreText.setText(`Sus Score: ${this.score}`);

            // Animate the auto-click cookie
            this.animateAutoClickCookie();
        }
    }

    upgradeAutoClickPower(): void {
        const upgradeCost = 1; // Cost to upgrade auto-click power

        // Check if the player has enough points
        if (this.score >= upgradeCost) {
            // Deduct the cost
            this.score -= upgradeCost;

            // Increase the auto-click power
            this.autoClickPower += 1;

            // Update the score text
            this.scoreText.setText(`Sus Score: ${this.score}`);
        }
    }

    upgradeAutoClickSpeed(): void {
        const upgradeCost = 1; // Cost to upgrade auto-click speed

        // Check if the player has enough points
        if (this.score >= upgradeCost) {
            // Deduct the cost
            this.score -= upgradeCost;

            // Decrease the auto-click delay (make it faster)
            if (this.autoClickSpeed > 200) { // Set a minimum delay
                this.autoClickSpeed -= 100;
                this.autoClickEvent.delay = this.autoClickSpeed; // Update the auto-click event delay
            }

            // Update the score text
            this.scoreText.setText(`Sus Score: ${this.score}`);
        }
    }

    create() {
        this.editorCreate();
    }

    update(time: number, delta: number): void {
        // Rotate the main cookie slowly in the center
        if (this.cookie) {
            this.cookie.rotation += 0.005;
        }
    }
}