const fs = require('fs');
const chalk = require('chalk');



//////////////////////////////////////////////////
/////////////////  ADD NOTE  /////////////////////
//////////////////////////////////////////////////
// Set func addNote to take title and body as params
const addNote = (title, body) => { 
    // Set variable to be equal to the current notes
    // in the notes.json file. ARRAY
    const notes = loadNotes();

    // Create an array of any duplicate note titles
    // Filter through each note in notes
    // Add any note that has a duplicate title
    //const duplicateNotes = notes.filter((note) => note.title === title);

    const duplicateNote = notes.find((note) => note.title === title);

    // IF the current note being added is not a duplicate, do some stuff
    // Add the current note to the notes array
    // Run saveNotes func with the updated notes array
    // ELSE tell user the note is a duplicate
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken...'));
    }
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////




//////////////////////////////////////////////////
///////////////    REMOVE NOTE    ////////////////
//////////////////////////////////////////////////
// Set func removeNote to take title as param
const removeNote = (title) => {
    // Set variable to be equal to the current notes
    // in the notes.json file. ARRAY
    const notes = loadNotes();

    // Create an array to hold notes that are not being deleted
    // Keep any note where the note title is not equal
    // to the title of the note being deleted
    const notesToKeep = notes.filter((note) => note.title !== title)

    // If the notes array is longer than the notesToKeep array,
    // do some stuff. This means a note needs to be deleted
    // Run the saveNotes func with the updated array
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep); 
    } else {
        console.log(chalk.red.inverse('No note found...'))
    }
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////





//////////////////////////////////////////////////
/////////////   LIST NOTES   /////////////////////
//////////////////////////////////////////////////
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your notes...'));

    notes.forEach((note) => {
        console.log(note.title);
    })
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////




//////////////////////////////////////////////////
/////////////   READ NOTE   //////////////////////
//////////////////////////////////////////////////
    const readNote = (title) => {
        const notes = loadNotes();

        const noteToRead = notes.find((note) => note.title === title);

        if(noteToRead) {
            console.log(chalk.inverse.blue(noteToRead.title));
            console.log(noteToRead.body);
        } else {
            console.log(chalk.inverse.red("ERROR! Note not found."));
        }
    }
//////////////////////////////////////////////////
//////////////////////////////////////////////////





//////////////////////////////////////////////////
////////////   SAVE NOTES   //////////////////////
//////////////////////////////////////////////////
// Set func saveNotes to take notes as param
const saveNotes = (notes) => {
    // Take notes object and convert to a JSON string
    // Save JSON string data in notes.json file
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////





//////////////////////////////////////////////////
/////////////////   LOAD NOTES   /////////////////
//////////////////////////////////////////////////
// Set func loadNotes to take no params
const loadNotes = () => {
    // Try to run the return. If it fails run catch
    try {
        // Set variable to read file notes.json
        // Take the read file data and turn into a string
        // Return the string data as an object
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        // If the file is completely empty,
        // create an empty array
        return []
    }
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////



//////////////////////////////////////////////////
/////////////   EXPORT FUNCTIONS   ///////////////
//////////////////////////////////////////////////
// Export the functions:
// addNote
// removeNote
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////
