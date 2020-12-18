import React from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Block = styled.div`
  margin-bottom: 40px;
`;

interface CodeBlockProps {
  comment: string;
  language: string;
  style: string;
  children: React.ReactNode;
}

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <Block>
      <p>
        <b>{props.comment}</b>
      </p>
      <SyntaxHighlighter language={props.language} style={props.style}>
        {props.children}
      </SyntaxHighlighter>
    </Block>
  );
};

CodeBlock.defaultProps = {
  style: tomorrowNight,
};
