import { useEffect, useState } from "react"
import './App.css';

export default function App () {
  const [item, setItem] = useState('');




  function checkItem(id, completed) {
    setItem(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteItem(id) {
    setItem(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return (
    <form className="form">
    <div className="row">
      <h1>To Do App Checklist</h1>
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
      <button>Add</button>

      <h2>To Do List</h2>
      <input type="checkbox" id="checkbox"></input>
      <h3>Do Laundry</h3>
      <button>Delete</button>
      
    </div>
    </form>

  );

}
