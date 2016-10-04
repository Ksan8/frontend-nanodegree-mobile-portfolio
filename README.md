## Website Performance Optimization portfolio project

The challenge in this project was to optimize an online portfolio for speed, in particular, optimizing the critical rendering path to make the page render as quickly as possible.

Here is the original unoptimized repository: https://github.com/udacity/frontend-nanodegree-mobile-portfolio

###How to View This Page
Go to: https://ksan8.github.io/github.io-frontend-nanodegree-mobile-portfolio/index.html

###Part 1: Optimize PageSpeed Insights score for index.html

####Optimizations:

* used WebFont to speed font loading
* inlined the CSS
* specified media="print" for print.css
* made the Google Analytics scripts asynchronous
* resized and compressed pizzeria image (used Grunt)

###Part 2: Optimize Frames per Second in pizza.html
Directly accessible at: https://ksan8.github.io/github.io-frontend-nanodegree-mobile-portfolio/views/pizza.html

####Optimizations in views/js/main.js:

* used compressed and resized pizza image (images/pizza-large.png); line 382
* used faster DOM selectors throughout (e.g., getElementById instead of querySelector; getElementsByClassName instead of querySelectorAll)
* in changePizzaSizes function:
  * cached element array and dimension calculations outside loop in local variables
* in updatePositions function:
  * created valueArray variable to hold the 5  values needed (calculated in a separate for-loop)
  * cached scrollTop and items.length in variables outside loop
  * used the transform translateX (which is faster) instead of style.left
* moved the creation of the sliding pizzas outside the 'DOMContentLoaded' event listener and into a function named backgroundPizzas
* declared global variable items; line 549
* in backgroundPizzas function:
  * created variables for the width and height of the viewport so that an appropriate number of pizzas (and not too many) could be created
  * adjusted the number of columns (cols) to the width of the viewport + 2
  * created variable totalPizzas to calculate the correct number of pizzas
  * cached pizza elements in the variable movingPizzas outside the for-loop
  * used compressed and resized pizza image (images/pizza-xs.png); line 573
  * used Math.ceil instead of Math.floor; line 579
  * defined items (cached as global variable)
  * used requestAnimationFrame to speed performance of updatePositions function; line 587
* added Paul Irish's requestAnimationFrame polyfill

####Optimizations in views/css/style.css:

* added "backface-visibility: hidden" to mover class; line 36

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
