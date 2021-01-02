import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import Routes from "./routes";

const App = () => {
  useEffect(() => {
    document.title = `Electron + React`;
  }, []);

  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
};
export default App;