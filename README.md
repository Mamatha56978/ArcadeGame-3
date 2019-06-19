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
2. Then I extracted the downloaded zip file from which I came to understand that many modifications would happen in `app.js`.
3. After that I have rectified few errors from which I got the canvas.
4. Then I got the bugs and player by rectifying few more errors.
5. After that I have created a class called `Fighter` with functions `update` and `render` and fixed the position of the player.
6. Then I provided the definition for the `handleInput` function for the moment of the player.
7. After that I have adjusted the bugs initial position by providing the values in the array called `allEnemies[]`.
8. Then I provided the code for the moment of bugs with random speed using `Math.random()` function.
9. If the player touches the bug, he will come to initial position.
10. If the player touches the bug for 30 times, he will get an alert to start his game again and he will loose all his score.
11. I have used `alert()` function to give an alert for the player.
12. To give the score for the player, I have used `span` tag.
13. If his score increases for two times then the player character changes.
14. If the player reaches the water block without touching the bugs then he will gain a point.
