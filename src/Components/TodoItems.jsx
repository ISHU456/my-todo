import React, { useContext } from 'react'
import TodoItem from './TodoItem';
import { TodoItemsContext } from '../store/TodoContext';

const TodoItems = ({deleteHandler}) => {

  const {todoItems} = useContext(TodoItemsContext);
  
  return (
    <>
    {todoItems.map((items) => {
      return <TodoItem 
        key={items.todoName} 
        name={items.todoName} 
        date={items.todoDate}
        deleteHandler={deleteHandler}
       />
    })}
    </>
  )
}

export default TodoItems;