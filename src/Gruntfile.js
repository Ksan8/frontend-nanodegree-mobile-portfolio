module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.

    uglify: {
      my_target: {
        files: {
          'js/perfmatters.min.js': ['js/perfmatters.js']
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    responsive_images: {
      dev: {
        options: {
          // this tells it to use ImageMagick
          engine: 'im',
          sizes: [{
            name: 'xs',
            width: 100,
            quality: 50
          }]
        },

        files: [{
          expand: true,
          // src: ['*.{jpg,png}'],
          src: ['pizzeria.jpg'],
          // cwd: 'img/img_orig/',
          cwd: 'views/images/img_orig/',
          // dest: 'img'
          dest: 'views/images'
        }]
      }
    }

  });

  // These plugins provide necessary tasks.

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['uglify']);
// 'watch', 'jshint', 'qunit', 'concat', 'uglify', 'responsive_images', 'cssmin'
};
