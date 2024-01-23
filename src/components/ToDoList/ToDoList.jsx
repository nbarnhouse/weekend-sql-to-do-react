//Need GET function in this file to pull in the list data
import ToDoItem from '../ToDoItem/ToDoItem';

import './ToDoList.css';

export default function ToDoList({ toDoItemList, fetchTodosCallback }) {

  //handling submit goes in this file


    return (
        <>
        <h2>To Do List</h2>
        <div className="todo-list-container">
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
    </div>
    </>
    )
}

