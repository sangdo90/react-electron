import Routes from "./routes";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    document.title = `Electron + React`;
  }, []);

  return <Routes />;
};

export default App;
