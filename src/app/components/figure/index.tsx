import React from "react";
import styled from "styled-components";

const FigureWrap = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface FigureProps {
  srcUrl: string;
  alt?: string;
  caption?: string;
}

export const Figure = (props: FigureProps) => {
  return (
    <FigureWrap>
      <figure>
        <img src={props.srcUrl} alt={props.alt} />
        <figcaption>{props.caption} </figcaption>
      </figure>
    </FigureWrap>
  );
};
