import axios from "axios";
import './TodoItem.css';

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
    
    return (
        <>
        <div className="form-input">
            <input type="checkbox"></input>
            <p>{listData.item}</p>
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