module.exports = function(grunt){
  
  // All Configs
  grunt.initConfig({

    watch: {
      css: {
        files: './assets/scss/*.scss',
        tasks: ['sass', 'autoprefixer']
      },

      scripts: {
        files: ['./assets/js/main.js'],
        tasks: ['concat'],
        options: {
          spawn: false
        }
      }
    },
    
    concat: {   
      dist: {
          src: [
              'node_modules/jquery/dist/jquery.min.js',
              './assets/js/main.js', // All JS in the libs folder
          ],
          dest: './assets/js/production.js',
      }
    },

    uglify: {
      build: {
          src: './assets/js/production.js',
          dest: './assets/js/production.min.js'
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          loadPath: './node_modules/bootstrap-sass/assets/stylesheets/'
        },
        files: {                         // Dictionary of files
          './assets/main.css': './assets/scss/style.scss',       // 'destination': 'source'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['> 5%', 'ie 8', 'ie 9']
      },      
      dist: {
        files: {
          './assets/style.css': './assets/main.css'
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
            src : [
              './assets/style.css',
              './assets/js/production.js',
              'index.html',
            ]
        },
        options: {
          watchTask: true,
          server: {
              baseDir: "./"
          }
        }
      }
    },

  });

  // Tell to use plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-browser-sync');

  // Register task
  grunt.registerTask('default', ['browserSync', 'watch']);
};
