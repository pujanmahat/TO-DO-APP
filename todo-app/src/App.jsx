import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    console.log(`name added:${itemName} Date:${itemDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem =(todoItemName) =>{
      const newTodoItems=todoItems.filter((item)=>item.name !== todoItemName)
      setTodoItems(newTodoItems)
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems}
      onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
