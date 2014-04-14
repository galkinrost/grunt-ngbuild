GRUNT-NGBUILD
=========

Installation
----------
```sh
npm install grunt-ng-build
```
Usage
----------
```javascript
module.exports = function (grunt) {

    grunt.initConfig({
        ngbuild: {
            build: {
                src: ['app.js'],
                dest: 'build/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-build');

    grunt.registerTask('default', ['ngbuild']);

};
```
