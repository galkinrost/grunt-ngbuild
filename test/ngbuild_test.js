var fs = require('fs');
var ngbuild= require('ngbuild');

describe('grunt-ngbuild', function(){
    it('should build app', function(){
        var actual = ngbuild.buildSync({
            content:fs.readFileSync('test/app/app.js'),
            src:'test/app/app.js'
        });
        var expected = fs.readFileSync('test/expected/app.js').toString();
        actual.should.equal(expected);
    });
});