'use strict';

var grunt = require('grunt')
  , fs = require('fs');

exports.clowncar = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(4);

    var actual = grunt.file.read('tmp/default_options/grunt.svg');
    var expected = grunt.file.read('test/expected/default_options/grunt.svg');
    var actualFiles = fs.readdirSync('tmp/default_options');
    var expectedFiles = fs.readdirSync('test/expected/default_options');

    test.equal(actual, expected, 'Have the same SVG structure');
    actualFiles.forEach(function(f, idx){
      test.equal(f, expectedFiles[idx]);
    });

    test.done();
  },
  custom_options: function(test) {
    test.expect(4);

    var actual = grunt.file.read('tmp/custom_options/grunt.svg');
    var expected = grunt.file.read('test/expected/custom_options/grunt.svg');
    var actualFiles = fs.readdirSync('tmp/custom_options');
    var expectedFiles = fs.readdirSync('test/expected/custom_options');

    test.equal(actual, expected, 'Have the same SVG structure');
    actualFiles.forEach(function(f, idx){
      test.equal(f, expectedFiles[idx]);
    });

    test.done();
  }
};
