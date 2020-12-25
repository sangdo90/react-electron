import React from "react";
import { Layout, CodeBlock } from "../../../components";
import ReactMarkdown from "react-markdown";
import { elecIsDevInstall, electronJs, installElectronTools, installIsDev, ProjectSetup, yarnStart, packageJson } from './CRACodeContents';
import isDevImg from '../../../assets/images/is_dev.png';
import buildImg from '../../../assets/images/build_electron.png';


const title: string = " Create React App + electron ";

const craInstallMd = `**Create React App 기반으로 typescript 기반 react 프로젝트 생성**`;

const toolsMd = `
* electron : Electron 기본 패키지
* electron-builder : electron을 원하는 플랫폼으로 빌드하게 해줌(windows, Linux, Mac, etc...)
* concurrently : 한번에 여러개의 명령어를 실행할 수 있게 하는 패키지
* wait-on : 특정 포트 또는 파일이 활성화 될 때까지 대기할수 있음
* cross-env : 시스템에 관계없이 환경변수 값을 설정
`;


const isDevMd = `
현재 환경이 개발 환경인지 아닌지 확인해주는 패키지.  
Electron 애플리케이션 실행시 이 패키지를 통해 실행 경로를 분기해서 사용
`;

const compareIsDevMd = `
## 개발 환경일 경우
![](isDev.png)  
electron 앱을 새로 빌드 하지않고 webpack을 통해 React 앱만 수정하여 화면에 보여줌
`;

const compareIsNotDevMd = `
## electron-webpack-version
![](notDev.png)  
Webpack으로 묶인 React 파일이 Electron 앱에 포함되어서 실행 파일로 만들어짐
`;


const IsDevImg = (): JSX.Element => {
  return (
    <img src={isDevImg} alt="isDev" />
  )
}

const BuildImg = (): JSX.Element => {
  return (
    <img src={buildImg} />
  )
}

export const CRA = () => {

  return (
    <Layout title={title}>

      {/* <ReactMarkdown source={InstallContents} /> */}

      <CodeBlock
        comment="Project setup"
        language="bash">
        {ProjectSetup}
      </CodeBlock>

      <ReactMarkdown
        source={craInstallMd} />

      <CodeBlock
        comment="개발시 유용한 패키지 install"
        language="bash" >
        {installElectronTools}
      </CodeBlock>

      <ReactMarkdown
        source={toolsMd} />

      <CodeBlock
        comment="electron-is-dev 패키지 설치"
        language="bash" >
        {installIsDev}
      </CodeBlock>

      <ReactMarkdown
        source={isDevMd} />

      <CodeBlock
        comment="./public/electron.js 파일 생성"
        language="javascript" >
        {electronJs}
      </CodeBlock>


      <ReactMarkdown
        source={compareIsDevMd}
        renderers={{ image: IsDevImg }} />

      <ReactMarkdown
        source={compareIsNotDevMd}
        renderers={{ image: BuildImg }} />



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
