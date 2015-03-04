/*global module:false*/
module.exports = function (grunt) {
  var files = ['console-log-div.js'];

  grunt.initConfig({

    'gh-pages': {
      options: {
        base: '.'
      },
      src: [
        'README.md',
        'step-0/*'
      ]
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('deploy', ['gh-pages']);
};
