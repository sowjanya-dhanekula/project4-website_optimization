module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
  		concat: {
    	   	dist: {
      			src: ['css/print.css', 'css/style.css'],
      			dest: 'css/styles_concat.css',
    		},
  		},
  		cssmin: {
		  	target: {
		   		 files: [{
				      expand: true,
				      cwd: 'css',
				      src: ['styles_concat.css'],
				      dest: 'build/css',
				      ext: '.min.css'
				     
			    }]
			  },

		},

		 htmlmin: {                                     // Task 
			    dist: {                                      // Target 
			      options: {                                 // Target options 
			        removeComments: true,
			        collapseWhitespace: true
			      },

			      files: {                                   // Dictionary of files 
			        'build/views/pizza.html': 'part2_web_optimization/views/pizza.html'
			        }
			    }
			  },

			 imagemin: {
					dynamic: {                         // Another target 
					      
					      files: [{
						        expand: true,                  // Enable dynamic expansion 
						        cwd: 'views/images/',                   // Src matches are relative to this path 
						        src: ['**/*.{png,jpg,gif,jpeg}'],   // Actual patterns to match 
						        dest: 'build/views/images/'                  // Destination path prefix 
						      }]
					    }
				 },

			uglify: {
				my_target: {
					options: {
        				beautify: true
     				 },

					files: {
					        'build/views/js/main.js': ['part2_web_optimization/views/js/main.js']
					      }
					    }
					},

			jshint: {
			    options: {
				      curly: true,
				      eqeqeq: true,
				      eqnull: true,
				      browser: true,
				      globals: {
				        jQuery: true
				      },
				    },
			    uses_defaults: ['dir1/**/*.js', 'dir2/**/*.js'],
			    with_overrides: {
				      options: {
				        curly: false,
				        undef: true,
				      },
				      files: {
				        src: ['dir3/**/*.js', 'dir4/**/*.js']
				      },
				    }
			  }


		  		
});

	grunt.registerTask('default',['cssmin','htmlmin','imagemin','uglify']);
	
}

