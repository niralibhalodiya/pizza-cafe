import React from 'react'
function App(){
    const[value,setValue]=React.useState('localstorage');

    const setData=()=>{
        setValue('Value is set');
        localStorage.setItem('name','akash');
    }

    const getData=()=>{
        var a=localStorage.getItem('name');
        setValue('Value is:'+a);
    }
    const removeData=()=>{
        localStorage.removeItem('name');
        setValue('Value is Removed');
    }
    return(
        <div>
            <button onClick={setData}>set</button>
            <button onClick={getData}>get</button>
            <button onClick={removeData}>remove</button>
        </div>
    )
}