export const RootCode = `
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

`;

export const ReduxTodoFormCode = `
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
`;

export const ReduxTodoListCode = `
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
`;

export const ReduxTodoItemCode = `
import React from "react";

interface Props {
  content: string;
  onRemove(): void;
}

const TodoItem = ({ content, onRemove }: Props) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{content}</span>
      <span onClick={onRemove}>❌</span>
    </div>
  );
};

export default TodoItem;
`;

export const ConfigureStoreCode = `
import modules, { StoreState } from "./modules";
import { createStore, Store } from "redux";

export default function configureStore(): Store<StoreState> {
  const store = createStore(
    modules,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
`;

export const TodoModuleCode = `
export interface TodoItemDataParams {
    id: number;
    text: string;
    done: boolean;
  }
  
  export interface TodoState {
    todoItems: TodoItemDataParams[];
    input: string;
  }
  
  export const CREATE = "todo/CREATE";
  export const REMOVE = "todo/REMOVE";
  export const CHANGE_INPUT = "todo/CHANGE_INPUT";
  
  interface CreateAction {
    type: typeof CREATE;
    payload: TodoItemDataParams;
  }
  
  interface RemoveAction {
    type: typeof REMOVE;
    meta: {
      id: number;
    };
  }
  
  interface ChangeInputAction {
    type: typeof CHANGE_INPUT;
    meta: {
      input: string;
    };
  }
  
  export type TodoActionTypes = CreateAction | RemoveAction | ChangeInputAction;
  
  // actions
  
  let autoId = 0;
  
  function create(text: string) {
    return {
      type: CREATE,
      payload: {
        id: autoId++,
        text: text,
        done: false,
      },
    };
  }
  
  function remove(id: number) {
    return {
      type: REMOVE,
      meta: {
        id,
      },
    };
  }
  
  function changeInput(input: string) {
    return {
      type: CHANGE_INPUT,
      meta: {
        input,
      },
    };
  }
  
  export const actionCreators = {
    create,
    remove,
    changeInput,
  };
  
  // reducers
  
  const initialState: TodoState = {
    todoItems: [],
    input: "",
  };
  
  export function todoReducer(
    state = initialState,
    action: TodoActionTypes
  ): TodoState {
    switch (action.type) {
      case CREATE:
        return {
          input: "",
          todoItems: [...state.todoItems, action.payload],
        };
      case REMOVE:
        return {
          ...state,
          todoItems: state.todoItems.filter((todo) => todo.id !== action.meta.id),
        };
      case CHANGE_INPUT:
        return {
          ...state,
          input: action.meta.input,
        };
      default:
        return state;
    }
  }
  `;

export const CombineStoreCode = `
import { combineReducers } from "redux";
import { TodoState, todoReducer as todos } from "./todo";

export interface StoreState {
  todos: TodoState;
}

export default combineReducers<StoreState>({
  todos,
});
`;

export const TodoContainerCode = `
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

`;
