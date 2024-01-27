import axios from "axios";
import './TodoItem.css';
import { DateTime } from "luxon";

export default function ToDoItem({ listData, fetchTodosCallback}) {
    
    const handleClickDelete = (id) => {
        // ID item
        console.log('DELETE - ListId:', id);
        // MAKE Axios Call
        //deleteCreature(id)
        axios.delete(`/api/todo/${listData.id}`)
          .then((response) => {
            fetchTodosCallback();
          })
          .catch((err) => {
            console.error('ERROR:', err);
          });
      };

    const handleCheckboxChange = () => {

      const newCompletedStatus = !listData.completed;

      // Make Axios Call to update status
      axios.put(`/api/todo/${listData.id}`, { completed: newCompletedStatus })
        .then((response) => {
          fetchTodosCallback();
        })
        .catch((err) => {
          console.error('ERROR:', err);
        });
    };  

    //Generic format testing
    //const dt = DateTime.local();
    // console.log(dt.toFormat('MM-dd-yyyy'));
    
    return (
        <>
        <div className="form-input">
            <input type="checkbox" checked={listData.completed} onChange={handleCheckboxChange}></input>
            <p>{listData.item}</p>
            <p>{DateTime.fromISO(listData.due).toFormat('MM-dd-yyyy')}</p>
            <p>{listData.notes}</p>
            <button
            onClick={(event) => {
            event.preventDefault();
            handleClickDelete(listData.id);
          }}>Delete</button>
        </div>
        </>

    )
}