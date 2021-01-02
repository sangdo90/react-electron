import React from "react";
import TodoList from "../components/TodoRedux/TodoList";
import TodoForm from "../components/TodoRedux/TodoForm";
import { connect } from "react-redux";
import { StoreState } from "../store/modules";
import {
  TodoItemDataParams,
  actionCreators as todosActions,
} from "../store/modules/todo";
import { bindActionCreators } from "redux";

interface Props {
  todoItems: TodoItemDataParams[];
  input: string;
  TodosActions: typeof todosActions;
}

const TodoListContainer = ({ todoItems, input, TodosActions }: Props) => {
  const onCreate = (): void => {
    TodosActions.create(input);
  };
  const onRemove = (id: number): void => {
    TodosActions.remove(id);
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    TodosActions.changeInput(value);
  };

  return (
    <div>
      <TodoForm input={input} onChange={onChange} onCreate={onCreate} />
      <TodoList todoItems={todoItems} onRemove={onRemove} />
    </div>
  );
};

export default connect(
  ({ todos }: StoreState) => ({
    input: todos.input,
    todoItems: todos.todoItems,
  }),
  (dispatch) => ({
    TodosActions: bindActionCreators(todosActions, dispatch),
  })
)(TodoListContainer);
