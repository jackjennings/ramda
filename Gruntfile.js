module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },

    mocha: {
      browser: ['test/**/*.html'],
      options: {
        run: true
      }
    },

    jshint: {
      files: ['gruntfile.js', '*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        evil: true,
        globals: {
          console: true,
          module: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('test', ['jshint', 'mocha']);
  grunt.registerTask('min', ['jshint', 'jasmine', 'uglify']);
};



