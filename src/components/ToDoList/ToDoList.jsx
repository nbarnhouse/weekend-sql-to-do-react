//Need GET function in this file to pull in the list data
import ToDoItem from '../ToDoItem/ToDoItem';

import './ToDoList.css';

export default function ToDoList({ toDoItemList, fetchTodosCallback }) {

  //handling submit goes in this file


    return (
        <>
        <h2>To Do List</h2>

        <ul>
        {toDoItemList.map((listData) => {
        return (
          <ToDoItem
            key={listData.id}
            listData={listData}
            fetchTodosCallback={fetchTodosCallback}
          />
        );
      })}
    </ul>
    </>
    )
}




{/* <ul>
{toDoItemList.map((item, id) => {
return (
<div key={id}>
    <input type="checkbox"></input>
    <p>{item.item}</p>
    <p>{item.due}</p>
    <p>{item.notes}</p>
    <button>Delete</button>
</div>

);
})}
</ul> */}