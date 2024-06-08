import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Display(){
    const[mydata,setData]=React.useState([]);
    React.useEffect(()=>{
        getData();
    },[])

    const getData =()=>{
        axios.get()
        .then(res=>{
            console.log(res.data);
        }).catch((error)=>{
            alert("Error Ocurred:"+error);
            console.log(error)
        })
    }
    const deleteData =(id)=>{
        .then((result)=>{
            if(result.isConfirmed){
                var myform=new FormData();
                myform.append('todo_id',id);
                axios.post()
                .then((res)=>{
                    console.log(res.data)
                    getData();
                }).catch((error)=>{
                    alert("Error Ocurred:"+error);
                    console.log(error)
                })
            }
        });
    }
    return(
        <>
            <h3>Display</h3>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata &&
                        mydata.length ? (mydata.map((values,i)=>
                            <>
                                <tr key={i+1}>
                                    <td key={values.todo_id}>{i+1}</td>
                                    <td>{values.todo_title}</td>
                                    <td>{values.todo_details}</td>
                                    <td>{values.created_at}</td>
                                    <td>
                                        <Link to={'/Edit/' +values.todo_id}>Edit</Link> |
                                        <Link to={'/show/'+values.todo_id}>Show</Link>  |
                                        <input type="button" onClick={()=>deleteData(values.todo_id)} value='X'/>
                                    </td>
                                </tr>
                            </> 
                        )):"No Record Found"}
                </tbody>
            </table>
        </>
    );
}