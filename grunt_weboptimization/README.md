## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>



														Website Performance Optimization portfolio project
														--------------------------------------------------

	Website optimization is the process of systematically improving the performance of our website to meet our business objectives.  Optimizing the page speed for index.html to 90% page score and optimizing the frames per second in pizza.html.												

Getting started:
----------------

	For page speed optimization we need to install the following:
	1. Installed NodeJS.
	2. Installed npm(node package manager) packages.
	3. Installed Apache web server.
	4. Installed ngrok.
	5. Installed Grunt.


Optimization of page speed for index.html:
------------------------------------------

	step 1: All the project requied files are dowloaded from github.
	step 2: All the CSS files are minified using the GRUNT plugin "grunt-contrib-cssmin".
	step 3: All the JS files are minified using the GRUNT plugin 'grunt-contrib-uglify'.
	step 4: All the Images  are minified using the GRUNT plugin 'grunt-contrib-imagemin'.
	step 5: The HTML files are minified using the GRUNT plugin grunt-contrib-htmlmin.
	step 6: The 'pizza.png' image was compressed using online image compression tool.
	step 7: Inline css and async are used to avoid render blocking.
	step 8: In Apache webserver compression was enabled in 'httpd.conf' by the following:

			LoadModule deflate_module modules/mod_deflate.so


			SetOutputFilter DEFLATE
			AddOutputFilterByType DEFLATE text/text text/html text/plain text/xml text/css text/javascript application/x-javascript application/javascript application/json
			

	step 9: In Apache webserver browser caching was enabled in 'http.conf' by the following:

			LoadModule headers_module modules/mod_headers.so 
			LoadModule expires_module modules/mod_expires.so


			ExpiresActive On
			ExpiresByType image/jpg "access 1 year"
			ExpiresByType image/jpeg "access 1 year"
			ExpiresByType image/gif "access 1 year"
			ExpiresByType image/png "access 1 year"
			ExpiresByType text/css "access 1 month"
			ExpiresByType text/html "access 1 month"
			ExpiresByType application/pdf "access 1 month"
			ExpiresByType text/x-javascript "access 1 month"
			ExpiresByType application/x-shockwave-flash "access 1 month"
			ExpiresByType image/x-icon "access 1 year"
			ExpiresDefault "access 1 month"


	step 10: Inline the fonts.googleapis.com at the end of the body tag to avoid render blocking. 

			<style>
		    @import "//fonts.googleapis.com/css?family=Open+Sans:400,700"
		    </style>

	step 11: Inlined all of the CSS into the head of the document and added the media="print" attribute to the external style sheet link for print styles.            	    

    After optimization the page speed score of index.html:
    ------------------------------------------------------

 		The screen shots are attached in a seperate folder grunt_weboptimization/Screen shots




    Optimization of frames per second in pizza.html:
    ------------------------------------------------

  In the main.js the following changes are done to maintain the 60FPS frame rate:

    step 1: The background sliding pizza elements are reduced from 200 to 35 which sufficiently fills the complete screen. The "document.querySelector" was replaced  with  "document.getElementById" for the precise selection. 

		// Generates the sliding pizzas when the page loads.
				document.addEventListener('DOMContentLoaded', function() {
				  var cols = 8;
				  var s = 256;
				  for (var i = 0; i < 35; i++) {
				    var elem = document.createElement('img');
				    elem.className = 'mover';
				    elem.src = "images/pizza.png";
				    elem.style.height = "100px";
				    elem.style.width = "73.333px";
				    elem.basicLeft = (i % cols) * s;
				    elem.style.top = (Math.floor(i / cols) * s) + 'px';				    
				    document.getElementById("movingPizzas1").appendChild(elem);
				  } 

	step 2: Optimized the loops contained in the updatePositions function and the onDOMContentLoaded event handler. For improving efficiency the calculation which utilizes the scrollTop method was moved outside of the loop.


			function updatePositions() {
				  frame++;
				  window.performance.mark("mark_start_frame");
				  var items = document.getElementsByClassName('mover');				  
				  var cachedLength = items.length;
				  var constArray = [];


				  for (var i = 0; i < 5; i++) {				    
				    constArray[i] = Math.sin((document.body.scrollTop/1250) + i);
				  }
				    

				   for (var i = 0; i < cachedLength; i++) { 
				      var phase = constArray[i % 5];				     
				      items[i].style.left = items[i].basicLeft + 100 * phase + 'px';   
				   }

				  
				  // Super easy to create custom metrics.
				  window.performance.mark("mark_end_frame");
				  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");

				  if (frame % 10 === 0) {
				    var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
				    logAverageFrame(timesToUpdatePosition);
				  }
			}

	step 3: For optimized Animations the  updatePositions function was added as a parameter to the window.requestAnimationFrame method in the scroll event listener which optimizes concurrent animations together into a single reflow and repaint cycle.

			 	window.addEventListener('scroll', function() {
				   window.requestAnimationFrame(updatePositions);
				});


	step 4: The changePizzaSizes function was optimized by moving the determineDx function call inside the changePizzaSizes function out of the loop and created a new variable to hold all of the .randomPizzaContainer elements in the document and looped through the elements to apply the new width value.


				function changePizzaSizes(size) {
			    i = 0;
			    var elements = document.getElementsByClassName("randomPizzaContainer");
			     var dx = determineDx(document.getElementsByClassName("randomPizzaContainer")[i], size);
			      var newwidth = (elements[i].offsetWidth + dx) + 'px';
			    for (var i = 0; i < elements.length; i++) {
			              
			      elements[i].style.width = newwidth;
			    }
			  }			


	 After optimization of pizza.html:
    ------------------------------------------------------

 		The screen shots are attached in a seperate folder grunt_weboptimization/Screen shots