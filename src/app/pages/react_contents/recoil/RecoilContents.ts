export const RecoilRootCode =`
import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import Routes from "./routes";

const App = () => {
  useEffect(() => {
    document.title = \`Electron + React\`;
  }, []);

  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
};
export default App;
`;


export const AtomCode = `
import { atom } from "recoil";

export interface Todo {
  id: number;
  content: string;
}

export const todoStore = atom<Todo[]>({
  key: "todo",
  default: [],
});
`;
export const TodoItemCode = `
import React from "react";
import { useSetRecoilState } from "recoil";
import { Todo, todoStore } from "../../store/todo";

interface Props {
  data: Todo;
}

const TodoItem = ({ data }: Props) => {
  const setTodo = useSetRecoilState(todoStore);

  const removeItem = () => {
    setTodo((todo) => {
      const newTodo = [...todo];
      const index = todo.findIndex((v) => v.id === data.id);
      if (index !== -1) {
        newTodo.splice(index, 1);
      }
      return newTodo;
    });
  };

  return (
    <div>
      <input type="checkbox" />
      <span>{data.content}</span>
      <span onClick={removeItem}>❌</span>
    </div>
  );
};

export default TodoItem;
`;
export const TodoListCode = `
import React from "react";
import { useRecoilValue } from "recoil";

import { todoStore } from "../../store/todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todo = useRecoilValue(todoStore);

  return (
    <section>
      {todo.map((v) => (
        <TodoItem data={v} key={\`todoData_\${v.id}\`} />
      ))}
    </section>
  );
};

export default TodoList;
`;

export const TodoFormCode = `
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { todoStore } from "../../store/todo";

const TodoForm = () => {
  const setTodo = useSetRecoilState(todoStore);
  const [content, setContent] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContent("");
    setTodo((todo) => {
      const id = todo.length ? todo[todo.length - 1].id + 1 : 0;
      return [...todo, { id, content }];
    });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChangeContent}
        value={content}
        placeholder="내용"
      />
      <button type="submit">입력</button>
    </form>
  );
};

export default TodoForm;
`;


export const RecoilMd =`
---
title: Getting Started
---

## Create React App

Recoil is a state management library for React, so you need to have React installed and running to use Recoil. The easiest and recommended way for bootstrapping a React application is to use [Create React App](https://github.com/facebook/create-react-app#creating-an-app):

\`\`\`shell
npx create-react-app my-app
\`\`\`

> [\`npx\`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f).

For more ways to install Create React App, see the [official documentation](https://github.com/facebook/create-react-app#creating-an-app).

## Installation

The Recoil package lives in <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a>. To install the latest stable version, run the following command:

\`\`\`shell
npm install recoil
\`\`\`

Or if you're using <a href="https://classic.yarnpkg.com/en/docs/install/" target="_blank">yarn</a>:

\`\`\`shell
yarn add recoil
\`\`\`

## RecoilRoot

Components that use recoil state need \`RecoilRoot\` to appear somewhere in the parent tree. A good place to put this is in your root component:

\`\`\`jsx
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
\`\`\`

We'll implement the \`CharacterCounter\` component in the following section.

## Atom

An **atom** represents a piece of **state**. Atoms can be read from and written to from any component. Components that read the value of an atom are implicitly **subscribed** to that atom, so any atom updates will result in a re-render of all components subscribed to that atom:

\`\`\`javascript
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
\`\`\`

Components that need to read from _and_ write to an atom should use \`useRecoilState()\` as shown below:

\`\`\`jsx
function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
\`\`\`

## Selector

A **selector** represents a piece of **derived state**. Derived state is a **transformation** of state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way:

\`\`\`jsx
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});
\`\`\`

We can use the \`useRecoilValue()\` hook to read the value of \`charCountState\`:

\`\`\`jsx
function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
\`\`\`
`;

