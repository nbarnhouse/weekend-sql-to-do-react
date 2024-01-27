//Need GET function in this file to pull in the list data
import ToDoItem from '../ToDoItem/ToDoItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



import './ToDoList.css';

export default function ToDoList({ toDoItemList, fetchTodosCallback }) {

  //handling submit goes in this file


    return (
        <>
        <h2>To Do List</h2>

        {/* <Box>
        <Grid container>
        {toDoItemList.map(listData => (
          <Grid item key={listData.id} xs={12}>
            <ToDoItem 
            listData={listData}
            fetchTodosCallback={fetchTodosCallback}
            />
          </Grid>
        ))}
      </Grid>
      </Box> */}
    </>
  )
}

