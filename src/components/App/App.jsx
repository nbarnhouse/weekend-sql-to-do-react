import { useState, useEffect } from "react"

import './App.css';
import ToDoList from "../ToDoList/ToDoList";
import TodoForm from "../TodoForm/TodoForm";
import Header from "../Header/Header";
import axios from "axios";
import { DateTime } from "luxon";

export default function App () {
  let [toDoItemList, settoDoItemList] = useState([]);

  //initial load of component
  useEffect(() => {
    // body of effect
    console.log('Hello');
    // api call
    fetchToDos();
    }, []);


  const fetchToDos = () => {
    // TODO: fetch the list of items from the server
    return axios.get('/api/todo')
    .then((response) => {
      console.log('SERVER DATA:', response);
      settoDoItemList(response.data);
    })
    // failure
    .catch((err) => {
      console.error('ERROR:', err);
    });
  };

  // const dt = DateTime.local();
  // console.log(dt.toFormat('MM-dd-yyyy'));

  return (
    <div className="textArea">
      <Header />
      {/* <TodoForm fetchTodosCallback={fetchToDos}/>
      <ToDoList toDoItemList={toDoItemList}
      fetchTodosCallback={fetchToDos}/> */}
    </div>
  );

}
