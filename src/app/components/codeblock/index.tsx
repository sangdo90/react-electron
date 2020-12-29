import React from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Block = styled.div`
  margin-top: 40px;
  margin-bottom: 15px;
  & p {
    font-size: 25px;
    margin-bottom: 5px;
  }
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
  style: vscDarkPlus,
};
