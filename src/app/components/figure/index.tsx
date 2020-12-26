
import React from "react";
import styled from "styled-components";

const Block = styled.div`
  margin-top: 40px;
  margin-bottom: 15px;
  & p {
    font-size:25px;
    margin-bottom : 5px;
  }
`;

interface FigureProps {
  srcUrl: string;
  alt?: string;
  caption?: string;
}

export const Figure = (props: FigureProps) => {
  return (
    <div>
      <figure>
        <img src={props.srcUrl} alt={props.alt} />
        <figcaption>{props.caption} </figcaption>
      </figure>
    </div>
  );
};
