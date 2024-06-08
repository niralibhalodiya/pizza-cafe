import { useState } from "react";
import React {useState} from 'react';
import{ListGroup,Form,button} from "react-bootstrap";

const TodoList =()=>{
    const[todos,setTodos]=useState([]);
    const[newTodo,setNewTod]=useState("");

    const addTodo =()=>{
        if(newTodo.trim() !==""){
            setTodos([...todos,newTodo]);
            setNewTodo("");
        }
    };
    const removeTodo =(index)=>{
        const updatedTodos =todos.filter((_,i)=>i!==index);
        setTodos(updatedTodos);
    };

    const editTodo =(index)=>{
        const updatedTodos.todos.filter((_,i)=>i!==index);
        setTodos(updatedTodos);
    }
    return(
        <div className="container">
            <h1>Todo List</h1>
            <form>
                <Form.Group className="Form-group">
                <Form.Control type="text" placeholder="Enter a new todo" value={new todo} onChange={(e)=>setNewTodo(e.target.value)} className="textModify"/>
                <button varint="primary" onClick={addTodo} className="button add todo">Add</button>
                </Form.Group>
                <ListGroup className="list-group mt-3">
                    {todos.map{(todo,index)=>(
                        <ListGroup.Item key={index} className="list-group-item">
                        {todo}
                        <div className="remove-button-container">
                        <button>
                            varint="danger"
                            className="float-right-remove"
                            onClick={()=>removeTodo(index)>}
                        </button>
                        </div>
                    })}
                    <ListGroup.className="list-group mt-3">
                        {todos.map{(todo,index)=>(
                            <ListGroup.Item key={index} className="list-group-item">
                            {todo}
                            <div className="remove-button-container">
                            <button>
                                varint="danger"
                                className="float-right-remove"
                                onClick={()=>editTodo(index)>}
                            </button>
                            </div>
                        )}}
                    </ListGroup.Item>
                </ListGroup.Item>
            </form>
        </div>
    )
}