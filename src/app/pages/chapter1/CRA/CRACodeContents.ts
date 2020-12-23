export const ProjectSetup = `
$ npx create-react-app Project-name --typescript
$ cd Project-name`;

export const installElectronTools = `
$ yarn add --dev electron electron-builder concurrently wait-on cross-env
`;

export const elecIsDevInstall = `
$ yarn add electron-is-dev
`;

export const electronJs = `

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            devTools: isDev,
        },
    });


    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : path.join(__dirname, "../build/index.html")
    );

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.setResizable(true);
    mainWindow.on('closed', () => (mainWindow = null));
    mainWindow.focus();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
`;

export const pakageJson = `
...

"main": "public/electron.js",
"homepage": "./",

...

"scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "react-test": "react-scripts test",
    "react-eject": "react-scripts eject",
    "start": "concurrently \"cross-env NODE_ENV=development BROWSER=none yarn react-start\" \"wait-on http://localhost:3000 && electron .\"",
    "build": "yarn react-build && electron-builder",
    "release": "yarn react-build && electron-builder --publish=always"
},

...

`;

export const yarnStart = `$ yarn start`;


