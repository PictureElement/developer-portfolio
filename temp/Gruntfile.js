module.exports = function(grunt) {

  grunt.initConfig({
    // Remove unused CSS
    purifycss: {
      options: {},
      target: {
        src: ['src/index.html', 'src/js/*.js'],
        css: ['src/css/*.css'],
        dest: 'docs/css/purestyles.css'
      },
    },

    // Add vendor-prefixed CSS properties
    autoprefixer: {
      single_file: {
        src: 'docs/css/purestyles.css',
        dest: 'docs/css/purestyles.css'
      }
    },
    
    // Minify CSS (purestyles.css)
    cssmin: {
      t1: {
        files: [{
          expand: true,
          cwd: 'docs/css/',
          src: ['purestyles.css'],
          dest: 'docs/css/',
          ext: '.min.css'
        }]
      }
    },
    
    // Minify JavaScript (site.js)
    uglify: {
      t1: {
        files: [{
          expand: true,
          cwd: 'src/js/',
          src: ['*.js', '!*.min.js'],
          dest: 'docs/js',
          ext: '.min.js'
        }]
      }
    },
    
    // Copy index.html to docs.
    // Copy all the minified javascript files to docs/js.
    copy: {
      t1: {
        expand: true,
        cwd: 'src/',
        src: 'index.html',
        dest: 'docs/'
      },
      t2: {
        expand: true,
        cwd: 'src/js/',
        src: '*.min.js',
        dest: 'docs/js/'
      }
    },
    
    // Extract & inline critical-path CSS from docs/index.html
    critical: {
      t1: {
        options: {
          base: 'docs/',
          css: [
            'docs/css/purestyles.min.css'
          ],
          width: 1920,
          height: 1080
        },
        src: 'docs/index.html',
        dest: 'docs/index.html'
      }
    },
    
    // Minify docs/index.html
    htmlmin: {                                    
      t1: {                                     
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'docs/',
          src: 'index.html',
          dest: 'docs/'
        }]
      }
    }

  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
