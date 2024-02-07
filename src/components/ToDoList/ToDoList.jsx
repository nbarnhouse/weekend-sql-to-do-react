import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './ToDoList.css';

export default function ToDoList() {
  const dispatch = useDispatch();
  const elementList = useSelector((state) => state.toDoElement);

  useEffect(() => {
    // body of effect
    console.log('Hello');
    // api call
    renderList();
  }, [dispatch]);

  if (elementList.length === 0) {
    return (
      <p>
        <i>You are all caught up!</i>
      </p>
    );
  }

const renderList = () => {
  // TODO: fetch the list of todo items from the server
  return axios.get('/api/todo')
  .then((response) => {
    dispatch(setToDoElement(response.data));
  })
  // failure
  .catch((err) => {
    console.error('ERROR:', err);
  });
};

  //Need to add GET call back in to pull data from the server

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>To Do List</TableCell>
            {/* Add more table headers if needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {elementList.map((element, itemIndex) => (
            <TableRow key={itemIndex}>
              <TableCell>{element.item}</TableCell>
              <TableCell>{element.due}</TableCell>
              <TableCell>{element.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}