import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import styled from "styled-components";

interface mdProps {
  content: string;
  marginTop?: string;
  marginBottom?: string;
}

interface MarginProps {
  marginTop?: string;
  marginBottom?: string;
}

const MarkdownWrapper = styled.div<MarginProps>`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  & p {
    // font-size: 25px;
   line-height : 1.5;
  }
`;

const Markdown = ({ content, marginBottom, marginTop }: mdProps) => {
  return (
    <MarkdownWrapper marginBottom={marginBottom} marginTop={marginTop}>
      <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
    </MarkdownWrapper>
  );
};
export default Markdown;


MarkdownWrapper.defaultProps = {
  marginTop: "10px",
  marginBottom: "60px",
};
