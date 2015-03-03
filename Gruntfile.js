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
        'console-log-div.js',
        'test/index.html',
        'test/existing.html',
        'bower_components/es5-shim/es5-shim.js'
      ]
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('deploy', ['gh-pages']);
};
