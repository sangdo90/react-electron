import React from "react";
import { Layout } from "../components";
import ReactMarkdown from "react-markdown";

const title = "React + Electron + (webpack) setting";

const contents = `
# 제목 1
1. ~~~~~
2. ~~~~~
3. ~~~~~

- ㄴㅇㄹㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
- ㄴㅁㅇㄹㅁㄴㅇㄹㅁㅇ


## 소제목
`;

export const Chapter1 = () => {
  return (
    <Layout title={title}>
      <ReactMarkdown source={contents} />
    </Layout>
  );
};
