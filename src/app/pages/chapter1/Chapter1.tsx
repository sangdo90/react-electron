import React from "react";
import { Layout } from "../../components";
import ReactMarkdown from "react-markdown";
import {
  packageJSON,
  webpackConfigJS,
  electronTS
} from './CodeContents'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const title: string = "React + Webpack + Electron + (Typescript)";

const InstallContents = `
# 1. Install

\`\`\`
mkdir electron-react-app
cd electron-react-app
npm init
npm install electron --save-dev
\`\`\`


### electron-react-app/package.json
\`\`\`json
{
  "name": "electron-react-app",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  ...
}
\`\`\`

`;



export const Chapter1 = () => {
  return (
    <Layout title={title}>
      <ReactMarkdown source={InstallContents} />


      <p>
        <b>electron-react-app/webpack.config.js</b>
      </p>
      <SyntaxHighlighter language="json" style={tomorrowNight}>
        {packageJSON}
      </SyntaxHighlighter>


      <p>
        <b>electron-react-app/webpack.config.js</b>
      </p>
      <SyntaxHighlighter language="javascript" style={tomorrowNight}>
        {webpackConfigJS}
      </SyntaxHighlighter>


      <p>
        <b>src/main.ts</b>
      </p>
      <SyntaxHighlighter language="typescript" style={tomorrowNight} >
        {electronTS}
      </SyntaxHighlighter>

    </Layout>
  );
};
