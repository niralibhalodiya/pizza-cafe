import React from 'react';
import axios from 'react';

function Add(){
    const[title,setTitle]=React.useState("");
    const[details,setDetails]=React.useState("");

    const submitValue =(event)=>{
        var myform =new FormData();
        myform.append('todo_title',title);
        myform.append('todo_details',details);
        axios.post("")
        .then(res=>{
            console.log(res)
            if(res.data.flag==="1"){
                alert('Done'+res.data.message)
            }else{
                alert('something went wrong'+res.data.message);
            }
        })
        .catch((error)=>{
            alert("Error Ocurred:"+error);
            console.log(error)
        })
        event.target.reset();
        event.preventDefault();
    }
    return(
        <>
            <h3>Add</h3>
            <form onSubmit={submitValue}>
                Title:<input type="Text" onChange={e=>setTitle(e.target.value)}/>
                Details:<input type="text" onChange={e=>setDetails(e.target.value)}/>
                    <input type="submit"/>
            </form>
        </>
    )
}
export default Add;