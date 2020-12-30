import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemDataParams } from "../../store/modules/todo";

interface Props {
  todoItems: TodoItemDataParams[];
  onRemove(id: number): void;
}

const TodoList = ({ todoItems, onRemove }: Props) => {
  const todoItemList = todoItems.map((todo) =>
    todo ? (
      <TodoItem
        key={todo.id}
        onRemove={() => onRemove(todo.id)}
        content={todo.text}
      />
    ) : null
  );

  return (
    <section>
      <ul>{todoItemList}</ul>
    </section>
  );
};

export default TodoList;
