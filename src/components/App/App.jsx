import { useState, useEffect } from "react"

import './App.css';
import ToDoList from "../ToDoList/ToDoList";
import TodoForm from "../TodoForm/TodoForm";
import Header from "../Header/Header";
import axios from "axios";
import { DateTime } from "luxon";
import StarRating from "../StarRating/StarRating";

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
      <StarRating />
      <TodoForm fetchTodosCallback={fetchToDos}/>
      <ToDoList toDoItemList={toDoItemList}
      fetchTodosCallback={fetchToDos}/>
    </div>
  );

}


// //npm install react-router-dom to get a version use @ and the number 5 or 5.1.3
// // import { HashRouter as Router, Route, Link } from 'react-router-dom';
// //At top of file, import all these pages 

// //this block of text goes in the return area
// //Component Pages go Inside

// <main>
//   <Router>

// <ul>
//   <li>
//     <Link to="/" >Home</Link>
//   </li>
//   <li>
//     <Link to="/about">About</Link>
//   </li>
//   <li>
//     <Link t ="/contact">Contact</Link>
//   </li>
// </ul>

//   <Route path="/" exact>
//     <Home />
//   </Route>
//   <Route path="/about">
//     <About />
//   </Route>
//   <Route path="/contact">
//     <Contact />
//   </Route>
//   </Router>
// </main>


// //Need to register the route