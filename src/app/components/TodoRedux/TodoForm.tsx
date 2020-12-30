import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemDataParams } from "../../store/modules/todo";

interface Props {
  input: string;
  onCreate(): void;
  onChange(e: any): void;
}

const TodoForm = ({ input, onChange, onCreate }: Props) => {
  return (
    <div>
      <h1>TODO LIST (REDUX)</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLElement>) => {
          e.preventDefault();
          onCreate();
        }}
      >
        <input onChange={onChange} value={input} />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default TodoForm;
