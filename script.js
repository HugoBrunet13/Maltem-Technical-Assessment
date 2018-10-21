/**
 * Function addNote(): allow user to add a new note
 */
function addNote() {
	//create new div 'note'
	var newNote = document.createElement('div');
	newNote.className="note";
	newNote.innerHTML ='<div contenteditable="true" class="titleNote">Title</div> \
						<div contenteditable="true" class="contentNote">Add your content here</div> \
						<button class="close">Delete</button>';
    //remove note
	var close = newNote.childNodes[4]; //get element 'close'
	close.addEventListener('click', function(){
        newNote.outerHTML = "";
		//newNote.remove();
	});
	//add new div 'note' to DOM
	document.getElementById('notes').appendChild(newNote);
}

/**
 * Function saveNote(): allow user to save his notes on a JSON string
 */
function saveNotes() {
	var notes = [];
	var note = { title : "", content : ""};
	var allData = document.getElementById("notes").childNodes; //get all data regarding notes on the DOM

	for (var i = 0 ; i< allData.length; ++i) {
		//modify the note object with current note properties
		note.title = allData[i].children[0].textContent;
		note.content=allData[i].children[1].childNodes[0].data;
		notes.push(note); //push the note object on an array
	}
	//create a JSON string to store all data on one variable
	var notesJson = JSON.stringify(notes);
	console.log("All notes: \n"+notesJson);

	alert("All notes:\n\n"+notesJson+"\n\nNB: All data are stored on a JSON string within a JavaScript variable (open console to see it)");
}

/**
 * Funtion searchNote(): allow user to filter all his notes thanks to the title of the notes
 */
function searchNote() {
	var input, filter, notes, note, title;
	input = document.getElementById("searchBar");
	filter=input.value.toUpperCase();
	notes = document.getElementById("notes");
	note = notes.getElementsByClassName("note");
	for (var i = 0; i < note.length; i++) {
		title = note[i].getElementsByTagName("DIV")[0].textContent;
		if(title){
			if(title.toUpperCase().indexOf(filter)>-1){
				note[i].style.display = "";
			} else{
				note[i].style.display = "none";
			}
		}
	}

}


		