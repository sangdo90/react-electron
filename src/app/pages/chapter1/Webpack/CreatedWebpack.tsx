import React from "react";
import { Layout } from "../../../components";
import styled from "styled-components";
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

const HorizontalContents = styled.div`
display : flex;
`;
const LeftContent = styled.div`
flex : 1;
margin-right : 40px;
`;
const MiddleContent = styled.div`
flex : 1;
margin : auto;
`;
const RightContent = styled.div`
flex : 1;
margin-left : 40px;
`;


const title: string = "React + Webpack + Electron + Typescript Setting up";

const installMd = `
# 1. Install
## 사용 기술 및 패키지
- Electron
- React
- Typescript
- Webpack
`;


const tsconfigMd = `
* tsconfig.json 파일은 프로젝트를 컴파일하는 데 필요한 루트 파일과 컴파일러 옵션을 지정  
   -- Typescript로 짜여진 코드를 Javascriptf로 변환해줄 compiler 역할
* tsconfig.json 파일이 있는 위치가 TypeScript Prject root directory가 됨  
[tsconfig 옵션](https://www.typescriptlang.org/tsconfig)  
[tsconfig 스키마](http://json.schemastore.org/tsconfig)
        `

const tsconfig2Md = `
* esModuleInterop   
  - false 일 경우 import 구문에서 에러가 발생
  - true로 설정될 경우, ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져옴
`;

export const CreatedWebpack = () => {
  return (
    <Layout title={title}>

      <ReactMarkdown
        source={installMd}
        renderers={{ code: CodeBlock }} />


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

      <HorizontalContents>

        <LeftContent>
          <CodeBlock
            comment="tsconfig.json file"
            language="bash" >
            {tsConfig1}
          </CodeBlock>
        </LeftContent>

        <div style={{ margin: 'auto' }}><p > 또는 </p></div>

        <RightContent>
          <CodeBlock
            comment="tsc command"
            language="bash" >
            {tsConfig2}
          </CodeBlock>
        </RightContent>

      </HorizontalContents>

      <ReactMarkdown
        source={tsconfigMd} />

      <CodeBlock
        comment="tsconfig 수정"
        language="json" >
        {tsConfigJson}
      </CodeBlock>

      <ReactMarkdown
        source={tsconfig2Md} />

      <CodeBlock
        comment="electron Install"
        language="bash" >
        {elecInstall}
      </CodeBlock>

      <CodeBlock
        comment="src 에 index.html,  main.ts 파일 생성"
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
