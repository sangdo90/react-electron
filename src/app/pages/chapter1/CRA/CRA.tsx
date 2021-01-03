import React from "react";
import { Layout, CodeBlock, Figure } from "../../../components";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import {
  elecIsDevInstall,
  electronJs,
  installElectronTools,
  installIsDev,
  ProjectSetup,
  yarnStart,
  packageJson,
} from "./CRACodeContents";

const title: string = " Create React App + electron ";

const HorizontalContents = styled.div`
  display: flex;
`;
const LeftContent = styled.div`
  flex: 1;
  margin-right: 40px;
`;
const MiddleContent = styled.div`
  flex: 1;
  margin: auto;
`;
const RightContent = styled.div`
  flex: 1;
  margin-left: 40 px;
`;

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
![](notDev.png)  ㄴ
Webpack으로 묶인 React 파일이 Electron 앱에 포함되어서 실행 파일로 만들어짐
`;

const packageJsonMd = `
- main을 \`public/electron.js\` (electron 파일 위치)로하고 
- homepage를 넣어줘야 빌드 됨  
- 참고 [CRA deployment.md](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/deployment.md#building-for-relative-paths)
`;


const ejectMd = `
## Eject  
기본적으로 CRA는 프로젝트 디렉토리를 간결하게 유지하기 위해서 웹팩 설정이나 script들의 자세한 동작을 명시한 script 폴더를 숨겨 놓음  
숨겨진 세부 설정을 커스텀해야 할 필요가 있다면  
\`yarn eject\` 또는 \`npm run eject\` 사용해서    
숨겨놓은 설정 파일들을 프로젝트에 표시되게끔 만들 수 있음  
**eject를 한 번 하면 이전 상태로 돌아갈 수 없음**
`;

const isDevImg = "./images/is_dev.png";
const buildImg = "./images/build_electron.png";
const configImg = "./images/config_dir.png";
const scirptsImg = "./images/scripts_dir.png";

const IsDevImg = (): JSX.Element => {
  return (
    <img
      src={isDevImg}
      alt="isDev"
      style={{ maxWidth: "100%", height: "auto", minWidth: "700px" }}
    />
  );
};

const BuildImg = (): JSX.Element => {
  return (
    <img
      src={buildImg}
      style={{ maxWidth: "100%", height: "auto", minWidth: "700px" }}
    />
  );
};

export const CRA = () => {
  return (
    <Layout title={title}>
      <CodeBlock comment="Project setup" language="bash">
        {ProjectSetup}
      </CodeBlock>

      <ReactMarkdown source={craInstallMd} />

      <CodeBlock comment="개발시 유용한 패키지 install" language="bash">
        {installElectronTools}
      </CodeBlock>

      <ReactMarkdown source={toolsMd} />

      <CodeBlock comment="electron-is-dev 패키지 설치" language="bash">
        {installIsDev}
      </CodeBlock>

      <ReactMarkdown source={isDevMd} />

      <CodeBlock comment="./public/electron.js 파일 생성" language="javascript">
        {electronJs}
      </CodeBlock>

      <ReactMarkdown source={compareIsDevMd} renderers={{ image: IsDevImg }} />

      <ReactMarkdown
        source={compareIsNotDevMd}
        renderers={{ image: BuildImg }}
      />

      <CodeBlock comment="package.json 파일 수정" language="json">
        {packageJson}
      </CodeBlock>

      <ReactMarkdown source={packageJsonMd} />

      <CodeBlock comment="실행" language="bash">
        {yarnStart}
      </CodeBlock>

      <ReactMarkdown source={ejectMd} />

      <HorizontalContents>
        <LeftContent>
          <Figure srcUrl={configImg} caption="config 디렉터리" />
        </LeftContent>

        <RightContent>
          <Figure srcUrl={scirptsImg} caption="config 디렉터리" />
        </RightContent>
      </HorizontalContents>
    </Layout>
  );
};
