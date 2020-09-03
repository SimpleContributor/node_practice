const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note...',
    builder: {
        title: {
            describe: 'Title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing out all notes',
    handler() {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Reading a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Reading list...')
        notes.readNote(argv.title);
    }
})

yargs.parse();
//console.log(yargs.argv);