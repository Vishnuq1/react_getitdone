import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import index from './index.css';
import { valueToPercent } from '@mui/base';

const App=()=>{

    const [addItem,setAddItem]=useState([]);
   const addNote=(note)=>{
    //alert('I am clicked');
    setAddItem((prevData)=>{

        return[...prevData]
    });
    console.log(note);
   }

const onDelete=(id)=>{
    setAddItem((oldData)=>
    oldData.filter((currdata,indx)=>{
        return indx !== id;
    })
    );
}


    return(
        <>
     
        <Header />
        <CreateNote  passNote={addNote} />
        

        {addItem.map((value, index)=>{
            return <Note 
            key={index}
            id={index}
            title={value.title} 
            content={value.content}
            />
        } )}
        <Footer />
       
        </>
    );
}

export default App;