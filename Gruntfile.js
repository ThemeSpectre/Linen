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
                options : {
                    sourcemap: true
                },
                files: {
                    '<%= paths.css %>/style.css': '<%= paths.scss %>/style.scss',
                    '<%= paths.css %>/ie.css': '<%= paths.scss %>/ie.scss'
                }
            }
        },

        watch: {
            sass: {
                files: './scss/**/*.scss',
                tasks: ['sass:admin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass:admin']);
};
