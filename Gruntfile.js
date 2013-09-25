"use strict";
var LIVERELOAD_PORT = 35729;
var lrSnippet = require("connect-livereload")({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require("path").resolve(dir));
};


module.exports = function (grunt) {
    
  // show elapsed time at the end
  require("time-grunt")(grunt);
  // load all grunt tasks
  require("load-grunt-tasks")(grunt);
  
  grunt.initConfig({
    watch: {
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          "app/*.html",
          "app/scripts/**/*.js",
          "app/styles/**/*.css"
        ]
      }
    },
    
    open: {
      server: {
        path: "http://localhost:<%= connect.options.port %>"
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: "0.0.0.0"
      },
      liveload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, "app")
            ];
          }
        }
      }
    },
    
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: [
        "Gruntfile.js",
        "app/scripts/**/*.js"
      ]
    }
  });
  
  grunt.registerTask("default", ["jshint", "connect:liveload", "open", "watch"]);
  
  
};