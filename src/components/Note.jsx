import '../index.css'
import { useState } from 'react';
function Note(props) {
  const[IsEditing , setIsEditing]= useState(false);
  const [updatedContent , setUpdatedContent] = useState(props.content);
  const [UpdateTitle , setUpdateTitle] = useState(props.title);
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit(){
    setIsEditing(!IsEditing);
  }
  
  function handleSave(){
    setIsEditing(false);
  }

  return (
    <div className="note">
      <h1>
      {IsEditing ? (<input type = "text" value={UpdateTitle} onChange = {
        (e)=>{
          setUpdateTitle(e.target.value);

        }
           }
        />) :<h1> {UpdateTitle} </h1>}
       
      </h1>
      <p>

      {IsEditing ? (
        <input type="text" value={updatedContent} onChange=
        {  
          (e) => 
             setUpdatedContent(e.target.value)       
             } />
      )  : (
        <p >{updatedContent}</p> 
      )}
      </p>
      <button onClick={handleClick}>DELETE</button>
      <button onClick = {handleEdit}> {(IsEditing) ? "SAVE" : "EDIT"}</button>
    </div>
  );
}

export default Note;
