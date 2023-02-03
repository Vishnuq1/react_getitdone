import React, {useState} from 'react';
//import Button from '@mui/icons-material/Button';
import AddIcon from '@mui/icons-material/Add';
import { FileDownload, SettingsRemote } from "@mui/icons-material";

const CreateNote=(props)=>{
const[expand, setExpand]=useState(false);


    const [note, setNote] =useState({
        title: "",
        content: "",
    });



const InputEvent =(event)=>{

   const {name, value}= event.target;

    setNote((prevData)=>{
  
    return{
        ...prevData,
        [name]: value,
    
    };
    


    });
    console.log(note);
}

const addEvent=(props)=>{
props.passNote(note);
setNote({
    title: "",
    content: "",
});
};


const expandIt=()=>{

    setExpand(true);
}

const backtoNormal=()=>{

    setExpand(false);
}
    return(
        <>
        <div className="main_note"   onDoubleClick={backtoNormal}>
        <form>
        {
            expand?
        
        <input type="text" name="title" value={note.title} onChange={InputEvent}   placeholder=" Title" autoComplete="off"/>
        : null}
        <br />
        <textarea rows='' column='' name="content" value={note.content}  onChange={InputEvent}  placeholder=" write a note... " 
        onClick={expandIt}
      
        ></textarea>


        <br />
        {
            expand?
        <button className="btn" onClick={addEvent} >
        <AddIcon  className='plus_sign' />
        </button>
        : null
    }
        </form>
        
        
        </div>
        
        </>
    );
}


export default CreateNote;