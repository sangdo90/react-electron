import React from "react";
import { Layout } from "../../../components";
import ReactMarkdown from "react-markdown";
import {
  InstallContents,
  ProjectSetup,
  tsSetup,
  tsConfig1,
  tsConfig2,
  indexHtml,
  mainTs,
  elecInstall,
  elecSetup,
  webpackInstall,
  webpackConfig,
  reactSetup,
  rendererTsx,
  appTsx,
  packageJson,
  tsConfigJson
  
} from "./CodeContents";
import { CodeBlock } from "../../../components";


const title: string = "React + Webpack + Electron + Typescript Setting up";

export const CreatedWebpack = () => {
  return (
    <Layout title={title}>
      
      {/* <ReactMarkdown source={InstallContents} /> */}

      <CodeBlock
        comment="Project setup"
        language="bash">
        {ProjectSetup}
      </CodeBlock>

      <CodeBlock
        comment="Install Typescript"
        language="bash" >
        {tsSetup}
      </CodeBlock>

      <CodeBlock
        comment="tsconfig.json file"
        language="bash" >
        {tsConfig1}
      </CodeBlock>

      or 
      <CodeBlock
        comment="tsc command"
        language="bash" >
        {tsConfig2}
      </CodeBlock>

      <CodeBlock
        comment="tsconfig 수정"
        language="json" >
        {tsConfigJson}
      </CodeBlock>

      <CodeBlock
        comment="electron Install"
        language="bash" >
        {elecInstall}
      </CodeBlock>

      <CodeBlock
        comment="src 에 index.html main.ts 파일 생성"
        language="bash" >
        {elecSetup}
      </CodeBlock>

      <CodeBlock
        comment="src/index.html"
        language="html" >
        {indexHtml}
      </CodeBlock>

      <CodeBlock
        comment="src/main.ts"
        language="typescript" >
        {mainTs}
      </CodeBlock>


      <CodeBlock
        comment="webpack 설치"
        language="bash" >
        {webpackInstall}
      </CodeBlock>


      <CodeBlock
        comment="webpac.config.js"
        language="javascript" >
        {webpackConfig}
      </CodeBlock>

      <CodeBlock
        comment="react 설치"
        language="bash" >
        {reactSetup}
      </CodeBlock>

      <CodeBlock
        comment="src/renderer.tsx"
        language="typescript" >
        {rendererTsx}
      </CodeBlock>


      <CodeBlock
        comment="src/app/App.tsx"
        language="typescript" >
        {appTsx}
      </CodeBlock>

      <CodeBlock
        comment="package.json 수정"
        language="json" >
        {packageJson}
      </CodeBlock>
  
    </Layout>
  );
};
