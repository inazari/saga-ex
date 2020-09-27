import React, {useState} from "react";
import {useSelector} from "react-redux";

const NewNoteInput = ({addNote}) => {
    const [note, setNote] = useState('')

    const notes = useSelector(
        state => state.notes
    )

    const onAddNoteClick = () => {
        addNote(note);
        setNote('');
    }

    const updateNote = (e) =>{
        setNote(e.target.value);
    }

    return (<>
        <input
            onChange={updateNote}
            value={note}
            type="text"
            name='note'
            placeholder='Note'
        />
        <button onClick={onAddNoteClick} type={"button"}>Add note</button>
        <button onClick={()=>{
            console.log(notes);
        }} type={"button"}>load note</button>
        </>)
}
export default NewNoteInput;
