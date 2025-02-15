import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoContext'

const Message = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    todoItems.length == 0 && <h1 className='my-5 text-danger text-center'>Empty List</h1>
  )
}

export default Message