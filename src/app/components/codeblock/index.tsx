import React from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarginProps{
  marginTop?: string;
  marginBottom?: string;
}

const Block = styled.div<MarginProps>`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  & p {
    font-size: 25px;
    margin-bottom: 5px;
  }
`;

interface CodeBlockProps {
  comment: string;
  language: string;
  style: string;
  marginTop?: string;
  marginBottom?: string;
  children: React.ReactNode;
}

export const CodeBlock = (
  { comment, language, style, children, marginTop, marginBottom }: CodeBlockProps,
) => {

  console.log(marginBottom, marginTop)
  console.log(comment)
  return (
    <Block marginTop={marginTop} marginBottom={marginBottom}>
      <p>
        <b>{comment}</b>
      </p>
      <SyntaxHighlighter language={language} style={style}>
        {children}
      </SyntaxHighlighter>
    </Block>
  );
};

CodeBlock.defaultProps = {
  style: vscDarkPlus,
  marginTop: "40px",
  marginBottom: "15px",
};
