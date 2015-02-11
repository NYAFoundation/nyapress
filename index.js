var shell = require('./shell/shell.js');
var create = require('./create/create.js');

var GetOpt = require('node-getopt');

getopt = new GetOpt([
  ['s' , ''                    , 'short option.'],
  [''  , 'long'                , 'long option.'],
  ['S' , 'short-with-arg=ARG'  , 'option with argument'],
  ['L' , 'long-with-arg=ARG'   , 'long option with argument'],
  [''  , 'color[=COLOR]'       , 'COLOR is optional'],
  ['m' , 'multi-with-arg=ARG+' , 'multiple option with argument'],
  [''  , 'no-comment'],
  ['h' , 'help'                , 'display this help'],
  ['v' , 'version'             , 'show version']
])
    .bindHelp();
var opt = getopt.parseSystem();

if (opt.argv.length == 0) {
    getopt.showHelp();
    process.exit(0);
}

var availableCommands = [
    'shell',
    'build',
    'show',
    'create'
];

var command = opt.argv[0];

if (availableCommands.indexOf(command) === -1) {
    console.log('Available Commands:');
    for (var i=0;i<availableCommands.length;i++) {
        console.log('    ' + availableCommands[i]);
    }
    process.exit(0);
}

switch (command) {
    case 'shell':
        shell();
        break;
    case 'create':
        create(opt.argv[1]);
        break;
}