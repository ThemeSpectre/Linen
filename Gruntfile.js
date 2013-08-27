module.exports = function(grunt) {

    grunt.initConfig({
        paths: {
            scss: './scss',
            css: './css'
        },
        buildType: 'Build',
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            admin: {
                files: {
                    '<%= paths.css %>/style.css': '<%= paths.scss %>/style.scss',
                    '<%= paths.css %>/ie.css': '<%= paths.scss %>/ie.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass:admin']);
};