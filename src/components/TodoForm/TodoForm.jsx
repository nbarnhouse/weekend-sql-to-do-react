//Form input fields go in this file but the 

import { useState } from "react";
import axios from "axios";
import './TodoForm.css';

export default function TodoForm({ fetchTodosCallback }) {

  const [todoItemName, setTodoItemName] = useState('');
  const [todoItemDate, setTodoItemDate] = useState('');
  const [todoItemNotes, setTodoItemNotes] = useState('');


  //need to add handle submit function
  const todoHandleSubmit = (evt) => {
    evt.preventDefault();

    console.log(todoItemDate);
        
       let itemToAdd = {
        item: todoItemName,
        due: todoItemDate,
        notes: todoItemNotes
      };

      // TODO: create POST request to add this new item to the database

       return axios.post('/api/todo', itemToAdd)
      .then(() => {
        fetchTodosCallback();
        setTodoItemName('');
        setTodoItemDate('');
        setTodoItemNotes('');
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

    return (
      <>
        <div className="formHeading">
          <h2>Add Items</h2>
        </div>
       <form onSubmit={todoHandleSubmit}>
          <label htmlFor="item-input">New Item:</label>
          <input id="item-input" onChange={e => setTodoItemName(e.target.value)} 
          value={todoItemName}/>
          <label htmlFor="item-date">Due Date:</label>
          <input type="date" id="item-date" onChange={e => setTodoItemDate(e.target.value)} 
          value={todoItemDate}/>
          <label htmlFor="notes-input">Notes:</label>
          <input id="notes-input" onChange={e => setTodoItemNotes(e.target.value)} 
          value={todoItemNotes}/>
          <button type="submit">Add</button>
        </form>
    </>   

      )
    };