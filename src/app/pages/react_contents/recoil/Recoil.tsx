import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../../components";
import Markdown from "../../../components/markdown/RenderedMarkdown";
import {
  AtomMd,
  RecoilRootMd,
  TodoFormMd,
  TodoListMd,
  UseRecoilStateMd,
  IntroMd,
  SelectorMd,
  TodoDemoMd,
  RootRecoilMd,
  TodoItemMd,
  TodoAtomMd,
  TodoRootMd
} from "./RecoilMd";
import TodoList from "../../../components/Todo/TodoList";
import TodoForm from "../../../components/Todo/TodoForm";

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
      <Markdown content={IntroMd} />
      <Markdown content={RecoilRootMd} />
      <Markdown content={AtomMd} />
      <Markdown content={UseRecoilStateMd} />
      <Markdown content={SelectorMd} />


      <Markdown content={TodoDemoMd} />
      <Markdown content={TodoRootMd} />
      <Markdown content={TodoAtomMd} />
      <Markdown content={RootRecoilMd} />
      <Markdown content={TodoFormMd} />
      <Markdown content={TodoItemMd} />
      <Markdown content={TodoListMd} />

      {/* Recoil TODO Demo */}
      <ReactMarkdown source={demo} />
      <Demo>
        <TodoForm />
        <TodoList />
      </Demo>
    </Layout>
  );
};
