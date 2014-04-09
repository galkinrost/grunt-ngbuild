var ngbuild = require('ngbuild');

module.exports = function (grunt) {

    grunt.registerMultiTask('ngbuild', 'Build AngularJS scripts', function () {

        grunt.log.writeln('building ' + grunt.log.wordlist(this.files.map(function (file) {
            return file.src;
        })));

        this.files.forEach(function (file) {
            var i=0;
            var contents = file.src
                .map(grunt.file.read)
                .map(function (data) {
                    return ngbuild.buildSync({
                        content: data,
                        src: file.src[i++]
                    });
                });
            grunt.file.write(file.dest, contents);
        });

    });
};
