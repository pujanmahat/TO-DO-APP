import React from "react";
import TodoItem from "./TodoItem";
import styles  from './TodoItems.module.css'

function TodoItems({ todoItems,onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.date} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
}

export default TodoItems;
