import React,{useState} from 'react';
import './Notes.css';
function Notes() {
  const [notes, setNotes] = useState([]);
//   const[desc, setDesc] = useState('')
const[currentTitle, setCurrentTitle] = useState('');
  const [currentNote, setCurrentNote] = useState('');

  const addNote = () => {
    if (currentNote.trim() && currentTitle.trim() !== '') {
      setNotes([...notes, currentNote]);
      setCurrentNote('')// after it will null;
      // setCurrentTitle('')// after it will
    }
  };
//  
  function Update(event)
  {
   
   return(
    <div>
        

    </div>
   ) 
  }
  function Delete(index)
  {
    // setNotes((notes) => notes.filter((_, i) => i !== index));   fffdfdf
  }
 
  return (
    <div className="App">
      <h1>Notes App</h1>
      <div className="note-container">
        <div className="note-form">
            <label className="title">Title</label>
        <input
            value={currentNote}
            onChange={(event) => setCurrentNote(event.target.value)}
            placeholder="Enter your note title..."
          /><br></br>
          <label className="description">Description</label>
          <textarea
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            placeholder="Enter your note description..."
          /><br></br>
          <button className='submit' onClick={addNote}>Add Note</button>
        </div>
        <div className="note-list">
          
          <h2>My Notes</h2>
         
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note} <button onClick={Update()}>Update</button>
               <button onRemove={Delete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notes;

