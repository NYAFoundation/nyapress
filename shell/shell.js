var nya = require('nya');
var readline = require('readline');
var markdown = require( "markdown" ).markdown;

var Shell = function Shell() {
    var ConsoleIStream = new nya.CustomStream('input');


    var rl = readline.createInterface(process.stdin, process.stdout);

    rl.on('line', function(line) {
        ConsoleIStream.emit(line);
        rl.prompt();
    });

    rl.on('close', function() {
        console.log('\nGoodBye!');
    });


    ConsoleIStream.onValue(function(val) {
        console.log( markdown.toHTML( val ) );
    });


    rl.setPrompt('Nyash>');
    rl.prompt();
}

module.exports = Shell;