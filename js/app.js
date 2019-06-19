"use strict";
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	this.x = x;
	this.y = y;
	this.speed = speed;
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};
var touch = 0;
var score1 = document.getElementById("score");
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x = this.x + this.speed * dt;
	if (this.x > 500) {
		this.x = 0;
		this.speed = 100 + Math.floor(Math.random() * 400);
	}
	if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 80 && player.y + 80 > this.y) {
		player.x = 200;
		player.y = 400;
		touch = touch + 1;
		if (touch == 30) {
			alert("Game over. Start again");
			player.x = 200;
			player.y = 400;
			score = 0;
      score1.innerHTML = score;
			touch = 0;
		}
	}
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Fighter {
	constructor(x, y, sprite) {
		this.sprite = 'images/char-cat-girl.png';
		this.y = y;
		this.x = x;
	}
}
Fighter.prototype.update = function(dt) {}
Fighter.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var item = new Enemy(-40, 60, 150);
var item1 = new Enemy(120, 143, 150);
var item2 = new Enemy(-90, 226, 150);
allEnemies.push(item, item1, item2);
var player = new Fighter(200, 400);
var score = 0;
// Code for the movement of the player
Fighter.prototype.handleInput = function(key) {
	if (key == 'left') {
		if (this.x >= 0) this.x = this.x - 101;
	}
	if (key == 'right') {
		if (this.x < 303) this.x = this.x + 101;
	}
	if (key == 'up') {
		if (this.y >= 60) this.y = this.y - 83;
		if (this.y < 60) {
			setTimeout(() => {
				this.x = 200;
				this.y = 400;
				score = score + 1;
				score1.innerHTML = score;
				if (score == 2) {
					this.sprite = 'images/char-boy.png';
					document.getElementById("img2").style.visibility = "visible";
					document.getElementById("img1").style.opacity = "0.5";
					document.getElementById("img2").style.opacity = "1.0";
				}
				if (score == 4) {
					this.sprite = 'images/char-horn-girl.png';
					document.getElementById("img3").style.visibility = "visible";
					document.getElementById("img1").style.opacity = "0.5";
					document.getElementById("img2").style.opacity = "0.5";
					document.getElementById("img3").style.opacity = "1.0";
				}
				if (score == 6) {
					this.sprite = 'images/char-pink-girl.png';
					document.getElementById("img4").style.visibility = "visible";
					document.getElementById("img1").style.opacity = "0.5";
					document.getElementById("img2").style.opacity = "0.5";
					document.getElementById("img3").style.opacity = "0.5";
					document.getElementById("img4").style.opacity = "1.0";
				}
				if (score == 8) {
					this.sprite = 'images/char-princess-girl.png';
					document.getElementById("img5").style.visibility = "visible";
					document.getElementById("img1").style.opacity = "0.5";
					document.getElementById("img2").style.opacity = "0.5";
					document.getElementById("img3").style.opacity = "0.5";
					document.getElementById("img4").style.opacity = "0.5";
					document.getElementById("img5").style.opacity = "1.0";
				}
			}, 80)
		}
	}
	if (key == 'down') {
		if (this.y < 380) this.y = this.y + 83;
	}
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});
