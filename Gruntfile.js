/*
 * grunt-ng-build
 * https://github.com/galkinrost/grunt-ngbuild
 *
 * Copyright (c) 2014 galkinrost
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        ngbuild: {
            build: {
                src: ['test/app/app.js'],
                dest: 'test/app/app.build.js'
            }
        },
        mochacli: {
            options: {
                require: ['should'],
                bail: true
            },
            all: ['test/*.js']
        },
        clean: ['test/app/app.build.js']
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-cli');

    grunt.registerTask('test', ['clean', 'ngbuild', 'mochacli']);

    grunt.registerTask('default', ['ngbuild']);

};
