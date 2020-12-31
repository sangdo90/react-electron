export const IntroMd = `
## Recoil 개요
Recoil은 Context API 기반으로 구현되었으며  **함수형 컴포넌트에서만** 사용 가능  
Recoil 대부분 훅(Hooks)로 구현되어있어 Hooks를 사용하는 사람들에게는 익숙함  
Recoil을 시작하기 위해서는 애플리케이션을 \`RecoilRoot\`로 감싸고, 데이터를 \`atom\`이라는 단위로 선언하여  
\`useState\` 대신 \`useRecoilState\`로 대체해서 사용한다

### Installation
~~~bash
npm install recoil 
~~~
또는 
~~~bash
yarn add recoil
~~~
`;

export const RecoilRootMd = `## RecoilRoot
\`Recoil\` state를 사용하기 위해서는 부모트리(ex Root)에 \`RecoilRoot\`를 선언 
~~~tsx
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
~~~`;

export const AtomMd = `
## Atom  
Recoil의 단위 데이터이며 컴포넌트가 구독할 수 있는 React state.  
\`atom\`의 값을 변경하면 해당 \`atom\`을 구독하고 있는 컴포넌트들이 모두 다시 렌더링 됨    
\`atom\`을 생성하기 위해서는 고유한 키(key)와 default 값을 설정해야 함  
default의 값은 정적인 값, 함수 또는 비동기 함수(추후 지원)가 될 수 있음  

~~~typescript
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
~~~  
`;

export const UseRecoilStateMd = `
## UseRecoilState
\`atom\`의 값을 구독하여 업데이트 할 수 있는 hook. \`useState\`와 동일한 방식으로 사용 가능


~~~tsx
const [text, setText] = useRecoilState(textState);
~~~  


### useSetRecoilState
- setter 함수만 반환
~~~tsx
const setText = useSetRecoilState(textState); // 상태 설정 함수만 사용
~~~

### useRecoilValue
- setter setter 함수 없이 atom의 값만 반환
~~~tsx
const text = useRecoilValue(textState); // 값만 불러올 경우 
~~~`;



export const SelectorMd = `
## Selector
동기적 또는 비동기적으로 상태를 변환하여 데이터를 받거나 저장  
실제 스토어에 저장되고 스토어에서 가져오는 데이터는 \`Atom\`기반이지만,  
가공된 데이터를 받거나 저장할때는 Selector를 사용  

selector 함수에 고유한 키(key), 게터(get), 세터(set)을 전달하여 작성  
key, get은 필수 set은 옵셔널

~~~tsx
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});
~~~
`;


export const TodoDemoMd = `
-----
# Recoil TODO LIST 예제  
`;

export const TodoRootMd = `
### ./src/app/index.tsx
~~~tsx
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
~~~
`;


export const RootRecoilMd = `
### ./src/app/index.tsx
~~~tsx
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
~~~
`;


export const TodoFormMd = `
### ./src/app/compoents/Todo/TodoForm.tsx
~~~tsx
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
~~~
`;

export const TodoItemMd = `
### ./src/app/compoents/Todo/TodoItem.tsx
~~~tsx
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
~~~`;

export const TodoListMd = `
### ./src/app/compoents/Todo/TodoList.tsx
~~~tsx
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
~~~
`;


export const TodoAtomMd = `
### ./src/app/store/todo.ts
~~~typescript
import { atom } from "recoil";

export interface Todo {
  id: number;
  content: string;
}

export const todoStore = atom<Todo[]>({
  key: "todo",
  default: [],
});
~~~
`;
