import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Layout, CodeBlock } from "../../components";
import { RecoilMd } from "./RecoilContents";
import TodoList from "../../components/Todo/TodoList";
import TodoForm from "../../components/Todo/TodoForm";
import {
  TodoFormCode,
  TodoItemCode,
  TodoListCode,
  AtomCode,
  RecoilRootCode,
} from "./RecoilContents";

const title: string = "Recoil";

const Demo = styled.div`
  width: 100%;
  height: 400px;
  border: solid 2px;
`;

const demo = `
## Demo
`;

export const Recoil = () => {
  return (
    <Layout title={title}>
      <ReactMarkdown source={RecoilMd} />

      <CodeBlock comment="./src/app/index.tsx" language="tsx">
        {RecoilRootCode}
      </CodeBlock>

      <CodeBlock comment="./src/app/store/todo.ts" language="typescript">
        {AtomCode}
      </CodeBlock>

      <CodeBlock comment="./src/app/compoents/Todo/TodoItem.tsx" language="tsx">
        {TodoItemCode}
      </CodeBlock>

      <CodeBlock comment="./src/app/compoents/Todo/TodoList.tsx" language="tsx">
        {TodoListCode}
      </CodeBlock>

      <CodeBlock comment="./src/app/compoents/Todo/TodoForm.tsx" language="tsx">
        {TodoFormCode}
      </CodeBlock>

      <ReactMarkdown source={demo} />
      <Demo>
        <TodoForm />
        <TodoList />
      </Demo>
    </Layout>
  );
};
