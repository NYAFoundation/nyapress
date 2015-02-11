var fs = require('fs');
var path = require('path');

var wantedDirs = [
    'pages',
    'widgets',
    'static',
    'static/sctipts',
    'static/styles',
    'static/files',
    'static/imgs',

];

var Create = function Create(dir) {
    if (dir === undefined) {
        dir = './'
    }
    dir = path.resolve(dir);
    console.log('Ready to create project in', dir);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    for (var i=0; i<wantedDirs.length;i++) {
        var p = path.join(dir, wantedDirs[i]);
        var pr = path.resolve(p);
        if (!fs.existsSync(pr)) {
            fs.mkdirSync(pr);
        }
        console.log(path.resolve(p));
    }
}

module.exports = Create;