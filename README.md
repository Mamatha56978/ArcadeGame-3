# Classic Arcade Game Clone Project
 I learned how to use prototype method. This is very interesting game. This is completely different from the games I had played ever.  I enjoyed a lot while playing this game.
 I had learned JavaScript better while developing this game.

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## I have followed the below steps to develop the Arcade Game

1. I had downloaded the skeleton of the project from the GitHub link which was given by the Udacity https://github.com/udacity/frontend-nanodegree-arcade-game.
2. Then I extracted the downloaded zip file.  
3. I'd opened the `index.html` in browser to test the code.
4. After that I had found an empty page with few errors in the console.
5. Then I rectified them with `allEnemies[]` and `Fighter` class with functions called `update()` and `render()` and fixed the position of the player.
6. Then you can see the canvas with a sprite and the enemies are bugs.
7. Then I provided the definition for the `handleInput()` function for the movement of the player.
8. render() function is for placing the sprite position on the canvas.
9. update() function is for updating the player position.
10. handleInput() function is used to handle the inputs provided by the user.
11. The inputs are:
   + left arrow : It is used for moving the player towards the left side on x-axis. This key will not work if the player moves towards the left most place

   + right arrow : It is used for moving the player towards the right side on x-axis. This key will not work if the player moves towards the right most place

   + up arrow : It is used for moving the player upward direction on y-axis. If the player moves towards the top most place he will come back to initial position.

   + down arrow : It is used for moving the player downward direction  on y-axis. This key will not work if the player moves to the down most place
   You can start playing game by moving the sprite using arrow keys.
12. Then I provided the code for the movement of bugs with random speed using `Math.random()` function and provided definition for `update()` and `render()` functions in `Enemy` class.
13. If the player reaches the water block by using arrow keys, he will gain one point.
14. If the player touches the bug, he will come to initial position.
15. To give the score for the player, I have used `span` tag.
16. If his score increases for two times then the player character changes.
17. If the player touches the bug for 30 times, he will get an alert to start his game again and he will loose all his score. To intimate this to player I have used an `alert()` function.

## How to play the arcade game locally ?
1. Please open the root file(`index.html`) with your favorite browser.
2. Run the player using arrow keys from the keyboard(`left`, `right`, `up`, `down`)
3. Make the player to touch the water block without touching the enemies(bugs)
4. If player touches the bug, he will return to initial position.
5. If the player touches the water block, score is incremented by one.
6. If score increases by two times then the player sprite changes automatically.
7. If the player touches bug for 30 times, then the player gets an alert to play again and he looses all his score.
