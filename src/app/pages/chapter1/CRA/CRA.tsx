import React from "react";
import { Layout } from "../../../components";
import { CodeBlock } from "../../../components";
import { elecInstall, packageJson } from "../Webpack/CodeContents";
import { elecIsDevInstall, electronJs, installElectronTools, ProjectSetup, yarnStart } from './CRACodeContents';

const title: string = " Create React App + electron ";


export const CRA = () => {
  return (
    <Layout title={title}>

      {/* <ReactMarkdown source={InstallContents} /> */}

      <CodeBlock
        comment="Project setup"
        language="bash">
        {ProjectSetup}
      </CodeBlock>
      타입스크립트 기반으로 react와 webpack 설정이 되어 있는 프로젝트가 설정 됩니다.

      <CodeBlock
        comment="개발시 유용한 패키지 install"
        language="bash" >
        {installElectronTools}
      </CodeBlock>
      <div>
        electron : Electron 기본 패키지
        electron-builder : electron을 원하는 플랫폼으로 빌드해 줍니다.
        concurrently : 한번에 여러개의 명령어를 실행할 수 있게 해 줍니다.
        wait-on : 특정 포트 또는 파일이 활성화 될 때까지 대기를 해 줍니다.
        cross-env : 시스템에 관계없이 환경변수 값을 설정할 수 있게 해 줍니다.
      </div>


      <CodeBlock
        comment="./public/electron.js 파일 생성"
        language="javascript" >
        {electronJs}
      </CodeBlock>


      <CodeBlock
        comment="package.json 파일 수정"
        language="json" >
        {packageJson}
      </CodeBlock>

      <CodeBlock
        comment="실행"
        language="bash" >
        {yarnStart}
      </CodeBlock>

    </Layout>
  );
};
