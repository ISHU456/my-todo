import React, { useContext, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { TodoItemsContext } from "../store/TodoContext";

const AddTodo = () => {
  const { addHandler } = useContext(TodoItemsContext);
  const nameElement = useRef();
  const dateElement = useRef();

  const clickBtnHandler = (e) => {
    e.preventDefault()
    const name = nameElement.current.value;
    const date = dateElement.current.value;
    name.length === 0 ? null : addHandler(name, date);
    nameElement.current.value = "";
    dateElement.current.value = "";
  };
  return (
    <form className="add-todo" onSubmit={clickBtnHandler}>

      <input
        ref={nameElement}
        className="form-control"
        placeholder="Add Todo"
      />
      <input ref={dateElement} type="date" className="form-control" />
      <button type="submit" className="btn-success btn">
        <FaPlus />
      </button>



    </form>
  );
};

export default AddTodo;

// const [name, setName] = useState("");
// const [date, setDate] = useState("");

// const nameHandler = (e)=>{
//   setName(e.target.value)
// }

// const dateHandler = (e) => {
//   setDate(e.target.value)
// }
