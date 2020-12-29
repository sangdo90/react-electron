import React from "react";
import { Layout } from "../../components";
// import { History } from "history";

const title: string = "Redux";

// interface ReduxProps {
//   history : History
//   /* other props for ChildComponent */
// }

export const Redux = () => {
  return <Layout title={title}>{title}</Layout>;
};
