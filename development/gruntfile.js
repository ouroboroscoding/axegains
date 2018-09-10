module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false,
        presets: ['react']
      },
      files: {
        expand: true,
        src: [ 'react/**/*.jsx' ],
        dest: '../hosts/js',
        ext: '.js'
      }
    },
    sass: {
      options: {
        outputStyle: "compressed",
        sourceMap: false
      },
      dist: {
        files: {
          '../hosts/css/base.min.css':'sass/base.scss'
        }
      }
    },
    watch: {
      babel: {
        files: 'react/**/*.jsx',
        tasks: ['newer:babel']
      },
      sass: {
        files: 'sass/*.scss',
        tasks: ['sass:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel', 'grunt-sass');
  grunt.registerTask('default', ['babel', 'sass', 'watch']);

};