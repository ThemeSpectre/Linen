module.exports = function(grunt) {

    grunt.initConfig({
        paths: {
            scss: './scss',
            css: './css'
        },
        buildType: 'Build',
        pkg: grunt.file.readJSON('package.json'),
        archive_name: 'linen',

        clean: {
            pre: ['dist/', 'build/'],
            post: ['<%= archive_name %>.zip']
        },

        compress: {
            main: {
                options: {
                    archive: '<%= archive_name %>.zip'
                },
                expand: true,
                cwd: 'dist/',
                src: ['**/*'],
                dest: ''
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, src: ['css/**'], dest: 'dist/'},
                    {expand: true, src: ['fonts/**'], dest: 'dist/'},
                    {expand: true, src: ['images/**'], dest: 'dist/'},
                    {expand: true, src: ['js/**'], dest: 'dist/'},
                    {expand: true, src: ['partials/**'], dest: 'dist/'},
                    {expand: true, src: ['scss/**'], dest: 'dist/'},
                    {expand: true, src: ['*', '!.gitignore', '!.DS_Store'], dest: 'dist/'},
                ]
            },
            archive: {
                files: [
                    {expand: true, src: [global['name'] + '.zip'], dest: 'build/'}
                ]
            }
        },

        sass: {
            admin: {
                options : {
                    // Only enable sourcemaps if you have Sass 3.3 installed.
                    // sourcemap: true
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

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass:admin']);
    grunt.registerTask('bundle', ['clean:pre', 'copy:main', 'compress', 'copy:archive', 'clean:post']);
};
