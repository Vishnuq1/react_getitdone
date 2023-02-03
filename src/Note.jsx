import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note=(props)=>{
    
    return(
<div className="note">
<h1>{props.title}</h1>
<br />
<p>{props.content}</p>
<button className="btn">
<DeleteIcon className="deleteicon"/>

</button>
</div>

    );
}

export default Note;