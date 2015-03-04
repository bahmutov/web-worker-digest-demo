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
        'marked.js',
        'index.html',
        'step-0/*',
        'step-1/*'
      ]
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('deploy', ['gh-pages']);
};
