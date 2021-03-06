import React from "react";
import { Layout } from "../../components";
import ReactMarkdown from "react-markdown";
import {
  InstallContents,
  packageJSON,
  webpackConfigJS,
  electronTS,
} from "./CodeContents";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { CodeBlock } from "../../components";
const title: string = "React + Webpack + Electron + (Typescript)";

export const Chapter1 = () => {
  return (
    <Layout title={title}>
      <ReactMarkdown source={InstallContents} />

      <CodeBlock
        comment="electron-react-app/webpack.config.js"
        language="javascript"
      >
        {packageJSON}
      </CodeBlock>

      <CodeBlock
        comment="electron-react-app/webpack.config.js"
        language="javascript"
      >
        {webpackConfigJS}
      </CodeBlock>


      <CodeBlock
        comment="src/main.js"
        language="javascript"
      >
          {electronTS}
      </CodeBlock>
    </Layout>
  );
};
