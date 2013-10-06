/*global __dirname */

var path = require("path");
var LIVERELOAD_PORT = 35729;
var lrSnippet = require("connect-livereload")({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require("path").resolve(dir));
};


module.exports = function (grunt) {
  "use strict";
    
  // show elapsed time at the end
  require("time-grunt")(grunt);
  // load all grunt tasks
  require("load-grunt-tasks")(grunt);
  
  grunt.initConfig({
    watch: {
      compass: {
        files: ["app/scss/**/*.{scss,sass}"],
        tasks: ["compass:build"]
      },
      scripts: {
        files: ["app/scripts/**/*.js"],
        tasks: ["jshint"]
      },
      handlebars: {
        files: ["app/handlebars/**/*.hbs"],
        tasks: ["handlebars"]
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          "app/*.html",
          "app/scripts/**/*.js",
          "app/css/**/*.css",
          "app/scss/**/*.{scss,sass}"
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
    
    compass: {
      options: {
        sassDir: "app/scss",
        cssDir: "app/css",
        generatedImagesDir: "app/images/generated",
        imagesDir: "app/images",
        javascriptsDir: "app/scripts",
        fontsDir: "app/fonts",
        importPath: "app/bower_components",
        httpImagesPath: "/images",
        httpGeneratedImagesPath: "/images/generated",
        httpFontsPath: "/fonts",
        relativeAssets: false
      },
      build: {
        debugInfo: true
      }
    },
    
    jshint: {
      files: [
        "Gruntfile.js",
        "app/scripts/**/*.js"
      ],
      options: {
        jshintrc: ".jshintrc",
        ignores: ["app/scripts/**/templates/**/*.js"]
      }
    },
    
    clean: {
      tpls: {
        files: [{
          dot: true,
          src: [
            "app/scripts/**/templates/**/*.js"
          ]
        }]
      },
    },
    
    handlebars: {
      compile: {
        options: {
          amd: true,
          namespace: "tpls",
          processName: function (fp) {
            var _t = path.resolve(fp).replace(path.join(__dirname, "app/handlebars/"), ""),
                _a = _t.split(path.sep);
            _a.shift();
            _t = _a.join(path.sep);
            return _t.toLowerCase().replace(/\.hbs$/, "");
          }
        },
        files: {
          "app/scripts/todo/templates/todo.js": "app/handlebars/todo/{,*/}/*.hbs",
          "app/scripts/library/templates/library.js": "app/handlebars/library/{,*/}/*.hbs",
          "app/scripts/gallery/templates/gallery.js": "app/handlebars/gallery/{,*/}/*.hbs"
        }
      }
    }
    
  });
  
  grunt.registerTask("default", ["clean", "compass:build", "jshint", "handlebars", "connect:liveload", "open", "watch"]);
  
  
};