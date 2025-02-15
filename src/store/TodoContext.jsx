import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([]);

const TodoContextProvider = ({children})=>{

  const todoReducer = (currentItems, action) => {
    let newItems = currentItems;
    if (action.type === 'NEW_ITEMS') {
       newItems = [
        {
          todoName: action.payload.itemName,
          todoDate: action.payload.itemDate,
        },
        ...currentItems,
      ];
    } else if (action.type === 'DELETE_ITEMS') {
      newItems = currentItems.filter((items) => items.todoName !== action.payload.itemName);
    }
    return newItems
  }

  const [todoItems, dispatcheItems] = useReducer(todoReducer, [])


  const addHandler = (name, date) => {
    const newItemsAction = {
      type: 'NEW_ITEMS',
      payload : {
        itemName: name,
        itemDate: date
      }
    }
    dispatcheItems(newItemsAction)
  };

  const deleteHandler = (name) => {
    const deleteItemsAction ={
      type : 'DELETE_ITEMS',
      payload: {
        itemName: name
      }
    }
    dispatcheItems(deleteItemsAction)  
    
  };




    return <TodoItemsContext.Provider value={{
        todoItems: todoItems,
        addHandler: addHandler,
        deleteHandler: deleteHandler
      }}>
        {children}
      </TodoItemsContext.Provider>

}


export default TodoContextProvider;