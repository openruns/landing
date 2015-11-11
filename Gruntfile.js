'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['sass/**/*'],
        tasks: ['sass']
      },
      css: {
        files: ['styles.css'],
        tasks: ['autoprefixer', 'cssmin']
      },
      html: {
        files: [
        'index.src.html',
        'about.src.html',
        'show.src.html'
        ],
        tasks: ['htmlmin']
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'styles.css': 'sass/styles.scss'
        }
      }
    },
    autoprefixer: {
      css: {
        src: 'styles.css',
        dest: 'styles.prefixed.css'
      }
    },
    cssmin: {
      combine: {
        files: {
          'styles.min.css': ['styles.prefixed.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          useShortDoctype: true,
          removeRedundantAttributes: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true
        },
        files: {
          'index.html': 'index.src.html',
          'about/index.html': 'about.src.html',
          'show/index.html': 'show.src.html'
        }
      },
    },
    uglify: {
      minjs: {
        files: {
          'scripts.min.js': [
            'javascripts/jquery-2.1.4.js',
            'javascripts/bootstrap.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['autoprefixer', 'uglify', 'cssmin', 'htmlmin', 'watch', 'sass']);
};
