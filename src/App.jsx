import React, { useReducer } from "react";
import Logo from "./components/Logo";
import Container from "./Components/Container";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Message from "./Components/Message";
import TodoContextProvider, { TodoItemsContext } from "./store/TodoContext";
import useCount from "./customHook";
import ExpensiveCalc from "./ExpensiveCalc";

const App = () => {
  return (
    <Container>
      <Logo />

      {/* <div className="d-flex">
        <h1>{count}</h1>
        <span className="fs-4 mx-2 btn-primary btn" onClick={increment}>+</span>
        <span className="fs-4 mx-2 btn-danger btn" onClick={decrement}>-</span>
        <span className="fs-4 mx-2 btn-success btn" onClick={reset}>reset</span>
      </div>
      <br/>
      <br/> */}
      <TodoContextProvider>
        <AddTodo />
        <Message />
        <TodoItems />
      </TodoContextProvider>
    </Container>
  );
};

export default App;
