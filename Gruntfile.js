module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/*.js' // All JS in the libs folder
                ],
                dest: 'js/production.js',
            },
            css: {
                src: [
                    'css/*.css' // All JS in the libs folder
                ],
                dest: 'css/production.css',
            }
        },
        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'js/production.min.js'
            }
        },
        cssmin: {
              target: {
                files: [{
                  expand: true,
                  cwd: 'css/',
                  src: ['production.css', '!*.min.css'],
                  dest: 'css/',
                  ext: '.min.css'
                }]
              }
            }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','cssmin']);

};