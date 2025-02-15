import { useContext } from "react";
import { FcFullTrash } from "react-icons/fc";
import { TodoItemsContext } from "../store/TodoContext";


const TodoItem = ({name, date}) => {

  const {deleteHandler} = useContext(TodoItemsContext)

  const deleteBtn = () =>{
    deleteHandler(name)
  }
  return (
    <div className="todo-item">
      <div className="todo">{name}</div>
      <div  className="todo">{date}</div>
      <button className="btn btn-dark fs-6" onClick={deleteBtn}><FcFullTrash /></button>
    </div>
  );
};

export default TodoItem;