import React, { useEffect } from "react";
import Routes from "./routes";

const App = () => {
    useEffect(() => {
        document.title = `Electron + React`;
    }, []);

    return <Routes />;
};
export default App;