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
        dest: '../hosts/www/js',
        ext: '.js'
      }
    },
    watch: {
      babel: {
        files: 'react/**/*.jsx',
        tasks: ['newer:babel']
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ['babel', 'watch']);

};