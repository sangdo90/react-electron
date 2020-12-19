import React from "react";
import styled from "styled-components";
import {SideMenu} from '../sidemenu'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  height: 99.9%;
  display: flex;
  outline: solid 0px red;
  border-bottom: 1px solid #dfe4ee;
`;

const Contents = styled.div`
  overflow: auto;
  width: 100%;
  padding: 20px 1%;
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 30px;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 3px solid #dfe4ee;
  padding-bottom: 55px;
  & h1 {
    z-index: 100;
    font-size: 34px;
    line-height: 40px;
    color: #01385c;
    font-weight: bold;
  }
`;

const SubWrap = styled.div`
  width: 95%;
  height: 95%
  margin: 0 auto;
  // position: absolute;
  margin-top: 25px;
  margin-left: 25px;
  & h2::before {
    content: "-";
    padding-right: 20px;
  }
`;

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <Wrap>
      <Main>
        <SideMenu />
        <Contents>
          <Title>
            <h1> {props.title} </h1>
          </Title>
          <SubWrap> {props.children} </SubWrap>
        </Contents>
      </Main>
    </Wrap>
  );
};