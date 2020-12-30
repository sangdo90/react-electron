import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout, CodeBlock } from "../../../components";
import styled from "styled-components";
import {
  ReduxTodoFormCode,
  ReduxTodoItemCode,
  ReduxTodoListCode,
  ConfigureStoreCode,
  TodoContainerCode,
  TodoModuleCode,
  CombineStoreCode,
  RootCode
} from "./ReduxContents";
import TodoListContainer from "../../../container/TodoListContainer";

const Demo = styled.div`
  width: 100%;
  height: 400px;
  border: solid 2px;
`;

const installMD = `
## install

\`yarn add redux react-redux @types/react-redux\`

or 

\`npm install  redux react-redux @types/react-redux\`
`;

const title: string = "Redux";

export const Redux = () => {
  return (
    <Layout title={title}>
      {title}
      <ReactMarkdown source={installMD} />

      <CodeBlock comment="./src/app/components/TodoRedux/TodoForm.tsx" language="tsx">
        {ReduxTodoFormCode}
      </CodeBlock>

      <CodeBlock comment="./src/app/components/TodoRedux/TodoItem.tsx" language="tsx">
        {ReduxTodoItemCode}
      </CodeBlock>

      <CodeBlock comment="./src/app/components/TodoRedux/TodoList.tsx" language="tsx">
        {ReduxTodoListCode}
      </CodeBlock>


      <CodeBlock comment="./src/app/store/modules/todo.ts" language="typescript">
        {TodoModuleCode}
      </CodeBlock>

      <CodeBlock comment="./src/app/store/modules/index.ts" language="typescript">
        {CombineStoreCode}
      </CodeBlock>


      <CodeBlock comment="./src/app/container/TodoListContainer.tsx" language="typescript">
        {TodoContainerCode}
      </CodeBlock>

      <CodeBlock comment="./src/app/store/configureStore.ts" language="typescript">
        {ConfigureStoreCode}
      </CodeBlock>

      <CodeBlock comment="./src/index.ts" language="tsx">
        {RootCode}
      </CodeBlock>

      <Demo>
        <TodoListContainer />
      </Demo>
    </Layout>
  );
};
