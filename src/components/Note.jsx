import '../index.css'
import { useState } from 'react';
function Note(props) {
  const[IsEditing , setIsEditing]= useState(false);
  const [updatedContent , setUpdatedContent] = useState(props.content);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit(){
    setIsEditing(true);
  }
  
  function handleSave(){
    setIsEditing(false);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      {IsEditing ? (
        <input type="text" value={updatedContent} onChange=
        {  
          (e) => 
             setUpdatedContent(e.target.value)       
             } onBlur={handleSave} />
      )  : (
        <p onClick={handleEdit}>{updatedContent}</p> // Allow editing when the paragraph is clicked
      )}
      <p></p>
      <button onClick={handleClick}>DELETE</button>
      <button onClick = {handleEdit}> {(IsEditing) ? "SAVE" : "EDIT"}</button>
    </div>
  );
}

export default Note;
